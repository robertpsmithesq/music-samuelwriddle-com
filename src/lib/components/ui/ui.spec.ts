import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';
import AudioPlayer from './AudioPlayer.svelte';
import SectionHeading from './SectionHeading.svelte';
import SongArt from './SongArt.svelte';
import TagList from './TagList.svelte';

describe('ui components', () => {
	it('renders an audio player with the track source and label', () => {
		const { body } = render(AudioPlayer, {
			props: {
				src: 'https://example.com/audio/song.mp3',
				title: 'Test Song'
			}
		});

		expect(body).toContain('aria-label="Play Test Song"');
		expect(body).toContain('src="https://example.com/audio/song.mp3"');
	});

	it('renders section heading copy', () => {
		const { body } = render(SectionHeading, {
			props: {
				title: 'Selected',
				accent: 'Recordings',
				description: 'Some of the tracks we are working on.',
				kicker: 'Archive'
			}
		});

		expect(body).toContain('Selected');
		expect(body).toContain('Recordings');
		expect(body).toContain('Some of the tracks we are working on.');
		expect(body).toContain('Archive');
	});

	it('renders song art with image or fallback context', () => {
		const withImage = render(SongArt, {
			props: {
				image: '/art/test-song.jpg',
				label: 'Test Song'
			}
		});
		const fallback = render(SongArt, {
			props: {
				label: 'Untitled',
				eyebrow: 'Featured Recording'
			}
		});

		expect(withImage.body).toContain('src="/art/test-song.jpg"');
		expect(withImage.body).toContain('alt="Test Song"');
		expect(fallback.body).toContain('Featured Recording');
	});

	it('renders tags and duration', () => {
		const { body } = render(TagList, {
			props: {
				tags: ['demo', 'instrumental'],
				duration: '3:14'
			}
		});

		expect(body).toContain('demo');
		expect(body).toContain('instrumental');
		expect(body).toContain('3:14');
	});
});
