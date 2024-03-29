import styled from "styled-components";

export const Container = styled.div`
	background-color: #1a242f;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 20px;

	@media screen and (max-width: 768px) {
		width: 100px;
	}
`;
export const CardBottom = styled.div`
	padding: 0 5px;
`;
export const CardTop = styled.div``;
export const Img = styled.img`
	width: 100%;
`;
export const Name = styled.h4`
	font-size: 14px;
	font-weight: 400;

	@media screen and (max-width: 768px) {
		font-size: 10px;
	}
`;
export const Character = styled.h5`
	font-size: 12px;
	font-weight: 100;
	margin-bottom: 5px;

	@media screen and (max-width: 768px) {
		font-size: 10px;
	}
`;
export const Span = styled.span`
	color: #ffbb00;
`;
