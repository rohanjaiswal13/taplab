Claude Code Prompt: Refactor Restaurant Menu Project

Project Context:
Next.js + TailwindCSS + TypeScript project. Currently, each restaurant has its own TSX file (mcdonalds.tsx, kfc.tsx) served at https://taplab.in/[restaurant_name]. Payments and subscriptions are manual. The current architecture does not scale.


---

Goals:

1. Replace per-restaurant TSX files with a single dynamic page

[restaurant_name]/page.tsx dynamic route using Next.js App Router.

Captures restaurant slug from the URL (taplab.in/mcdonalds) or subdomain in the future.



2. Menu rendering

Create a generic MenuRenderer component that:

Accepts menuConfig + branding from Firestore.

Dynamically renders all sections (hero, menu grid, offers, reviews, etc.).

Uses only predefined Tailwind classes, no dynamic CSS from DB.

Suspends menu if subscription inactive or trial expired.




3. Data-driven architecture

Firestore schema per restaurant:




{
  slug: string,           // e.g., "mcdonalds"
  menuConfig: object,     // sections, layout, items, images
  branding: object,       // colors, fonts, logo
  subscription: {
    plan: "monthly"|"yearly",
    price: number,
    status: "active"|"past_due"|"trial"|"cancelled",
    currentPeriodEnd: timestamp
  }
}

Adding a new restaurant = add Firestore doc only, no new TSX file, no redeploy.


4. Subscription & automated payments

Integrate Razorpay subscriptions (monthly/yearly + free trial).

Webhooks update Firestore subscription.status.

Vercel Cron ensures menus are suspended if unpaid or trial ends.



5. Data migration

Convert existing TSX menus into Firestore menuConfig.

Preserve all current menus’ layouts, colors, fonts, and content.



6. Cleanup

Remove all [restaurant_name].tsx files.

Remove any per-restaurant duplicate logic.





---

Constraints:

One dynamic page handles all restaurants.

Menus must remain fully customizable via Firestore data.

Renderer handles all layouts dynamically, safely using Tailwind.

One repo, one deployment, unlimited restaurants.



---

Expected Result:

Dynamic [restaurant_name]/page.tsx renders all menus.

Subdomains or paths (taplab.in/[restaurant_name]) map to restaurants.

Automated subscription and menu suspension work.

Adding a restaurant = add Firestore document only, no new TSX file or deployment.