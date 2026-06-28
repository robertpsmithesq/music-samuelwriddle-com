<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import RecordingsSection from './RecordingsSection.svelte';
	import { recordings } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/RecordingsSection',
		component: RecordingsSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			recordings
		}
	});
</script>

<Story name="Default" />
