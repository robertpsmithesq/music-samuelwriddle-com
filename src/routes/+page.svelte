<script lang="ts">
	import AboutSection from '$lib/components/home/AboutSection.svelte';
	import HeroSection from '$lib/components/home/HeroSection.svelte';
	import LinksSection from '$lib/components/home/LinksSection.svelte';
	import RecordingsSection from '$lib/components/home/RecordingsSection.svelte';
	import BackgroundStripes from '$lib/components/site/BackgroundStripes.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import SiteNav from '$lib/components/site/SiteNav.svelte';
	import SectionRule from '$lib/components/ui/SectionRule.svelte';
	import {
		featuredRecording,
		listenLinks,
		navItems,
		recordings,
		roughIdeas,
		siteTitle
	} from '$lib/data/site';

	const heroDescription =
		"We're always working on new music! A lot of our ideas are still demos. We're hoping to start releasing music across all major streaming platforms within the next year.";
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content="Riddle Me This band recordings and demos" />
</svelte:head>

<BackgroundStripes />

<div class="relative z-10 min-h-screen">
	<SiteNav items={navItems} />
	<HeroSection title={siteTitle} description={heroDescription} recording={featuredRecording} />
	<SectionRule />
	<LinksSection
		id="platforms"
		title="Streaming"
		accent="Platforms"
		accentColor="red"
		description="Check us out online."
		links={listenLinks}
	/>
	<SectionRule />
	<RecordingsSection {recordings} />
	<SectionRule />
	<RecordingsSection
		id="ideas"
		title="Rough"
		accent="Ideas"
		accentColor="blue"
		description="Loose demos, fragments, and sketches that might turn into something."
		recordings={roughIdeas}
		cardTone="blue"
	/>
	<SectionRule />
	<AboutSection />
	<SectionRule />
	<!-- <LinksSection
		id="contact"
		title="Contact"
		accent="Us"
		accentColor="red"
		description="Need to reach us?"
		links={contactLinks}
		narrow
	/> -->
	<SiteFooter title={siteTitle} />
</div>
