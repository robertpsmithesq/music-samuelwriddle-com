import { render } from 'svelte/server';
import { describe, expect, it } from 'vitest';
import BackgroundStripes from './BackgroundStripes.svelte';
import SiteFooter from './SiteFooter.svelte';
import SiteNav from './SiteNav.svelte';
import type { NavItem } from '$lib/data/site';

const items: NavItem[] = [
	{ label: 'Platforms', href: '#platforms', id: 'platforms' },
	{ label: 'Recordings', href: '#music', id: 'music' }
];

describe('site components', () => {
	it('renders navigation links and closed mobile menu state', () => {
		const { body } = render(SiteNav, { props: { items } });

		expect(body).toContain('aria-label="Primary navigation"');
		expect(body).toContain('href="#platforms"');
		expect(body).toContain('href="#music"');
		expect(body).toContain('aria-expanded="false"');
	});

	it('renders footer title and year', () => {
		const { body } = render(SiteFooter, {
			props: {
				title: 'Riddle Me This',
				year: '2026'
			}
		});

		expect(body).toContain('2026');
		expect(body).toContain('Riddle Me This');
	});

	it('renders background stripes as hidden decorative content', () => {
		const { body } = render(BackgroundStripes);

		expect(body).toContain('aria-hidden="true"');
		expect(body).toContain('stripe-red');
		expect(body).toContain('stripe-blue');
	});
});
