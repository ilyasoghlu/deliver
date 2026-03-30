

## Getting Started

First, run the development server:

```bash
npm run dev
# or

```


| Task                     | Command                     |
| ------------------------ | --------------------------- |
| Install dependencies     | `npm install`               |
| Regenerate Prisma client | `npx prisma generate`       |
| Apply migrations         | `npx prisma migrate deploy` |
| Start project            | `npm run dev`               |
| Open database UI         | `npx prisma studio`         |


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
        - import following components:
            - Hero,
            - FeaturedProducts,
            - SectionTitle,
            - Separator  
    - Portfolio
        - create a loading file (this page has a separate loading file)
            - client side function
            - import LoadingContainer

        - import  
            - SectionTitle 
            - EmptyList
            - 
            - BreadCrumbs (it will be optional, maybe I don't use it)
                BreadCrumbs commented out in DynamicHero (temporarily)
            - ProductsContainer
                - this is an async function 
                - ProductsGrid
                - ProductsList 
                - necessary icons 
                - Button component from ui/button
                - Separator from ui/separator
                - fetchAllProducts from utils/actions
                - Link from next/link 
            - setup
                - Search 
                    - use searchParams - for controlling product container 
                        - layout (with optional parameters) 
                        - search (with optional parameters)
                        - in the utils/actions add: 
            - create a folder [id] it will be a dynamic folder 
                - ProductDetails
                - create a fetch function in the actions file
                    - import redirect from next/navigation  (important get it from next/navigation)
                    - it will be an async function 
                    - gets productId as props 
    - Other pages
                    
    - About 
        - create static elements (then it will be dynamic)✅
        - create ourTeam.json file in prisma folder ✅
            
            - create a schema in schema.prisma ✅
                - create models for ✅
                    - skills, projects, experiences - this models will be optional  ✅
                    - in seed file you will adopt them, remember in nested options createMany is not working -use just create 
                - it maybe gets error message about isolated..., because we created isolation rule in tsconfig file. That's why in the component import it as:
```ts
            import type { OurTeam } from '@prisma/client'
```
            - create team member arrays ✅
            - create seed functionality ✅
            - push information into db (Supabase) ✅
            - create fetch function in actions file (get over id) ✅
        - create about component folder ✅
            - create OurTeamContainer component ✅
                - create TeamMember component  ✅
                - import Link from next/link (for details page)
                - import Card components from ui folder ✅
                - import Image component from ui ✅
                - import SocialLinks component from global 
            - create a folder [id] it will be a dynamic folder 
                - create a fetchMemberDetails function in actions 
                - create MemberDetails page functionality will be async 
                    - import Image from next/image
                      


    - Services
        - create a model in schema file 
        - create a mock data in json format 
        - create a load and functionality in prisma.seed file 
        - create fetch functionality for fetching of all data and data details in action file 
        - seed the db 
        - create service components 
            - ServiceBlogContainer
                - import ServiceBlog component 
                - it will be async functionality 
                    - convert to variable and export to ServiceBlog component 
                - import fetch all data function 
            - ServiceBlog 
                - gets serviceBlog as props 
                - import:
                    - ServiceBlogItem
                    - Card, CardContent
                    - Image 
                    - Link 
            - ServiceBlogDetail 
                - create fetchServiceBlogDetail function in actions  
                - create an id folder and page in services folder(page), it will be an async function. It gets params 
                    - in page file
                        - import 
                            - fetchServiceBlogItemDetails function 
                            - Images from next/image
                            
                - create a ServiceBlogDetail component (maybe don't need)
            - ServicePriceCard component 
                - it will be a dynamic component - information will be different 
                - on first step you will map the array as items 
                - on the second step you will skip already used values and boolean values (if value will be empty it will not appear on the site as empty line)
                - for card give a static height css 


    - Archive
    - Blog
        - import 
            - MediaCard component 
        - create a folder [id] - this is a dynamic folder 
            - BlogDetails
                - create a fetch function in the actions file
                    - import redirect from next/navigation  (important get it from next/navigation)
                    - it will be an async function 
                    - gets productId as props
        - Post functionality and db elements 
            - create models in schema file with following values 
                - NewsPost model
                    - id          String   @id @default(uuid()) @db.Uuid
                    - title       String
                    - description String
                    - image       String
                    - category    String
                    - avgRating   Float?
                    - ratingCount Int?
                    - createdAt   DateTime @default(now())
                    - updatedAt   DateTime @updatedAt
                    - clerkId     String?  @db.Uuid // I removed this line from schema model and from seed function because it gives false result and I cant seed the db. For the future check seed file and models they must have the same components, any extra componet can be a new error reason 
                    - reviews     Review[]

                - Review model
                    - id        String   @id @default(uuid()) @db.Uuid
                    - rating    Int?     // optional (Twitter comments usually don't have rating)
                    - comment   String   @db.Text
                    // relation to item
                    - itemId    String   @db.Uuid
                    - item      Item     @relation(
                        fields: [itemId],
                        references: [id],
                        onDelete: Cascade
                    )

                    // internal user (Clerk)
                    - userId    String?  

                    // external platform info
                    - platform      String?   // "twitter", "facebook", "linkedin"
                    - externalId    String?   // id of comment on that platform
                    - authorName    String?   // display name
                    - authorImage   String?   // avatar URL
                    - sourceUrl     String?   // link to original comment/post

                    - createdAt DateTime @default(now())
                    - updatedAt DateTime @updatedAt


                    // prevent duplicates from same source
                    - @@unique([platform, externalId])
                        
            - create newsPost.json file (here will be more than 100 news items)
            - create category following functionals 
                - Last Posts
                    - create function for get the last 20 news by date
                - Archives by month
                    - create function for getting news by creating date  
                - Archive by Category
                    - create function for getting news by category
                - Popular Posts
                    - create function for getting news by rating
                - create total news numbers for every 
            - create pagination component 
        - Blog details page
            - create rating function 
            - create comments number and show comments content
            - create add comment area and function 
                - comments must have reply function, created date, created by (who wrote comment), also add comments from facebook and so functions  
            
    - Other pages
    - Contact Us
        - create static information 
        - create static Form component 



## Create Components 

### Setup and install Shadcn-ui library
    - Setup
        - npx shadcn@latest init
    - Install necessary components 
        - npx shadcn@latest add button breadcrumb card checkbox dropdown-menu input label popover select separator table textarea carousel skeleton
    

### Create component folder and files 
    - cart
    - form
    - blog
        - create MediaCard component
            - ImageContent component
            - VideoContent component 
            - AudioContent component
            - DateBlock component
            - CreatorInfo component
                - use calendar library 
            - NewsType component
            - CommentBlock component 

    - global
        - Container
            - gets 2 props: 
                - children - takes ReactNode as type,
                - className - this is an optional props 
        - SectionTitle
        - EmptyList
            - depending of the situation this component will get different  information 
            - gets two props, both of them will be optional:
                - heading
                - className 
        - LoadingContainer 
        - Card
        - BreadCrumbs
        - PageTitle
        - Pagination
        - PersonalCard
        - DynamicHero 
            - imports:
                - Hero 
                - PageTitle
                - usePathname from next/navigation  
            - for dynamic pages use it 
```ts
const pathname = usePathname();
const segments = pathname.split("/").filter(Boolean); // e.g. ["products", "123"]

if (segments[0] === "products" && segments[1]) {
  text = `Product #${segments[1]}`;
}

```
    - home 
        - Hero
            - imports:
                - Container
                - HeroCarousel
        - HeroCarrousel
            - This component does not completed, please find an idea about it 
            -install 
                - npm install embla-carousel-autoplay
            - imports:
                - Carousel,
                - CarouselContent,
                - CarouselItem,
                - CarouselNext,
                - CarouselPrevious,
                - 

        - FeaturedProducts
            - this is an async function 
            - import:
                - fetchFeaturedProducts from utils/actions
                - EmptyList from global 
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
                    - import usePathname for active class 
                    - create a variable as isActive( const isActive = pathname === array.link )
                    - in mapping functionality create active class, 
                        - it will be dynamic class:
                            className={`
                                        uppercase font-bold cursor-pointer
                                        hover:text-emerald-600
                                        ${isActive ? "text-emerald-600" : ""}
                                        `}

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
            - user side function 
            - install
                - npm i use-debonce
            - imports
                - Input from ui/input
                - useSearchParams, useRouter from next/navigation
                - useDebounceCallback from use-debounce
                - useState, useEffect from react     
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
        - FavoriteToggleButton
        - FavoriteToggleForm
        - ProductsContainer
            - import:
                - ProductsGrid and ProductList components
                    - import 
                        - currencyFormat function form utils/format
                        - Product from prisma/client (without it you cant fetch products)
                        - Card and Card content components 
                        - Link component from next/link
                        - Image component from next/image
                            - for fetching image links:
                                - setup next.config.ts (in my case I get images from pexels.com )
                        
            
``` ts
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.pexels.com', 
            }
        ]
    }
