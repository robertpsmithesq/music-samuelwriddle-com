<script lang="ts">
	import type { LinkCard as LinkCardData } from '$lib/data/site';
	import LinkCard from '$lib/components/home/LinkCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	type Props = {
		id: string;
		title: string;
		accent: string;
		accentColor?: 'red' | 'blue';
		description: string;
		links: LinkCardData[];
		narrow?: boolean;
	};

	let {
		id,
		title,
		accent,
		accentColor = 'blue',
		description,
		links,
		narrow = false
	}: Props = $props();
</script>

<section {id} class="px-4 py-24 md:px-8">
	<div class="mx-auto max-w-5xl text-center">
		<SectionHeading {title} {accent} {accentColor} {description} />

		<div class={`mx-auto flex flex-wrap justify-center gap-6 ${narrow ? 'max-w-xl' : 'max-w-3xl'}`}>
			{#each links as link (link.href)}
				<LinkCard {link} />
			{/each}
		</div>
	</div>
</section>
