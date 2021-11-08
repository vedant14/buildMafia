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
		uploadProductSupa();
		deleteRow();
	};

	var product_id = null;
	var builder_ids = [];

	const uploadProductSupa = async () => {
		var linkArray = [];
		post.productLinks.map((link) => linkArray.push(link.url));
		const { data, error } = await supabase.from("products").upsert(
			{
				ph_id: post.id,
				name: post.name,
				slug: slug,
				tagline: post.tagline,
				description: post.description,
				vote_count: post.votesCount,
				thumbnail: post.thumbnail.url,
				product_links: linkArray,
				featured_at: post.featuredAt,
			},
			{ onConflict: "slug" }
		);
		product_id = data[0].id;
		getBuilders();
	};

	const getBuilders = () => {
		post.makers.map((maker) => uploadUserSupa(maker));
	};

	const uploadUserSupa = async (maker) => {
		const { data, error } = await supabase.from("builders").upsert(
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
		mapBuilders();
	};

	const mapBuilders = () => {
		builder_ids.map((builder_id) => uploadProductLink(builder_id));
	};

	const uploadProductLink = async (builder_id) => {
		const { data, error } = await supabase.from("builder_products").upsert({
			product_id: product_id,
			builder_id: builder_id,
		});
	};
	const deleteRow = async () => {
		const { data, error } = await supabase
			.from("submissions")
			.delete()
			.eq("id", id);
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
