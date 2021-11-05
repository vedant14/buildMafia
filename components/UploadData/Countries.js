import { useQuery, gql } from "@apollo/client";

export default function Countries({ slugLink }) {
	const slug = slugLink.toString();
	console.log(typeof slug);
	const QUERY = gql`
		query Posts($slug: String!) {
			post(slug: $slug) {
				votesCount
			}
		}
	`;

	const { loading, error, data } = useQuery(QUERY, {
		variables: { slug: slugLink },
	});
	if (loading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		console.error(error);
		return (
			<h2>
				{slug} {slugLink}
			</h2>
		);
	}

	const post = data.post;
	console.log("Posts", post);
	return (
		<div>
			{/* {countries.map((country) => ( */}
			{/* 	<div key={country.code}> */}
			{/* 		<h3>{country.name}</h3> */}
			{/* 		<p> */}
			{/* 			{country.code} - {country.emoji} */}
			{/* 		</p> */}
			{/* 	</div> */}
			{/* ))} */}
			Hi Vedant {post.votesCount}
			Hs{slug}
			{slugLink}
		</div>
	);
}
