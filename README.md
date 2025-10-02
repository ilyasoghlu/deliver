

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

### create component folder and files 
    - cart
    - form
    - global
        - Container
            - gets 2 props: 
                - children - takes ReactNode as type,
                - className - this is an optional props  
    - home 
    - navbar
        - DarkMode
        - SocialLinks
        - Logo
        - NavBar
            - imports:
                - Container
                - Logo
                - SocialLinks
                - Separator
                - Links
                - NavSearch 
        - NavSearch
    - products
    - single-product or product-detail

