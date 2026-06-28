export type Tone = 'red' | 'blue';

export type NavItem = {
	label: string;
	href: string;
	id: string;
};

export type Recording = {
	title: string;
	year: string;
	audioPath: string;
	featured: boolean;
};

export type LinkCard = {
	title: string;
	description: string;
	href: string;
	tone: Tone;
};

export const siteTitle = 'Riddle Me This';

export const mediaBaseUrl = 'https://media.samriddle.online';

export function mediaUrl(path: string): string {
	if (/^https?:\/\//.test(path)) {
		return path;
	}

	return encodeURI(`${mediaBaseUrl}/${path.replace(/^\/+/, '')}`);
}

export const navItems: NavItem[] = [
	{ label: 'Platforms', href: '#platforms', id: 'platforms' },
	{ label: 'Recordings', href: '#music', id: 'music' },
	{ label: 'About', href: '#about', id: 'about' }
	// { label: 'Contact', href: '#contact', id: 'contact' }
];

export const recordings: Recording[] = [
	{
		title: 'Tomorrow',
		year: 'September 2025',
		audioPath: 'audio/sam/Tomorrow - Preview - v1 - Audio.mp3',
		featured: true
	},
	{
		title: 'Always',
		year: 'April 2026',
		audioPath: 'audio/sam/Always - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'Catharsis',
		year: 'April 2026',
		audioPath: 'audio/sam/Catharsis - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'Escape',
		year: 'March 2026',
		audioPath: 'audio/sam/Escape - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'I Wanna Be Normal',
		year: 'April 2026',
		audioPath: 'audio/sam/I Wanna Be Normal - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'In a Jam',
		year: 'April 2026',
		audioPath: 'audio/sam/In a Jam - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'Not Gonna Be OK',
		year: 'March 2026',
		audioPath: 'audio/sam/Not Gonna Be OK - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'Under the Moon',
		year: 'March 2026',
		audioPath: 'audio/sam/Under the Moon - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'Walk of a King',
		year: 'April 2026',
		audioPath: 'audio/sam/Walk of a King - Preview - v1 - Audio.mp3',
		featured: false
	},
	{
		title: 'Westward',
		year: 'February 2026',
		audioPath: 'audio/sam/Westward - Preview - v1 - Audio.mp3',
		featured: false
	}
];

export const featuredRecording: Recording =
	recordings.find((x) => x.featured === true) ?? recordings[0];

export const listenLinks: LinkCard[] = [
	{
		title: 'SoundCloud',
		description: 'Sketches and demos',
		href: 'https://www.soundcloud.com/riddlemeS4m',
		tone: 'red'
	},
	{
		title: 'YouTube',
		description: 'Sessions and videos',
		href: 'https://www.youtube.com/@riddlemeS4m',
		tone: 'red'
	}
];

export const contactLinks: LinkCard[] = [
	{
		title: 'SoundCloud',
		description: 'Sketches and demos',
		href: '#',
		tone: 'red'
	}
];
