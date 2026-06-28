<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TopReleaseCard from './TopReleaseCard.svelte';
	import { favoriteCollabs, topReleases } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/TopReleaseCard',
		component: TopReleaseCard,
		tags: ['autodocs'],
		args: {
			release: topReleases[0]
		}
	});
</script>

<Story name="Blue" />
<Story name="Red" args={{ release: favoriteCollabs.songs[0], tone: 'red' }} />
