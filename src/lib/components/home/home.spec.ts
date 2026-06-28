import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';
import AboutSection from './AboutSection.svelte';
import FavoriteCollabsSection from './FavoriteCollabsSection.svelte';
import FeaturedRecordingCard from './FeaturedRecordingCard.svelte';
import HeroSection from './HeroSection.svelte';
import LinkCard from './LinkCard.svelte';
import LinksSection from './LinksSection.svelte';
import RecordingCard from './RecordingCard.svelte';
import RecordingsSection from './RecordingsSection.svelte';
import TopReleaseCard from './TopReleaseCard.svelte';
import TopReleasesSection from './TopReleasesSection.svelte';
import type {
	FavoriteCollabs,
	LinkCard as LinkCardData,
	Recording,
	TopRelease
} from '$lib/data/site';

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

const release: TopRelease = {
	title: 'Favorite Song',
	release: 'Single',
	platform: 'Bandcamp',
	href: 'https://bandcamp.example/favorite-song',
	description: 'A live track worth linking to.'
};

const collabs: FavoriteCollabs = {
	songs: [{ ...release, title: 'Collab Song', description: 'Released Artist' }],
	videos: [{ ...release, title: 'Collab Video', platform: 'YouTube', description: 'Video Artist' }]
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

	it('renders top release cards as external links without song art', () => {
		const { body } = render(TopReleaseCard, { props: { release } });

		expect(body).toContain('href="https://bandcamp.example/favorite-song"');
		expect(body).toContain('rel="noopener noreferrer"');
		expect(body).toContain('Favorite Song');
		expect(body).toContain('Bandcamp');
		expect(body).toContain('Listen on Bandcamp');
		expect(body).toContain('top-release-card');
		expect(body).toContain('top-release-card-blue');
		expect(body).not.toContain('song-art');
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
		expect(recordings.body).toContain('Tracks');
		expect(recordings.body).toContain('Second Song');
	});

	it('renders a top releases section from provided data', () => {
		const { body } = render(TopReleasesSection, { props: { releases: [release] } });

		expect(body).toContain('id="releases"');
		expect(body).toContain('Top');
		expect(body).toContain('Releases');
		expect(body).toContain('Favorite Song');
		expect(body).toContain('accent-blue');
		expect(body).toContain('flex max-w-3xl flex-col');
	});

	it('renders a red two-column favorite collabs section', () => {
		const { body } = render(FavoriteCollabsSection, { props: { collabs } });

		expect(body).toContain('id="collabs"');
		expect(body).toContain('Favorite');
		expect(body).toContain('Collabs');
		expect(body).toContain("We've been delighted to play with some of our friends over the years.");
		expect(body).toContain('Songs');
		expect(body).toContain('Videos');
		expect(body).toContain('Collab Song');
		expect(body).toContain('Released Artist');
		expect(body).toContain('Collab Video');
		expect(body).toContain('Video Artist');
		expect(body).toContain('accent-red');
		expect(body).toContain('lg:grid-cols-2');
		expect(body).toContain('top-release-card-red');
	});

	it('renders a configurable blue recordings section for rough ideas', () => {
		const { body } = render(RecordingsSection, {
			props: {
				id: 'rough-ideas',
				title: 'Rough',
				accent: 'Ideas',
				accentColor: 'blue',
				description: 'Some of our demos.',
				recordings: [recording],
				cardTone: 'blue'
			}
		});

		expect(body).toContain('id="rough-ideas"');
		expect(body).toContain('Rough');
		expect(body).toContain('Ideas');
		expect(body).toContain('Some of our demos');
		expect(body).toContain('accent-blue');
		expect(body).toContain('song-art-blue');
	});

	it('renders the about section copy', () => {
		const { body } = render(AboutSection);

		expect(body).toContain('About');
		expect(body).toContain('wall of');
		expect(body).toContain('accent-blue');
	});
});
