<script lang="ts">
	import type { Tone } from '$lib/data/site';

	type Props = {
		tone?: Tone;
		image?: string;
		label?: string;
		large?: boolean;
		eyebrow?: string;
	};

	let { tone = 'red', image, label = 'Untitled', large = false, eyebrow }: Props = $props();
</script>

<div
	class={`song-art song-art-${tone} flex items-center justify-center ${large ? 'aspect-square' : 'h-48'}`}
>
	{#if image}
		<img src={image} alt={label} class="absolute inset-0 h-full w-full object-cover" />
	{:else}
		<div class="relative z-10 px-8 text-center">
			{#if eyebrow}
				<p class="text-muted mb-4 font-mono text-xs tracking-[0.35em] uppercase">
					{eyebrow}
				</p>
			{/if}
			<span class="text-5xl opacity-60" aria-hidden="true">♫</span>
		</div>
	{/if}
</div>
