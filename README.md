

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Remove or change default codes 
- app
    - globals.css
        - remove all css under tailwind imports
    - layout 
        change  metadata
    - page
        - remove all default code 
        - rename page to Home or HomePage 

## Installed Libraries 
    - npx shadcn@latest init
        - npx shadcn@latest add button breadcrumb card checkbox dropdown-menu input label popover select separator table textarea carousel skeleton
    - npm install react-icons

## Create Pages 
- in the app folder create page folders, and page files 
    - Home
    - Portfolio
    - About 
    - Services
    - Archive
    - Blog
    - Other pages
    - Contact Us

## Create Components 

### Setup and install Shadcn-ui library
    - Setup
        - npx shadcn@latest init
    - Install necessary components 
        - npx shadcn@latest add button breadcrumb card checkbox dropdown-menu input label popover select separator table textarea carousel skeleton
    

### Create component folder and files 
    - cart
    - form
    - global
        - Container
            - gets 2 props: 
                - children - takes ReactNode as type,
                - className - this is an optional props 
        - SectionTitle
        - EmptyList
    - home 
        - ServiceContainer 
        - ProductContainer
        - ServiceCard
    - navbar
        - NavBar
            - imports:
                - Logo
                - DarkMode
                - NavBarDropdown
                - NavSearch 
                - SocialLinks
            - general imports for functionality and visuals:
                - import useEffect and useState for responsive nav functionality
                - Container
                - Separator
                - Button from ui/button 
                - Link from next/link
                - Links
            - create: 
                - link file - utils/links 
        
        - Logo
        - DarkMode
            - client side component
            - import necessary icons: 
                - MoonIcon SunIcon 
            - imports:
                - useTheme from next-themes
                - Button from ui/button
                - DropdownMenu and its' sub components 
            - replace css variable in globals.css
            - create providers file app/providers.tsx 
                - this is a client side function
                    - gets children as props 
                - import into the layout 
                    - this is optional add suppressHydrationWarning in the html tag (it prevents popping up of the errors)
                - install shadcn themes library 
                    - npm install next-themes
                - create theme-provider 
                    - client side function 
                        - imports:
                            - ThemeProvider as NextThemesProvider from next-themes
                            - type ThemeProviderProps from next-themes
                - import ThemeProvider into providers.tsx and invoke it in there 
                    - gets:
                        - attribute='class'
                        - defaultTheme='system' (in my case will be system)
                        - enableSystem
                        - disableTransitionOnChange
                - also install 
                    - npm i @radix-ui/react-icons (optional, in my case icons didn't work)
        
        - SocialLinks
        - NavBarDropDown
            - this component will be visible only in mobile or tablet version 
            - import links from utils/links
            - import DropdownMenu
        - NavSearch
    - footer
        - Footer
            - imports:
                - Container 
                - Logo
                - SocialLinks
                - ContactInfo
                - QuickLinks
                - NewsLetter
                - CopyRight
    - products
    - single-product or product-detail



