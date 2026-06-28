<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import RecordingCard from './RecordingCard.svelte';
	import { recordings } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Home/RecordingCard',
		component: RecordingCard,
		tags: ['autodocs'],
		args: {
			recording: recordings[0]
		}
	});
</script>

<Story name="Red" />
<Story name="Blue" args={{ recording: recordings[1], tone: 'blue' }} />
