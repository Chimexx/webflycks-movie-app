import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
	grid-gap: 15px;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
`;
