<script lang="ts">
	const stripes = [
		{ color: 'stripe-red', className: 'top-[12%] left-[-40%] h-1.5 w-[180%] [animation-delay:0s]' },
		{ color: 'stripe-blue', className: 'top-[18%] left-[-30%] h-1 w-[160%] [animation-delay:4s]' },
		{ color: 'stripe-red', className: 'top-[38%] left-[-50%] h-2 w-[200%] [animation-delay:2s]' },
		{
			color: 'stripe-blue',
			className: 'top-[52%] left-[-35%] h-[3px] w-[170%] [animation-delay:6s]'
		},
		{
			color: 'stripe-red',
			className: 'top-[72%] left-[-45%] h-[5px] w-[190%] [animation-delay:1s]'
		},
		{ color: 'stripe-blue', className: 'top-[88%] left-[-25%] h-1.5 w-[150%] [animation-delay:5s]' }
	];
</script>

<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
	{#each stripes as stripe (stripe.className)}
		<div
			class={`absolute origin-center -rotate-12 opacity-[0.07] [animation:stripe-drift_30s_ease-in-out_infinite_alternate] ${stripe.color} ${stripe.className}`}
		></div>
	{/each}
</div>
