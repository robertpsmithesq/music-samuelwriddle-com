<script lang="ts">
	type Props = {
		tags: string[];
		duration?: string;
	};

	let { tags, duration }: Props = $props();
</script>

<div class="flex flex-wrap justify-center gap-2">
	{#each tags as tag (tag)}
		<span class="tag-surface rounded border px-2 py-1 text-xs">{tag}</span>
	{/each}
	{#if duration}
		<span class="tag-surface rounded border px-2 py-1 text-xs">{duration}</span>
	{/if}
</div>
