type SiteConfig = {
    name: string
    bannerlink: string
    bannercredit: string
    intro: string
}

export const siteConfig: SiteConfig = {
    name: "Fuwari", 
    bannerlink: "https://www.pixiv.net/artworks/111024784",
    bannercredit: "空天/NEO TOKYO NOIR 01",
    intro: "This is an exercise in blogging. Hope you have a good time!",
}

type Link = {
    name: string
    url: string
    external: boolean
    enabled: boolean
}

export const NavbarLinks: Link[] = [
    {
        name: "Home", 
        url: "/", 
        external: false,
        enabled: true, 
    }, 
    {
        name: "Archive", 
        url: "/archive", 
        external: false, 
        enabled: true, 
    }, 
    {
        name: "About", 
        url: "/about", 
        external: false, 
        enabled: true, 
    }, 
    {
        name: "GitHub", 
        url: "https://github.com", 
        external: true, 
        enabled: true, 
    }
]

type IconLink = {
    name: string
    icon: string
    url: string
    external: boolean
    enabled: boolean
}

export const ProfileLinks: IconLink[] = [
    {
        name: "GitHub", 
        icon: "fa6-brands:github",
        url: "https://github.com", 
        external: true,
        enabled: true,
    },
    {
        name: "Stack Overflow", 
        icon: "fa6-brands:stack-overflow",
        url: "https://stackoverflow.com", 
        external: true,
        enabled: true,
    },
    {
        name: "X", 
        icon: "fa6-brands:x-twitter",
        url: "https://twitter.com", 
        external: true,
        enabled: false,
    },
    {
        name: "LinkedIn", 
        icon: "fa6-brands:linkedin",
        url: "https://www.linkedin.com", 
        external: true,
        enabled: true,
    },
    {
        name: "Reddit", 
        icon: "fa6-brands:reddit",
        url: "https://www.reddit.com", 
        external: true,
        enabled: true,
    },
    {
        name: "YouTube", 
        icon: "fa6-brands:youtube",
        url: "https://www.youtube.com", 
        external: true,
        enabled: true,
    },
    {
        name: "Discord", 
        icon: "fa6-brands:discord",
        url: "https://discord.com", 
        external: true,
        enabled: false,
    },
    {
        name: "Dev.to", 
        icon: "fa6-brands:dev",
        url: "https://dev.to", 
        external: true,
        enabled: false,
    },
    {
        name: "Steam", 
        icon: "fa6-brands:steam",
        url: "https://store.steampowered.com", 
        external: true,
        enabled: true,
    },
    {
        name: "Medium", 
        icon: "fa6-brands:medium",
        url: "https://medium.com", 
        external: true,
        enabled: false,
    },
]
