<script>
import { getMovieById } from '../apiCall';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
export default {
	setup() {
		const route = useRoute();
		const movie = ref({});

		onBeforeMount(async () => {
			try {
				const movieData = await getMovieById(route.params.id);
				movie.value = movieData.data;
			} catch (error) {
				console.log(error);
			}
		});

		return { movie };
	},
};
</script>
<template>
	<section class="min-h-screen text-gray-700 body-font overflow-hidden bg-white">
		<div class="container px-5 py-24 mx-auto">
			<div class="text-sm breadcrumbs absolute">
				<ul>
					<li>
						<router-link :to="{ name: 'home' }">Back to Movies</router-link>
					</li>
				</ul>
			</div>
			<div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
				<img
					class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
					:src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`"
					:alt="movie.title"
				/>
				<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<h2 class="text-sm title-font text-gray-500 tracking-widest">
						Released on {{ movie.release_date }}
					</h2>
					<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
						{{ movie.original_title }}
					</h1>
					<p class="leading-relaxed mt-6 pb-5 border-b-2 border-gray-200 mb-5">
						{{ movie.overview }}
					</p>
					<p>
						Movie page: <a :href="movie.homepage">{{ movie.homepage }}</a>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
