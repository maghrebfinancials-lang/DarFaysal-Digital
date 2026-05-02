# Atlas Keys Realty Template

Premium multilingual luxury real estate website system built with Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, and local mock data.

This project is designed for digital agencies that want a reusable product for Moroccan luxury real estate clients in Marrakech, Casablanca, and Rabat.

## Core characteristics

- Premium editorial visual direction
- English and French support
- Localized routes with clean public URLs
- Frontend-first architecture
- No auth
- No database dependency in v1
- No unnecessary backend
- CMS-ready structure for later integrations

## Included pages

- Home
- Properties listing
- Single property detail
- Book a visit
- About
- Services
- Contact
- List your property
- Blog listing
- Blog article
- Localized not-found handling

## Multilingual architecture

Locales supported:

- `en`
- `fr`

Implementation notes:

- Locale pages live under `app/[locale]/`
- Dictionaries live in `messages/`
- Route helpers live in `lib/i18n.ts`
- Middleware rewrites elegant French public URLs to stable internal route folders

Examples:

- `/en/properties`
- `/fr/proprietes`
- `/en/book-visit`
- `/fr/reserver-visite`
- `/en/list-your-property`
- `/fr/confier-votre-bien`

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Radix UI primitives where useful

## Project structure

- `app/` App Router pages, layouts, metadata, sitemap, robots
- `components/` Reusable UI, forms, cards, navigation, content sections
- `data/` Mock agents, properties, services, testimonials, blog content
- `messages/` English and French dictionaries
- `lib/` Site config, i18n helpers, SEO helper, utilities, derived data
- `types/` Shared TypeScript models including localized field types

## Local development

Requirements:

- Node.js 18.18+ or 20+
- npm 9+

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Deployment

This project is prepared for simple deployment on Vercel and standard Node hosting providers.

### Vercel

1. Push the repo to GitHub
2. Import the project into Vercel
3. Use the default commands:

```bash
npm install
npm run build
```

No environment variables are required for v1.

### Hostinger or other Node hosting

1. Use Node.js 18.18+ or 20+
2. Install dependencies:

```bash
npm install
```

3. Build:

```bash
npm run build
```

4. Start:

```bash
npm run start
```

`next.config.ts` uses:

```ts
output: "standalone"
```

This is helpful for managed Node hosting and production packaging.

## Customization guide

To adapt the template for a new agency client:

1. Update agency details in `lib/site.ts`
2. Update English and French UI copy in `messages/en.ts` and `messages/fr.ts`
3. Update listing, service, testimonial, and blog content in `data/`
4. Replace remote images with local assets in `public/` if preferred
5. Adjust premium brand styling in `app/globals.css` and `tailwind.config.ts`

## Future upgrade path

The codebase is intentionally ready for future integrations:

- Headless CMS
- Supabase
- CRM form handling
- Email/webhook submission handlers
- Analytics and conversion tracking
- Additional locales such as Arabic

Recommended starting integration points:

- `lib/data.ts`
- `data/properties.ts`
- `data/services.ts`
- `messages/`
- `components/forms/`

## Notes

- Forms currently use local success states only
- Listing and blog data are mock datasets
- SEO is prepared with per-page metadata, sitemap, robots, and JSON-LD placeholders
- Public French URLs are handled through middleware while keeping internal route folders maintainable

## Final verification

Before deployment, run:

```bash
npm install
npm run build
```

This environment did not have Node/npm available during generation, so that final build check should be completed in a normal local or CI environment.
