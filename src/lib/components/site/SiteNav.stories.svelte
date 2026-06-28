<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SiteNav from './SiteNav.svelte';
	import { navItems } from '$lib/data/site';

	const { Story } = defineMeta({
		title: 'Site/SiteNav',
		component: SiteNav,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			items: navItems
		}
	});
</script>

<Story name="Default" />
