type SiteConfig = {
    name: string
    bannerlink: string
    bannercredit: string
}

export const siteConfig: SiteConfig = {
    name: "Fuwari", 
    bannerlink: "https://www.pixiv.net/artworks/111024784",
    bannercredit: "空天/NEO TOKYO NOIR 01",
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
