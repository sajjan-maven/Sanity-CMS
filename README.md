## SiteEngine - Next.js & Sanity Template.

A fully-featured marketing website template made with Next.js, Sanity, TypeScript, Tailwind & more.

![Frame 1 (1)](https://github.com/user-attachments/assets/d172a536-027e-4f8d-b1b6-fed47db5daf3)

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

## Screenshots

<img width="1334" alt="Screenshot 2025-03-11 at 8 14 53 AM-min" src="https://github.com/user-attachments/assets/d129b3e8-a81c-466c-af6d-5cf3979e8421" />

<img width="1336" alt="Screenshot 2025-03-11 at 8 15 19 AM-min" src="https://github.com/user-attachments/assets/2058d5b4-0495-4756-80ab-35fc96a581a8" />

<img width="1336" alt="Screenshot 2025-03-11 at 8 15 29 AM-min" src="https://github.com/user-attachments/assets/345f02dc-71b9-4f0e-8c6b-defd7af1406c" />

<img width="1337" alt="Screenshot 2025-03-11 at 8 15 07 AM-min" src="https://github.com/user-attachments/assets/110ecdc2-186f-4870-972a-51c7c2feabb8" />

<img width="1441" alt="Screenshot 2025-03-09 at 1 46 29 PM" src="https://github.com/user-attachments/assets/a3d1e768-f121-40ad-9ac4-8e65f9e7df83" />

<img width="1441" alt="Screenshot 2025-03-09 at 1 53 04 PM" src="https://github.com/user-attachments/assets/ed75ac90-b6d1-4754-a266-51c41de00bb6" />
