<script lang="ts">
	import type { Tone, TopRelease } from '$lib/data/site';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import TopReleaseCard from '$lib/components/home/TopReleaseCard.svelte';

	type Props = {
		releases: TopRelease[];
		id?: string;
		title?: string;
		accent?: string;
		description?: string;
		accentColor?: Tone;
	};

	let {
		releases,
		id = 'releases',
		title = 'Top',
		accent = 'Releases',
		description = 'Some of our songs that are already out.',
		accentColor = 'blue'
	}: Props = $props();
</script>

<section {id} class="px-4 py-24 md:px-8">
	<div class="mx-auto max-w-5xl text-center">
		<SectionHeading {title} {accent} {description} {accentColor} />

		<div class="mx-auto flex max-w-3xl flex-col gap-4">
			{#each releases as release (release.title)}
				<TopReleaseCard {release} />
			{/each}
		</div>
	</div>
</section>
