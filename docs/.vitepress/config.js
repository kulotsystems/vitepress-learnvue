const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story' }];

export default {
    title: 'VitePress Demo',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            { text: 'Home'   , link: '/'        },
            { text: 'About'  , link: '/about/'  },
            { text: 'Contact', link: '/contact' },
        ],
        sidebar: {
            '/about/': [
                {
                    items: ourStorySidebar
                }
            ],
            '/contact': [
                {
                    items: ourStorySidebar
                }
            ],
        }
    }
}
