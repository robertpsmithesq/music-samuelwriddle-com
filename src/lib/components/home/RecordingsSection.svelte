<script lang="ts">
	import type { Recording, Tone } from '$lib/data/site';
	import RecordingCard from '$lib/components/home/RecordingCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	type Props = {
		recordings: Recording[];
		id?: string;
		title?: string;
		accent?: string;
		description?: string;
		accentColor?: Tone;
		cardTone?: Tone;
	};

	let {
		recordings,
		id = 'music',
		title = 'Selected',
		accent = 'Recordings',
		description = "Some of the tracks we're working on.",
		accentColor = 'red',
		cardTone = 'red'
	}: Props = $props();
</script>

<section {id} class="px-4 py-24 md:px-8">
	<div class="mx-auto max-w-5xl text-center">
		<SectionHeading {title} {accent} {description} {accentColor} />

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each recordings as recording (recording.audioPath)}
				<RecordingCard {recording} tone={cardTone} />
			{/each}
		</div>
	</div>
</section>
