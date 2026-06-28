<script lang="ts">
	import { mediaUrl, type Recording, type Tone } from '$lib/data/site';
	import AudioPlayer from '$lib/components/ui/AudioPlayer.svelte';
	import SongArt from '$lib/components/ui/SongArt.svelte';

	type Props = {
		recording: Recording;
		tone?: Tone;
	};

	let { recording, tone = 'red' }: Props = $props();
</script>

<article
	class="surface-card audio-card mx-auto w-full max-w-sm overflow-hidden rounded-xl border lg:justify-self-end"
>
	<SongArt {tone} label={recording.title} eyebrow="Featured Recording" large />
	<div class="p-5">
		<div class="mb-4 flex items-center justify-between gap-4 text-left">
			<div class="min-w-0">
				<h3 class="truncate text-lg font-semibold text-white">{recording.title}</h3>
				<p class="text-muted text-sm">Riddle Me This</p>
			</div>
			<p class="text-muted shrink-0 font-mono text-xs">{recording.year}</p>
		</div>
		<AudioPlayer src={mediaUrl(recording.audioPath)} title={recording.title} />
	</div>
</article>
