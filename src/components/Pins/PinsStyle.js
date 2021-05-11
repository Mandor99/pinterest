import styled from 'styled-components';
import { Margins, Sizes, media } from '../../style/GlobalStyle';

export const Wrapper = styled.div`
	column-gap: ${Margins.gap_100};
	column-count: 5;
	/* @media (max-width: 560px) {
		column-count: 2;
	} */
	@media (min-width: 561px) and (max-width: 768px) {
		column-count: 3;
	}

	${media.deskTop} {
		column-count: 5;
	}
	${media.lapTop} {
		column-count: 4;
	}
	${media.iPad} {
		column-count: 3;
	}
	${media.tab} {
		column-count: 3;
	}
	${media.mobile} {
		column-count: 2;
	}
`;
export const Img = styled.img`
	width: 100%;
	object-fit: cover;
	cursor: zoom-in;
	border-radius: ${Sizes.radius_100};
`;

export const Figure = styled.figure`
	width: 195px;
	//in more media sizes is 15vw;
	margin-top: ${Margins.gap_100};

	${media.deskTop} {
		width: 15vw;
	}

	${media.tab} {
		width: 165px;
	}

	${media.mobile_sm} {
		width: 145px;
	}
`;
