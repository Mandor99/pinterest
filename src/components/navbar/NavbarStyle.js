import styled from 'styled-components';
import {
	Colors,
	Sizes,
	BTN1,
	Paddings,
	Margins,
	Shadows,
} from '../../style/GlobalStyle';

export const Nav = styled.nav`
	color: ${Colors.black};
	background-color: ${Colors.white};
	box-shadow: ${Shadows.shadow_100};
`;

export const Wrapper = styled.div`
	width: 90%;
	margin: auto;
`;

export const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${Margins.gap_150};
	height: ${Sizes.height_med};
`;

export const Figure = styled.figure`
	color: ${Colors.main_1};

	.MuiSvgIcon-root {
		font-size: 2rem;
	}
`;

export const HomeBTN = styled(BTN1)``;

export const FollowBTN = styled(BTN1)`
	background-color: ${Colors.white};
	color: ${Colors.black};

	&:hover {
		background: ${Colors.light_100};
	}
`;

export const SearchWrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	background-color: ${Colors.light_100};
	border-radius: 50px;
	padding-left: 0.5rem;
`;

export const SearchForm = styled.form`
	width: 100%;
	display: flex;
	align-items: center;

	button {
		visibility: hidden;
	}
`;

export const SearchInput = styled.input`
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 1rem;
	font-weight: 700;
	/* width: 100%; */
	flex: 1;
	padding: ${Paddings.padding_sm};

	&:focus {
		outline: none;
		border: none;
	}
`;

export const IconBTN = styled.div`
	cursor: pointer;
`;
