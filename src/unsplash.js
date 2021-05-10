import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID gEJ-KWL5GtnQHM3GAxma2q1xjYUGvfdJ8r6YwboLXyM',
	},
});
