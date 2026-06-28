<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TopReleasesSection from './TopReleasesSection.svelte';
	import { topReleases } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/TopReleasesSection',
		component: TopReleasesSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			releases: topReleases
		}
	});
</script>

<Story name="Default" />
