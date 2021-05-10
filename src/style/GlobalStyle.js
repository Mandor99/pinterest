import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    body, html {
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export const Colors = {
	white: '#fff',
	black: '#000',
	main_1: '#e60023',
	light_100: '#e1e1e1',
	dark_100: 'rgb(17, 17, 17)',
};

export const Paddings = {
	padding_1: '12px 4px 4px 16px',
	padding_2: '1rem 1.5rem',
	padding_sm: '.6rem',
	padding_100: '1rem',
};

export const Margins = {
	gap_100: '1rem',
	gap_150: '1.5rem',
	gap_200: '2rem',
};

export const Sizes = {
	height_sm: '48px',
	height_med: '56px',
	radius_100: '24px',
	radius_200: '16px',
};

export const Shadows = {
	shadow_100:
		'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
};

export const BTN1 = styled.button`
	cursor: pointer;
	border-radius: ${Sizes.radius_100};
	background-color: ${Colors.dark_100};
	color: ${Colors.white};
	border: none;
	padding: ${Paddings.padding_2};
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		color: inherit;
		text-decoration: none;
		font-weight: 700;
		width: 100%;
		display: block;
	}

	&:hover {
		/* background-color: ${Colors.white}; */
	}
`;

export const WrapperCenterFlex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LinkMain = styled.a`
	text-decoration: none;
	font-weight: 700;
	cursor: pointer;
	color: ${Colors.black};
`;
