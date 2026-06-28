<script lang="ts">
	import { mediaUrl, type Recording } from '$lib/data/site';
	import AudioPlayer from '$lib/components/ui/AudioPlayer.svelte';
	import SongArt from '$lib/components/ui/SongArt.svelte';
	import type { Tone } from '$lib/data/site';

	type Props = {
		recording: Recording;
		tone?: Tone;
	};

	let { recording, tone = 'red' }: Props = $props();
</script>

<div class="w-full">
	<article class="surface-card audio-card overflow-hidden rounded-xl border">
		<SongArt {tone} label={recording.title} />
		<div class="p-5">
			<div class="mb-4 flex items-center justify-between gap-4 text-left">
				<div class="min-w-0">
					<h3 class="truncate text-lg font-semibold text-white">{recording.title}</h3>
					<p class="text-muted text-sm">Riddle Me This</p>
				</div>
				<p class="text-muted shrink-0 font-mono text-xs">{recording.year}</p>
			</div>
			<AudioPlayer src={mediaUrl(recording.audioPath)} title={recording.title} compact />
		</div>
	</article>
</div>
