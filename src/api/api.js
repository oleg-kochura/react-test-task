import axios from 'axios';

const url = 'https://api.adorable.io/avatars/list';
const proxy = 'https://cors-anywhere.herokuapp.com';

export function api() {
	return axios.get(`${proxy}/${url}`);
}