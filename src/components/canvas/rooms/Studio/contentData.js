/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube' (GitHub), 'blog' (LinkedIn), 'tiktok' (Instagram)
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#24292e', // GitHub dark grey/black
        accentColor: '#4078c0',
        icon: '💻', // GitHub icon/dev icon
        label: 'GitHub',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#0a66c2', // LinkedIn blue
        accentColor: '#004182',
        icon: '💼', // Work icon
        label: 'LinkedIn',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#e1306c', // Instagram pink/purple
        accentColor: '#c13584',
        icon: '📸', // Photo/Insta icon
        label: 'Instagram',
        shape: 'phone', // Vertical phone
    },
};

// Real content data representing Ilyas Khan's repositories, LinkedIn posts, and Instagram updates
const RAW_CONTENT_DATA = [
    // ============ GitHub Repositories (youtube platform) ============
    {
        id: 'git-001',
        platform: 'youtube',
        title: 'Autonomous Parcel Delivery Drone (APDD)',
        description: 'Autonomous GPS waypoint navigation drone built on F450 quadcopter frame, Pixhawk flight controller, ArduCopter firmware, and servo-actuated release.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/ilyaskhan12Q',
        date: '2025-06-15',
        views: '1.5K Stars',
        duration: 'APDD Drone',
    },
    {
        id: 'git-002',
        platform: 'youtube',
        title: 'Multi-Modal Cancer Omics Classifier',
        description: 'Advanced machine learning classifier fusing genomic, transcriptomic, and clinical dataset modalities. Winner of NeoHack 2025.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/ilyaskhan12Q',
        date: '2025-02-22',
        views: '840 Stars',
        duration: 'NeoHack 25',
    },
    {
        id: 'git-003',
        platform: 'youtube',
        title: 'AI Customer Support Agent Integration',
        description: 'Production-grade RAG support agent workflows built with n8n, Pinecone vector stores, and Gemini APIs.',
        thumbnail: null,
        url: 'https://github.com/ilyaskhan12Q',
        date: '2025-05-10',
        views: '320 Stars',
        duration: 'n8n + RAG',
    },
    {
        id: 'git-004',
        platform: 'youtube',
        title: 'SpreadsheetAppBuilder (SAB) Parser',
        description: 'Natural language spreadsheet builder converting prompt guides into Excel and LibreOffice automation files via JSON blueprints.',
        thumbnail: null,
        url: 'https://github.com/ilyaskhan12Q',
        date: '2025-04-18',
        views: '512 Stars',
        duration: 'SAB Parser',
    },
    {
        id: 'git-005',
        platform: 'youtube',
        title: 'Explainable AI (XAI) and Neural Networks',
        description: 'Python implementations of explainable AI systems, featuring custom multi-attention layers and SHAP-based diagnostic visualisations.',
        thumbnail: null,
        url: 'https://github.com/ilyaskhan12Q',
        date: '2025-03-01',
        views: '410 Stars',
        duration: 'XAI / PyTorch',
    },

    // ============ LinkedIn Posts (blog platform) ============
    {
        id: 'li-001',
        platform: 'blog',
        title: 'NeoHack 2025 Hackathon Winners! 🏆',
        description: 'Honoured to share that our team won First Place at NeoHack 2025! We developed a multi-modal cancer classification pipeline combining genomics and clinical datasets.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ilyas-khan67/',
        date: '2025-02-23',
        readTime: '3 min read',
    },
    {
        id: 'li-002',
        platform: 'blog',
        title: 'Deploying RAG Agentic Workflows in Production',
        description: 'Successfully deployed an automated lead generation assistant at AJ Digital Agency. Discussing how optimization of Pinecone vector chunks boosted conversion rates.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ilyas-khan67/',
        date: '2025-05-15',
        readTime: '4 min read',
    },
    {
        id: 'li-003',
        platform: 'blog',
        title: 'PID Tuning for Autonomous UAV Flight Controls',
        description: 'Slightly adjusting throttle and hover parameters on the Pixhawk flight controller. Flight logs are looking much more stable now!',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ilyas-khan67/',
        date: '2025-06-20',
        readTime: '5 min read',
    },
    {
        id: 'li-004',
        platform: 'blog',
        title: 'A Deeper Look into Self-Attention from Scratch',
        description: 'Why write transformers from scratch? Breaking down linear algebra operations behind query, key, and value vectors in PyTorch.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ilyas-khan67/',
        date: '2025-01-20',
        readTime: '7 min read',
    },

    // ============ Instagram Posts (tiktok platform) ============
    {
        id: 'ig-001',
        platform: 'tiktok',
        title: 'Building the F450 Quadcopter Drone Frame 🛠️',
        description: 'Soldering ESCs and configuring flight paths on ArduCopter.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ilyas-khan67/',
        date: '2025-06-01',
        views: '1.2K Likes',
        likes: '340',
    },
    {
        id: 'ig-002',
        platform: 'tiktok',
        title: 'Late Night Python Neural Nets ☕',
        description: 'Finetuning dense classifier bounds on transcriptomics.',
        thumbnail: null,
        url: 'https://github.com/ilyaskhan12Q',
        date: '2025-02-18',
        views: '940 Likes',
        likes: '280',
    },
    {
        id: 'ig-003',
        platform: 'tiktok',
        title: 'NeoHack 2025 Presentation 📈',
        description: 'Pitching our AI cancer diagnosis solution to the judges.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ilyas-khan67/',
        date: '2025-02-22',
        views: '1.1K Likes',
        likes: '310',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
