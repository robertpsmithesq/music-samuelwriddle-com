<script lang="ts">
	import type { Tone, TopRelease } from '$lib/data/site';

	type Props = {
		release: TopRelease;
		tone?: Tone;
	};

	let { release, tone = 'blue' }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a href={release.href} target="_blank" rel="noopener noreferrer" class="group block h-full">
	<article
		class="surface-card link-card-solid top-release-card top-release-card-{tone} flex h-full flex-col gap-5 rounded-xl border p-6 text-left transition-colors md:flex-row md:items-center md:justify-between"
	>
		<div class="min-w-0 flex-1">
			<p class="text-muted mb-2 font-mono text-xs uppercase">{release.platform}</p>
			<h3
				class={tone === 'red'
					? 'text-xl font-semibold text-white transition-colors group-hover:text-[var(--color-red)]'
					: 'text-xl font-semibold text-white transition-colors group-hover:text-[var(--color-blue)]'}
			>
				{release.title}
			</h3>
			<p class="text-muted mt-3 text-base">{release.description}</p>
		</div>

		<div class="flex shrink-0 items-center justify-between gap-5 md:flex-col md:items-end">
			<p class="text-muted font-mono text-xs">{release.release}</p>
			<span
				class={tone === 'red' ? 'accent-red font-mono text-xs' : 'accent-blue font-mono text-xs'}
				>Listen on {release.platform}</span
			>
		</div>
	</article>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
