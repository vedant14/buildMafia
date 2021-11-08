import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const FooterWrapper = styled.div`
	background: ${colors.white};
	margin-top: 100px;
	overflow: hidden;
	padding: 30px auto;
	> div {
		display: grid;
		grid-template-columns: 1fr;
		@media screen and (min-width: 1080px) {
			grid-template-columns: 1fr 1fr;
			grid-gap: 30px;
		}

		@media screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		margin-top: 50px;
		margin-bottom: 100px;
	}
	.footer-link {
		list-style-type: none;
		padding-inline-start: 0px;
		> li > a {
			color: ${colors.washedBlack};
			border-bottom: 3px solid ${colors.brandYellow};
		}
	}
	.head {
		font-weight: 600;
		font-size: 24px;
		line-height: 30px;
		color: ${colors.primaryBlack};
	}
	.form {
		height: 250px;
		@media screen and (min-width: 1080px) {
			height: 230px;
		}
	}

	.image-container {
		> div {
			position: unset !important;
		}

		.image {
			object-fit: contain;
			height: 50px !important;
			width: auto !important;
			margin: 10px 0px !important;
			position: relative !important;
		}
	}
`;

export const LogoWrapper = styled.h4`
	cursor: pointer;
	margin: 10px auto auto auto;
	font-weight: 900;
	@media screen and (min-width: 1080px) {
		margin: 25px 0px;
	}
`;
