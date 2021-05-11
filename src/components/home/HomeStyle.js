import styled from 'styled-components';
import { Margins, media } from '../../style/GlobalStyle';

export const Main = styled.main`
	min-height: 80vh;
	margin-top: ${Margins.gap_100};
`;

export const Container = styled.div`
	width: 80%;
	margin-left: auto;
	margin-right: auto;

	${media.mobile_sm} {
		width: 80%;
	}

	${media.mobile_2sm} {
		width: 90%;
	}
`;
