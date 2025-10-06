

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
            - import necessary icons 
            - replace css variable in globals.css
                - this is old css 
```
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
```
            - create providers file app/providers.tsx 
                - this is a client side function
                    - gets children as props 
                - import into the layout 
                    - this is optional add suppressHydrationWarning in the html tag (it prevents popping up of the errors)
                - install shadcn themes library 
                    - npm install next-themes
                - create theme-provider 
                    - client side function 
                    
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



