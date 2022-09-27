import axios from 'axios';
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc`;

// AXIOS GLOBALS
// axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${API_TOKEN}`;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getMovies = () => {
	return axios({ method: 'get', url: API_URL, params: { page: 2 } });
};

//POST REQUEST
// axios({
//   method: 'post',
//   url: 'url',
// payload goes here
//   data:{
//     title: 'hello'
//   }
// })

// AXIOS INSTANCE
const axiosMovieInstance = axios.create({
	// Other custom settings
	baseURL: 'https://jsonplaceholder.typicode.com',
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// SIMULTANEOUS DATA
// function getData() {
//     axios
//       .all([
//         axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc'),
//         axios.get('https://api.themoviedb.org/3/trending/all/week')
//       ])
//       .then(axios.spread((movies, trending) => showOutput(trending)))
//       .catch(err => console.error(err));
//   }

// CUSTOM HEADERS
// function customHeaders() {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'sometoken'
//       }
//     };

//     axios
//       .post(
//         'https://jsonplaceholder.typicode.com/todos',
//         {
//           title: 'New Todo',
//           completed: false
//         },
//         config
//       )
//       .then(res => showOutput(res))
//       .catch(err => console.error(err));
//   }

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
	config => {
		console.log(
			`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`
		);

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