```


        - ProductsList
            - import 
                - currencyFormat function form utils/format

## Utils Folder 
    - create: 
        - link file 
        - socialLinks file
        - db file 
            - contains a default functionality, can be used in more than one projects 
        - action file 
            - import:
                db
            - contains special functions:
                - fetchFeaturedProducts()  
                - fetchAllProducts()
                - fetchAllServiceInfo()
                - fetchServiceBlogItemDetails()
                - fetchAllServiceBlog()
                - fetchMemberDetails()
                - fetchOurTeam()
                - fetchBlogDetails()
                - fetchAllMedia()
                - fetchProductDetails()
                - fetchFeaturedProducts()
        - format file 
            -  create a currency format function 

## Create Supabase project

- create .env and .env.local files in general folder, if it will be in any another location you will recieve error messages (.env.local file doesn't upload into git repo that's why comment it in gitignore file for first time )
    - DB_PASSWORD=database password (you can generate it yourself or database can do it, I prefer database option)
        PASSWORD ytAUaMcOsp5EboM6
    - create:
        - get values from Supabase - Connect option - Transaction mode 
            - at the end of DATABASE_URL add the following 
                - DATABASE_URL= Transaction + password+ "?pgbouncer=transaction_limit=1"
                    - Eg:
                        DATABASE_URL="postgresql://postgres.egdupcecusgzjezckrvx:[YOUR-PASSWORD]@aws-1-us-east-2.pooler.supabase.com:6543/postgres" (Provide your database password )
        - get values from Supabase - Connect option - Session mode  
            - gets just password 
                - DIRECT_URL= Session + Password 
            
            
    
    - You wil use this values in the schema.prisma file 


## Setup Prisma 
    - first of al install prisma vs-code extension 

    - install prisma into your project, 
        - npm install prisma  
        - npm install @prisma/client
            - it  gives us a graphical interface where we can see what happens in our data base 
        
        - run prisma 
            - npx prisma init 

                - open schema.prisma file from prisma folder 
                    - change logic there  (get values from .env )

            - important create a prisma instance, because in development, the command next dev clears Node.js cache on run. This in turn 
            initializes a new PrismaClient instance each time due to hot reloading that a connection to the database. This can quickly 
            exhaust the database connections as each PrismaClient instance holds its own connection pool 
                - create utils/db.ts
                    - db functionality codes you can take from prisma.io or from old projects 

        - there are two commands for pushing of prisma:
            - npx prisma migrate dev --name init
            or 
            - npx prisma db push 
        - create a product model in schema.prisma file (it will be model for selected product you can create models  more than one, for eg user model group model and so on )
        if model attributes is optional you can skip it but mostly the attributes are required ones 
            - stop the server and dev environment (Important, if you don't stop server maybe you can receive bugs )
            - push prisma (npx prisma db push)
            - open prisma studio (npx prisma studio)
        - create a json file in prisma folder (in my first case it will be products.json )
        - create seeding file in prisma folder 




        

        | Task                 | Command                                     | Description                          |
| -------------------- | ------------------------------------------- | ------------------------------------ |
| Create new migration | `npx prisma migrate dev --name your_change` | Updates DB + keeps migration history |
| Push schema directly | `npx prisma db push`                        | Fast update without migration files  |
| Update Prisma client | `npx prisma generate`                       | Refreshes types and client           |
| Open visual editor   | `npx prisma studio`                         | Browse your DB visually              |








