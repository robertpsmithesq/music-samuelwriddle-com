<script lang="ts">
	import { onMount } from 'svelte';
	import faviconRedHot from '$lib/assets/favicon-red-hot.svg';
	import type { NavItem } from '$lib/data/site';

	type Props = {
		items: NavItem[];
	};

	let { items }: Props = $props();
	let mobileOpen = $state(false);
	let activeId = $state('');

	onMount(() => {
		const sections = document.querySelectorAll<HTMLElement>('section[id]');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeId = entry.target.id;
				}
			},
			{ rootMargin: '-40% 0px -60% 0px' }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});
</script>

<header id="top" class="site-nav-surface fixed inset-x-0 top-0 z-50 border-b px-4 py-4 md:px-8">
	<nav
		class="mx-auto flex max-w-5xl items-center justify-between gap-5"
		aria-label="Primary navigation"
	>
		<img src={faviconRedHot} alt="" aria-hidden="true" class="h-8 w-8 shrink-0" />

		<button
			class="z-50 flex flex-col gap-1.5 p-2 md:hidden"
			aria-label="Toggle menu"
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<span
				class={`h-0.5 w-6 bg-current transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
			></span>
			<span class={`h-0.5 w-6 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
			<span
				class={`h-0.5 w-6 bg-current transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
			></span>
		</button>

		<div class="hidden gap-8 text-sm md:flex">
			{#each items as item (item.id)}
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={item.href}
					class={`text-white/55 transition-colors hover:text-[var(--color-red)] ${
						activeId === item.id || (!activeId && item === items[0]) ? 'accent-red' : ''
					}`}
				>
					{item.label}
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			{/each}
		</div>
	</nav>

	<nav
		aria-label="Mobile navigation"
		class={`mobile-menu-surface overflow-hidden transition-[max-height] duration-300 md:hidden ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}
	>
		<div class="flex flex-col gap-4 px-4 py-6">
			{#each items as item (item.id)}
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={item.href}
					class={`border-b border-white/10 py-2 text-lg text-white/55 transition-colors hover:text-[var(--color-red)] ${
						activeId === item.id || (!activeId && item === items[0]) ? 'accent-red' : ''
					}`}
					onclick={() => (mobileOpen = false)}
				>
					{item.label}
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			{/each}
		</div>
	</nav>
</header>
<div class="h-[65px]" aria-hidden="true"></div>
