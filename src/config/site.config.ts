type SiteConfig = {
    name: string
}

export const siteConfig: SiteConfig = {
    name: "Fuwari", 
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
