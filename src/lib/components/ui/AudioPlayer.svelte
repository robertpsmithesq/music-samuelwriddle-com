<script lang="ts">
	type Props = {
		src: string;
		title: string;
		compact?: boolean;
	};

	let { src, title, compact = false }: Props = $props();
</script>

<audio
	class={`audio-player ${compact ? 'audio-player-compact' : ''}`}
	controls
	preload="metadata"
	{src}
	aria-label={`Play ${title}`}
>
	Your browser does not support the audio element.
</audio>

<style>
	.audio-player {
		display: block;
		width: 100%;
		min-width: 0;
		height: 2.75rem;
		border: 1px solid rgb(255 255 255 / 0.12);
		border-radius: 0.5rem;
		background: rgb(255 255 255 / 0.08);
		color-scheme: dark;
	}

	.audio-player:focus-visible {
		outline: 2px solid var(--color-blue);
		outline-offset: 3px;
	}

	.audio-player-compact {
		height: 2.5rem;
	}

	.audio-player::-webkit-media-controls-panel {
		background: rgb(24 24 24);
	}

	.audio-player::-webkit-media-controls-current-time-display,
	.audio-player::-webkit-media-controls-time-remaining-display {
		color: white;
		text-shadow: none;
	}
</style>
