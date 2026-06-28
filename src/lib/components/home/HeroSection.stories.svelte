<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HeroSection from './HeroSection.svelte';
	import { featuredRecording, siteTitle } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/HeroSection',
		component: HeroSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			title: siteTitle,
			description:
				"We're always working on music! A lot of our ideas are still in demo or rough track form. We're hoping to start releasing music across all major streaming platforms within the next year.",
			recording: featuredRecording
		}
	});
</script>

<Story name="Default" />
