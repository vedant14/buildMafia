import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { supabase } from "../../services/supabaseClient";
export function UploadData({ slugLink, id }) {
	const slug = slugLink.split("/").pop().split("?")[0];
	const QUERY = gql`
		query Posts($slug: String!) {
			post(slug: $slug) {
				id
				name
				tagline
				featuredAt
				description
				votesCount
				thumbnail {
					url
				}
				productLinks {
					url
				}
				makers {
					id
					name
					profileImage
					url
					twitterUsername
				}
			}
		}
	`;
	const { loading, error, data } = useQuery(QUERY, {
		variables: { slug: slug },
	});
	if (loading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		console.error(error);
		return null;
	}
	const post = data.post;

	const handleUpload = () => {
		console.log("Starting Upload");
		uploadProductSupa();
		getBuilders();
		uploadBuilders();
		deleteRow();
	};

	var product_id = null;
	var builder_ids = [];

	const uploadProductSupa = async () => {
		var linkArray = [];
		post.productLinks.map((link) => linkArray.push(link.url));
		const { data, error } = await supabase.from("Product").upsert(
			{
				ph_id: post.id,
				name: post.name,
				slug: slug,
				tagline: post.tagline,
				description: post.description,
				vote_count: post.votesCount,
				thumbnail: post.thumbnail.url,
				product_links: linkArray,
			},
			{ onConflict: "slug" }
		);
		product_id = data[0].id;
		console.log("Uploaded Product", data);
	};

	const getBuilders = () => {
		post.makers.map((maker) => uploadUserSupa(maker));
	};

	const uploadUserSupa = async (maker) => {
		const { data, error } = await supabase.from("Builders").upsert(
			{
				ph_id: maker.id,
				name: maker.name,
				profile_link: maker.url,
				profile_image: maker.profileImage,
				twitter_username: maker.twitterUsername,
			},
			{ onConflict: "ph_id" }
		);
		builder_ids.push(data[0].id);
		console.log("Uploaded Builder", data);
	};

	const uploadBuilders = () => {
		builder_ids.map((builder_id) => uploadProductLink(builder_id));
		console.log("Mapping Builders", builder_ids);
	};

	const uploadProductLink = async (builder_id) => {
		console.log("Uploaded Product Link", builder_id);
		const { data, error } = await supabase.from("BuilderProducts").upsert({
			product_id: product_id,
			builder_id: builder_id,
		});
	};
	const deleteRow = async () => {
		const { data, error } = await supabase
			.from("Submission")
			.delete()
			.eq("id", id);
		console.log("Deleted Submission", data);
	};

	return (
		<div className="Container">
			{post && (
				<div>
					{post.name}
					<button onClick={() => handleUpload()}>Upload Data</button>
				</div>
			)}
		</div>
	);
}
