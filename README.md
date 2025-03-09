## SiteEngine - Next.js & Sanity Template.

A fully-featured and open-source template made with [Next.js](https://nextjs.org/) + [Sanity](https://sanity.io/). 

### Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Sanity](https://sanity.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Resend](https://resend.com/)
- [Vercel](https://vercel.com/)

### Features

- Page Builder with 12 pre-made blocks to get you started.
- Visual Editing, Live Preview and Live Content API integrations.
- Form Builder to create custom forms without leaving the Studio.
- Robust website settings implementation.
- Fully-featured blog with table of contents generation, custom portable text blocks, search functionality and more.

### Installation

1. Clone the repository, open it in your code editor and add the following environment variables to a `.env.local` file:
- `NEXT_PUBLIC_SITE_URL` – The public URL of your website (e.g., https://example.com).
- `NEXT_PUBLIC_SITE_NAME` – The name of your website.
- `NEXT_PUBLIC_SANITY_DATASET` – The name of your Sanity dataset (usually "production").
- `NEXT_PUBLIC_SANITY_PROJECT_ID` – Your Sanity project ID found in project settings.
- `NEXT_PUBLIC_SANITY_API_VERSION` – The Sanity API version to use (e.g., "2023-05-03").
- `RESEND_SENDER_EMAIL` – The email address used to send emails via Resend.
- `RESEND_RECIEVER_EMAIL` – The email address that receives contact form submissions.
- `RESEND_API_KEY` – Your Resend API key for email functionality.
- `SANITY_API_READ_TOKEN` – Read-only API token for accessing Sanity content.

2. Run the commands below in your terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install --legacy-peer-deps`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at http://localhost:3000


## Author

#### James Rea

- Twitter ([@jamesreaco](https://twitter.com/jamesreaco))
- Website ([jamesrea.co](https://jamesrea.co))