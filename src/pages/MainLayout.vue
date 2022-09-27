<script>
import { getMovies } from '../apiCall';
import { ref } from 'vue';
export default {
	setup() {
		const movies = ref([]);
		const fetchMovies = async () => {
			const moviesData = await getMovies();
			movies.value = moviesData.data.results;
		};

		return { movies, fetchMovies };
	},
};
</script>

<template>
	<section class="bg-base-400 py-20">
		<div class="hero-content text-center mx-auto">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Movietor</h1>
				<p class="py-4">Discover new movies!</p>
				<p>Made with:</p>
				<ul class="my-4 flex space-x-4">
					<li><span class="badge badge-accent">Tailwind</span></li>
					<li><span class="badge badge-accent">DaysiUI</span></li>
					<li><span class="badge badge-accent">Vue</span></li>
					<li><span class="badge badge-accent">Vite</span></li>
				</ul>
				<button class="btn btn-outline" @click="fetchMovies">Fetch some movies!</button>
			</div>
		</div>
	</section>
	<section class="movie__list bg-base-content py-20">
		<ul class="flex flex-wrap container mx-auto gap-y-10 gap-x-1 justify-evenly">
			<li v-for="movie in movies" :key="movie.id" class="card basis-1/4 bg-base-100 shadow-xl">
				<figure>
					<img :src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`" :alt="movie.title" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{{ movie.title }}</h2>
					<p>{{ movie.overview.substring(0, 100) + '...' }}</p>
					<div class="card-actions justify-end">
						<router-link
							class="btn btn-primary"
							:to="{ name: 'MovieInfo', params: { id: movie.id } }"
							>More details</router-link
						>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<style scoped></style>
