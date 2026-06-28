<script lang="ts">
	type Props = {
		title: string;
		accent: string;
		accentColor?: 'red' | 'blue';
		description?: string;
		kicker?: string;
	};

	let { title, accent, accentColor = 'red', description, kicker }: Props = $props();
</script>

<div class="mx-auto text-center">
	<h2 class="mb-4 text-3xl font-bold md:text-4xl">
		{title} <span class={accentColor === 'red' ? 'accent-red' : 'accent-blue'}>{accent}</span>
	</h2>
	{#if kicker}
		<p class="text-muted mb-12 text-sm tracking-widest uppercase">{kicker}</p>
	{/if}
	{#if description}
		<p class="text-muted mx-auto mb-16 max-w-xl">{description}</p>
	{/if}
</div>
