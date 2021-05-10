import React, { useState } from 'react';
import {
	Nav,
	Wrapper,
	NavWrapper,
	Figure,
	HomeBTN,
	FollowBTN,
	SearchWrapper,
	SearchForm,
	SearchInput,
	IconBTN,
} from './NavbarStyle';
import {
	Pinterest,
	Notifications,
	Textsms,
	Face,
	KeyboardArrowDown,
	Search,
} from '@material-ui/icons';
import { LinkMain } from '../../style/GlobalStyle';
import unsplash from '../../unsplash';
import { usePins } from '../../app/hooks/PinsContext';

function Navbar() {
	const [input, setInput] = useState('');
	const [setPins] = usePins();
	const handleChange = (setter) => (e) => setter(e.target.value);
	const getSearchResults = (item) => {
		unsplash
			.get('https://api.unsplash.com/search/photos', {
				params: {
					query: item,
					per_page: 20,
				},
			})
			.then((res) => {
				const results = res.data.results;
				setPins([...results]);
			});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		getSearchResults(input);
	};
	return (
		<Nav>
			<Wrapper>
				<NavWrapper>
					<Figure>
						<Pinterest />
					</Figure>
					<HomeBTN>
						<LinkMain href='/'>HomePage</LinkMain>
					</HomeBTN>
					<FollowBTN>
						<LinkMain href='/'>Following</LinkMain>
					</FollowBTN>
					<SearchWrapper>
						<Search />
						<SearchForm onSubmit={handleSubmit}>
							<SearchInput onChange={handleChange(setInput)} />
							<button type='submit'></button>
						</SearchForm>
					</SearchWrapper>
					<IconBTN>
						<Notifications />
					</IconBTN>
					<IconBTN>
						<Textsms />
					</IconBTN>
					<IconBTN>
						<Face />
					</IconBTN>
					<IconBTN>
						<KeyboardArrowDown />
					</IconBTN>
				</NavWrapper>
			</Wrapper>
		</Nav>
	);
}

export default Navbar;
