## Introduction

Open-source marketing website made with [Next.js](https://nextjs.org/) + [Sanity](https://sanity.io/). 

### Tech Stack

- [Next.js](https://nextjs.org/) – Framework
- [TypeScript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS Framework
- [Sanity](https://sanity.io/) – Headless CMS
- [Resend](https://resend.com/) – Email API
- [Vercel](https://vercel.com/) – Hosting


## Required Environment Variables

- `NEXT_PUBLIC_SITE_URL` – The public URL of your website (e.g., https://example.com).
- `NEXT_PUBLIC_SITE_NAME` – The name of your website that appears in metadata and titles.
- `NEXT_PUBLIC_SANITY_DATASET` – The name of your Sanity dataset (usually "production").
- `NEXT_PUBLIC_SANITY_PROJECT_ID` – Your Sanity project ID found in project settings.
- `NEXT_PUBLIC_SANITY_API_VERSION` – The Sanity API version to use (e.g., "2023-05-03").
- `RESEND_SENDER_EMAIL` – The email address used to send emails via Resend.
- `RESEND_RECIEVER_EMAIL` – The email address that receives contact form submissions.
- `RESEND_API_KEY` – Your Resend API key for email functionality.
- `SANITY_API_READ_TOKEN` – Read-only API token for accessing Sanity content.

## Installation

Run these commands in a terminal to get started.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at http://localhost:3000

## Author

#### James Rea

- Twitter ([@jamesreaco](https://twitter.com/jamesreaco))
- Website ([jamesrea.co](https://jamesrea.co))