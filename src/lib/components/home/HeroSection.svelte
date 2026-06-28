<script lang="ts">
	import type { Recording } from '$lib/data/site';
	import FeaturedRecordingCard from '$lib/components/home/FeaturedRecordingCard.svelte';

	type Props = {
		title: string;
		description: string;
		recording: Recording;
	};

	let { title, description, recording }: Props = $props();
</script>

<section id="hero" class="flex min-h-screen items-center px-4 py-20 md:px-8">
	<div
		class="mx-auto grid w-full max-w-5xl animate-[fade-in_0.8s_ease_0.1s_forwards] items-center gap-10 opacity-0 lg:grid-cols-[3fr_2fr] lg:gap-14"
	>
		<div class="text-left">
			<h1
				class="hero-gradient-text mb-6 text-5xl leading-none font-bold md:text-7xl lg:whitespace-nowrap"
			>
				{title}
			</h1>
			<p class="text-muted mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
				{description}
			</p>
		</div>

		<FeaturedRecordingCard {recording} />
	</div>
</section>
