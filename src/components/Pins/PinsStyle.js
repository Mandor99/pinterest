import styled from 'styled-components';
import { Margins, Sizes } from '../../style/GlobalStyle';

export const Wrapper = styled.div`
	column-count: 5;
	column-gap: ${Margins.gap_100};
`;
export const Img = styled.img`
	width: 100%;
	object-fit: cover;
	cursor: zoom-in;
	border-radius: ${Sizes.radius_100};
`;

export const Figure = styled.figure`
	width: 215px;
	//in more media sizes is 15vw;
	margin-top: ${Margins.gap_100};
`;
