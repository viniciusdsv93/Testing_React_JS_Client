import styled from "styled-components";

export const RegistryForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 15px;
	box-shadow: 0px 5px 20px hsl(212deg 49% 36% / 30%);
	padding: 20px;
	border-radius: 10px;
	border-top: 10px solid #2294d2;
	width: 80vw;
	max-width: 350px;
	min-height: 300px;
	margin-top: 20vh;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);

	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		text-align: start;
		font-size: 22px;
	}

	p {
		text-align: center;
	}

	a {
		color: #2294d2;
	}

	a:hover {
		text-decoration: underline;
	}

	span {
		color: #fea403;
		font-size: 14px;
	}

	input {
		border-radius: 3px;
		box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
		outline: none;
		border: none;
		padding: 5px 15px;
		font-size: 14px;
		font-family: "Poppins", sans-serif;
		width: 100%;
	}
`;

export const RegistryFormSubmit = styled.button`
	padding: 5px 10px;
	width: 100%;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #2294d2;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
	transition: all ease 0.3s;

	&:hover {
		background-color: #64b0d9;
	}
`;
