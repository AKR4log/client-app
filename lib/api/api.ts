import axios from 'axios';

export const axiosClassic = axios.create({
	baseURL: 'https://api.ookat.kg/api',
	headers: {
		'Content-Type': 'application/json'
	}
});
