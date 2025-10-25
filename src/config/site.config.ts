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
