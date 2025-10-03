

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
        - DarkMode
        - SocialLinks
        - Logo
        - NavBar
            - imports:
                - Container
                - Logo
                    - imports:
                        - Button from ui/button 
                        - Link from next/link


                - SocialLinks
                - Separator
                - Links
                    - create utils/links 
                    - 
                - NavSearch 
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



