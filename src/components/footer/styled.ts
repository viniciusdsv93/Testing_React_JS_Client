import styled from "styled-components";

export const Footer = styled.footer`
	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0px;

	a {
		color: #2294d2;
		font-weight: 700;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 400px) {
		font-size: 14px;
	}
`;
