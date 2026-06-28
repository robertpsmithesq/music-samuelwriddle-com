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

export type TopRelease = {
	title: string;
	release: string;
	platform: string;
	href: string;
	description: string;
};

export type FavoriteCollabs = {
	songs: TopRelease[];
	videos: TopRelease[];
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
	{ label: 'Releases', href: '#releases', id: 'releases' },
	{ label: 'Tracks', href: '#music', id: 'music' },
	{ label: 'Ideas', href: '#ideas', id: 'ideas' },
	{ label: 'Collabs', href: '#collabs', id: 'collabs' },
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

export const topReleases: TopRelease[] = [
	{
		title: 'Until We Meet Again',
		release: 'October 2021',
		platform: 'SoundCloud',
		href: 'https://soundcloud.com/riddlemes4m/until-we-meet-again',
		description: 'One of our favorite melodies'
	},
	{
		title: 'Revolting',
		release: 'April 2021',
		platform: 'SoundCloud',
		href: 'https://soundcloud.com/riddlemes4m/revolting',
		description: 'One of our earliest forays into darker riffs'
	},
	{
		title: 'Dying on the Inside',
		release: 'November 2021',
		platform: 'SoundCloud',
		href: 'https://soundcloud.com/riddlemes4m/dying-on-the-inside',
		description: 'The first song we ever wrote'
	}
];

export const favoriteCollabs: FavoriteCollabs = {
	songs: [
		{
			title: 'I Know',
			release: 'May 2026',
			platform: 'Spotify',
			href: 'https://open.spotify.com/track/3xVu3ig9Fj9BSlDIsUkPdq?si=ab00238562d143f0',
			description: 'Keith Reed'
		},
		{
			title: 'With Jesus',
			release: 'August 2024',
			platform: 'Spotify',
			href: 'https://open.spotify.com/track/6E8dWK3EmiFJsHQYDbc8tn?si=fd86671f547a4c0c',
			description: 'Radiant House Music'
		},
		{
			title: 'We Will Follow',
			release: 'June 2023',
			platform: 'Spotify',
			href: 'https://open.spotify.com/track/4vsRnRsKqNYlIbeMQclxFM?si=ea7cab027c874d55',
			description: 'Radiant House Music'
		},
		{
			title: 'Light Up the World',
			release: 'April 2022',
			platform: 'Spotify',
			href: 'https://open.spotify.com/track/2Awztk4mKkIe1WxFqD0e6H?si=ba35e89cdcb145f5',
			description: 'Radiant House Music'
		}
	],
	videos: [
		{
			title: 'Rest On Us',
			release: 'September 2022',
			platform: 'YouTube',
			href: 'https://youtu.be/KhfjQoSNk8I?si=sUzkIGAaeddAZvm_',
			description: 'Radiant House Music'
		},
		{
			title: 'Awake My Soul',
			release: 'October 2021',
			platform: 'YouTube',
			href: 'https://youtu.be/6mD4IrOCMVY?si=XUAa8XMuOlFfEnD_',
			description: 'Radiant House Music'
		},
		{
			title: 'I Thank God',
			release: 'August 2021',
			platform: 'YouTube',
			href: 'https://youtu.be/QJ07mTW9BIg?si=eG7AxWsYE6Z0gUNa',
			description: 'Radiant House Music'
		},
		{
			title: 'We Bow Down',
			release: 'June 2021',
			platform: 'YouTube',
			href: 'https://youtu.be/0XqgNbPX8Wc?si=ifsrVFRT86AE_E6o',
			description: 'Radiant House Music'
		},
		{
			title: 'Goodness of God',
			release: 'May 2021',
			platform: 'YouTube',
			href: 'https://youtu.be/KZuqEGU25a8?si=1D1OBcyYDdpEUCLB',
			description: 'Radiant House Music'
		}
	]
};

export const roughIdeas: Recording[] = [
	{
		title: 'Another Sound of Sadness',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Another Sound of Sadness - Demo - Audio.mp3',
		featured: false
	},
	{
		title: 'Demo 15',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 15.mp3',
		featured: false
	},
	{
		title: 'Demo 26',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 26.mp3',
		featured: false
	},
	{
		title: 'Demo 27',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 27.mp3',
		featured: false
	},
	{
		title: 'Demo 28',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 28.mp3',
		featured: false
	},
	{
		title: 'Demo 30',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 30.mp3',
		featured: false
	},
	{
		title: 'Demo 31',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 31.mp3',
		featured: false
	},
	{
		title: 'Demo 34',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 34.mp3',
		featured: false
	},
	{
		title: 'Demo 39',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Demo 39.mp3',
		featured: false
	},
	{
		title: 'Slither',
		year: 'Demo',
		audioPath: 'audio/sam/demos/Slither - Demo.mp3',
		featured: false
	}
];

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
