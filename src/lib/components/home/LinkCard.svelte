<script lang="ts">
	import faviconRedHot from '$lib/assets/favicon-red-hot.svg';
	import type { LinkCard as LinkCardData } from '$lib/data/site';

	type Props = {
		link: LinkCardData;
	};

	let { link }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={link.href}
	target="_blank"
	rel="noopener noreferrer"
	class="group block w-full max-w-md sm:w-[calc(50%-0.75rem)]"
>
	<article
		class="surface-card link-card-solid flex h-full min-h-36 items-center gap-6 rounded-xl border p-7 text-left"
	>
		<div class="min-w-0 flex-1">
			<h3
				class={`mb-2 text-xl font-semibold transition-colors ${
					link.tone === 'red'
						? 'group-hover:text-[var(--color-red)]'
						: 'group-hover:text-[var(--color-blue)]'
				}`}
			>
				{link.title}
			</h3>
			<p class="text-muted text-base">{link.description}</p>
		</div>
		<img
			src={faviconRedHot}
			alt=""
			aria-hidden="true"
			class="h-14 w-14 shrink-0 transition-transform group-hover:scale-110"
		/>
	</article>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
