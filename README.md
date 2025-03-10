## SiteEngine - Next.js & Sanity Template.

A fully-featured marketing website template made with [Next.js](https://nextjs.org/) & [Sanity](https://sanity.io/). 

![The Open-Source Marketing Website](https://github.com/user-attachments/assets/cbb55175-7daa-4c60-ab11-a47f3576e676)

<img width="1381" alt="Screenshot 2025-03-10 at 6 39 05 PM" src="https://github.com/user-attachments/assets/ba0ddb66-3c19-458c-bd14-4689900de1d7" />

<img width="1441" alt="Screenshot 2025-03-09 at 1 46 29 PM" src="https://github.com/user-attachments/assets/a3d1e768-f121-40ad-9ac4-8e65f9e7df83" />

<img width="1440" alt="Screenshot 2025-03-09 at 1 46 46 PM" src="https://github.com/user-attachments/assets/2852e8d2-c58a-40fe-9335-3dc3263fc278" />

<img width="1441" alt="Screenshot 2025-03-09 at 1 53 04 PM" src="https://github.com/user-attachments/assets/ed75ac90-b6d1-4754-a266-51c41de00bb6" />


### Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Sanity](https://sanity.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Resend](https://resend.com/)
- [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- [Vercel](https://vercel.com/)

### Features

- Page Builder with 12 pre-made blocks to get you started.
- Visual Editing, Live Preview and Live Content API integrations.
- Form Builder to create custom forms without leaving the Studio.
- Robust website settings implementation.
- Custom input components for an enchanced content editing experience.
- Fully-featured blog with table of contents generation, custom portable text blocks, search functionality and more.

### Installation

1. Create a new Sanity project, add `http://localhost:3000` to CORS origins (Settings > API > CORS origins) and create an API token with `Viewer` permissions (Settings > API > Tokens).

2. Clone this repository, open it in your code editor, create a `.env.local` file and add the following environment variables:
- `NEXT_PUBLIC_SITE_URL` – The public URL of your website (use `http://localhost:3000` during development).
- `NEXT_PUBLIC_SITE_NAME` – The name of your website.
- `NEXT_PUBLIC_SANITY_DATASET` – The name of your Sanity dataset (usually "production").
- `NEXT_PUBLIC_SANITY_PROJECT_ID` – Your Sanity project ID found in project settings.
- `NEXT_PUBLIC_SANITY_API_VERSION` – The Sanity API version to use (e.g., "2023-05-03").
- `RESEND_SENDER_EMAIL` – The email address used to send emails via Resend.
- `RESEND_RECIEVER_EMAIL` – The email address that receives contact form submissions.
- `RESEND_API_KEY` – Your Resend API key for email functionality.
- `SANITY_API_READ_TOKEN` – API token for accessing Sanity content.

3. Run these commands in your terminal at the root of your project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install --legacy-peer-deps`| Installs dependencies.|
| `npx sanity dataset import demo-content.tar.gz production`| Imports demo content (optional).|
| `npm run dev`| Starts local dev server at http://localhost:3000


## Author

#### James Rea

- LinkedIn ([@jamesreaco](https://linkedin.com/in/jamesreaco))
- Website ([jamesrea.co](https://jamesrea.co))
- X (Twitter) ([@jamesreaco](https://x.com/jamesreaco))
