<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LinksSection from './LinksSection.svelte';
	import { contactLinks, listenLinks } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/LinksSection',
		component: LinksSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			id: 'listen',
			title: 'Streaming',
			accent: 'Platforms',
			accentColor: 'red',
			description: 'Current places where the archive can be heard.',
			links: listenLinks
		}
	});
</script>

<Story name="Streaming Platforms" />
<!-- <Story
	name="Contact"
	args={{
		id: 'contact',
		title: 'Contact',
		accent: 'Me',
		accentColor: 'red',
		description: 'For recording notes, collaborations, or inquiries about the work.',
		links: contactLinks,
		narrow: true
	}}
/> -->
