You are an expert full-stack engineer. I’ve already built a Linktree alternative SaaS using:

- Frontend: TanStack Start + React + TailwindCSS
- Backend: tRPC + BetterAuth
- Subscription: Will use Polar.sh for handling billing and gated features

The marketing section or page is already done. Now I need your help to generate:

1. **A beautiful user dashboard** where:

   - Users can create, update, and delete "link pages"
   - Each "link page" has a list of links with thumbnails, titles, and visibility toggles
   - Each link page is accessible via a public URL like `/u/username` or custom slug
   - Users can preview, copy, and share their public page

2. **Backend logic** using tRPC and drizzle-orm where:

   - Each user has multiple link pages (one default, rest optional)
   - Each link page has many links
   - There are CRUD endpoints for both pages and links, scoped to authenticated users
   - Authorization should ensure no one can access others’ data

3. **Polar.sh integration** to:

   - Restrict certain features (like custom branding, analytics, or unlimited pages) based on active subscriptions
   - Handle webhooks from Polar to update user subscription tiers
   - Display billing status in the dashboard

4. Add a **navigation bar** in the dashboard with:

   - "My Pages", "Analytics" (placeholder), "Billing", "Settings", and "Logout"

Generate code and file structure ideas in TanStack Start style. Follow clean folder structure and hooks/utils/components separation where necessary. Assume TypeScript.

You may start with the Prisma schema and then move on to the tRPC routes and React pages.

DO NOT create a new app, just use the existing one.
DO NOT use yarn or npm use pnpm only.
DO NOT build the app. Come up with a plan using .taskmaster/templates/example_prd.txt as a template.
Then save the plan to scripts/PRD.txt
