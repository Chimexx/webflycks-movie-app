import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	margin-top: 30px;
	justify-content: center;
	align-items: center;
`;
export const Button = styled.button`
	height: 40px;
	font-size: 18px;
	font-weight: 400;
	border-radius: 5px;
	border: none;
	max-width: 150px;
	padding: 0 20px;
	background-color: #1a242f;
	color: #0084ff;
	border-top: 2px solid #0084ff;
	transition: all ease-in-out 0.3s;

	&:hover {
		color: #eee;
		border-top: 2px solid #eee;
	}
`;
