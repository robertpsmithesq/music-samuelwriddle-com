<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import FavoriteCollabsSection from './FavoriteCollabsSection.svelte';
	import { favoriteCollabs } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/FavoriteCollabsSection',
		component: FavoriteCollabsSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			collabs: favoriteCollabs
		}
	});
</script>

<Story name="Default" />
