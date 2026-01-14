// Shared project data - single source of truth
const base = import.meta.env.BASE_URL;

export const projects = [
    {
        title: 'Codio Live',
        description: 'Run real-time collaborative coding sessions in your browser with AI Assistant.',
        tags: ['Tool'],
        displayTags: ['AI', 'Collaboration'],
        link: 'https://mock-interview-hub.onrender.com/',
        image: `${base}Codiolive.webp`
    },
    {
        title: 'Cozy Cat',
        description: 'Meet your AI pet that respond to your commands.',
        tags: ['Game'],
        displayTags: ['AI', 'Interactive'],
        link: 'https://cozycat.lovable.app',
        image: `${base}Cozycat.webp`
    },
    {
        title: 'Cat Court',
        description: 'A mini game where a Cat Judge will judge your comments.',
        tags: ['Game'],
        displayTags: ['AI', 'Game'],
        link: 'https://catcourt.lovable.app',
        image: `${base}Catcourt.webp`
    },
    {
        title: 'Hot Feed',
        description: 'A reddit trend aggregator.',
        tags: ['Tool'],
        displayTags: ['Reddit', 'Aggregator'],
        link: 'https://hot-feed.lovable.app/',
        image: `${base}Hotfeed.webp`
    }
];
