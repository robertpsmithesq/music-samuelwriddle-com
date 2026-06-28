<script lang="ts">
	import type { FavoriteCollabs, Tone } from '$lib/data/site';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import TopReleaseCard from '$lib/components/home/TopReleaseCard.svelte';

	type Props = {
		collabs: FavoriteCollabs;
		id?: string;
		title?: string;
		accent?: string;
		description?: string;
		accentColor?: Tone;
	};

	let {
		collabs,
		id = 'collabs',
		title = 'Favorite',
		accent = 'Collabs',
		description = "We've been delighted to play with some of our friends over the years.",
		accentColor = 'red'
	}: Props = $props();
</script>

<section {id} class="px-4 py-24 md:px-8">
	<div class="mx-auto max-w-6xl text-center">
		<SectionHeading {title} {accent} {description} {accentColor} />

		<div class="grid gap-8 text-left lg:grid-cols-2">
			<div>
				<h3 class="accent-red mb-4 font-mono text-sm uppercase">Songs</h3>
				<div class="flex flex-col gap-4">
					{#each collabs.songs as release (release.title)}
						<TopReleaseCard {release} tone="red" />
					{/each}
				</div>
			</div>

			<div>
				<h3 class="accent-red mb-4 font-mono text-sm uppercase">Videos</h3>
				<div class="flex flex-col gap-4">
					{#each collabs.videos as release (release.title)}
						<TopReleaseCard {release} tone="red" />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
