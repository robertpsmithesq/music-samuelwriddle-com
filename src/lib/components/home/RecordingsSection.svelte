<script lang="ts">
	import type { Recording } from '$lib/data/site';
	import RecordingCard from '$lib/components/home/RecordingCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	type Props = {
		recordings: Recording[];
	};

	let { recordings }: Props = $props();
</script>

<section id="music" class="px-4 py-24 md:px-8">
	<div class="mx-auto max-w-5xl text-center">
		<SectionHeading
			title="Selected"
			accent="Recordings"
			description="Some of the tracks we're working on."
		/>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each recordings as recording (recording.audioPath)}
				<RecordingCard {recording} />
			{/each}
		</div>
	</div>
</section>
