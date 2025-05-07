This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
https://www.youtube.com/watch?v=Ahwoks_dawU&t=2245s

Packages Used
1. ShadCN UI
    1.1 Button
    1.2 Input
    1.3 Sheet
    1.4 React Hook Form with Zod Validation from ShadCn
    1.5 Toast
    1.6 Alert Dialog
    1.7 Pagination
2. Copied Resources from Adrian Github Repository
    2.1 global.css
    2.2 tailwind.config.ts
    2.3 Public Assets Folder
    2.4 constants/index.ts
    2.5 lib/database/models/user.model.ts
    2.6 lib/database/models/transaction.model.ts
    2.6 lib/actions/user.action.ts
    2.7 lib/utils.ts
    2.8 types/index.d.ts
    2.9 components/shared/CustomField.tsx
    2.10 components/shared/InsufficientCreditsModal.tsx
    2.11 components/shared/Collection.tsx
    2.12 components/shared/Search.tsx
    2.13 transformations/[id]/page.tsx
    2.14 transformations/update/[id]/page.tsx
    2.15 components/shared/DeleteConfirmation.tsx
    2.16 api/webhooks/stripe/route.ts
    2.17 Credits/Page.tsx
    2.18 components/shared/Checkout.tsx
    2.19 profile/page.tsx
3. Clerk
4. Cloudinary