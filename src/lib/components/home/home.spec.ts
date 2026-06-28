import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';
import AboutSection from './AboutSection.svelte';
import FeaturedRecordingCard from './FeaturedRecordingCard.svelte';
import HeroSection from './HeroSection.svelte';
import LinkCard from './LinkCard.svelte';
import LinksSection from './LinksSection.svelte';
import RecordingCard from './RecordingCard.svelte';
import RecordingsSection from './RecordingsSection.svelte';
import type { LinkCard as LinkCardData, Recording } from '$lib/data/site';

const recording: Recording = {
	title: 'Test Song',
	year: 'June 2026',
	audioPath: 'audio/test-song.mp3',
	featured: true
};

const link: LinkCardData = {
	title: 'SoundCloud',
	description: 'Sketches and demos',
	href: 'https://soundcloud.example',
	tone: 'red'
};

describe('home components', () => {
	it('renders recording cards with details and player labels', () => {
		const card = render(RecordingCard, { props: { recording } });
		const featuredCard = render(FeaturedRecordingCard, { props: { recording } });

		expect(card.body).toContain('Test Song');
		expect(card.body).toContain('June 2026');
		expect(card.body).toContain('song-art-red');
		expect(card.body).toContain('aria-label="Play Test Song"');
		expect(featuredCard.body).toContain('Featured Recording');
		expect(featuredCard.body).toContain('aria-label="Play Test Song"');
	});

	it('renders recording card artwork in the requested tone', () => {
		const { body } = render(RecordingCard, { props: { recording, tone: 'blue' } });

		expect(body).toContain('song-art-blue');
	});

	it('renders a link card as an external link', () => {
		const { body } = render(LinkCard, { props: { link } });

		expect(body).toContain('href="https://soundcloud.example"');
		expect(body).toContain('rel="noopener noreferrer"');
		expect(body).toContain('SoundCloud');
		expect(body).toContain('Sketches and demos');
	});

	it('renders the hero section with featured recording content', () => {
		const { body } = render(HeroSection, {
			props: {
				title: 'Riddle Me This',
				description: 'Songs in progress.',
				recording
			}
		});

		expect(body).toContain('Riddle Me This');
		expect(body).toContain('Songs in progress.');
		expect(body).toContain('Test Song');
	});

	it('renders links and recordings sections from provided data', () => {
		const links = render(LinksSection, {
			props: {
				id: 'platforms',
				title: 'Listen',
				accent: 'Now',
				description: 'Find the music online.',
				links: [link]
			}
		});
		const recordings = render(RecordingsSection, {
			props: {
				recordings: [
					recording,
					{ ...recording, title: 'Second Song', audioPath: 'audio/second-song.mp3' }
				]
			}
		});

		expect(links.body).toContain('Listen');
		expect(links.body).toContain('Now');
		expect(links.body).toContain('SoundCloud');
		expect(recordings.body).toContain('Selected');
		expect(recordings.body).toContain('Recordings');
		expect(recordings.body).toContain('Second Song');
	});

	it('renders a configurable blue recordings section for rough ideas', () => {
		const { body } = render(RecordingsSection, {
			props: {
				id: 'rough-ideas',
				title: 'Rough',
				accent: 'Ideas',
				accentColor: 'blue',
				description: 'Loose demos and sketches.',
				recordings: [recording],
				cardTone: 'blue'
			}
		});

		expect(body).toContain('id="ideas"');
		expect(body).toContain('Rough');
		expect(body).toContain('Ideas');
		expect(body).toContain('Loose demos and sketches.');
		expect(body).toContain('accent-blue');
		expect(body).toContain('song-art-blue');
	});

	it('renders the about section copy', () => {
		const { body } = render(AboutSection);

		expect(body).toContain('About');
		expect(body).toContain('wall of');
	});
});
