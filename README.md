# AI Universities Platform

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com)

A full-stack chat application built with Cloudflare Workers, React, and Durable Objects. This platform demonstrates scalable user management, chat boards, and real-time messaging using a single Durable Object namespace for efficient entity storage.

## Features

- **Real-time Chat System**: Create chat boards, send messages, and manage conversations with optimistic updates.
- **User Management**: CRUD operations for users with indexed listing and pagination.
- **Durable Objects**: Efficient storage using a shared GlobalDurableObject for multiple entities (users, chats).
- **Modern UI**: Responsive design with shadcn/ui components, Tailwind CSS, and dark mode support.
- **Type-Safe API**: Shared types between frontend and backend with full TypeScript support.
- **Production-Ready**: Error handling, CORS, logging, and Cloudflare observability.
- **Serverless Architecture**: Zero-cold-start backend with Hono routing and automatic SPA asset handling.

## Tech Stack

- **Frontend**: React 18, Vite, React Router, TanStack Query, shadcn/ui, Tailwind CSS, Lucide Icons, Sonner (toasts)
- **Backend**: Cloudflare Workers, Hono, Durable Objects (GlobalDurableObject with indexing)
- **Data Layer**: In-memory SQLite storage via Durable Objects (CAS-optimized, transactional)
- **Tools**: Bun (package manager), TypeScript, ESLint, Wrangler
- **Libraries**: Framer Motion (animations), Zod (validation), Immer (state), Recharts (optional charts)

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) installed (`npm i -g wrangler`)
- Cloudflare account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Generate Worker types:
   ```bash
   bun run cf-typegen
   ```

### Development

Start the development server (frontend + API proxy):
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) (or `${PORT:-3000}`).

The worker handles `/api/*` routes automatically during dev.

### Build for Production

```bash
bun run build
```

### Deployment

1. Login to Cloudflare:
   ```bash
   wrangler login
   ```
2. Deploy to Cloudflare Workers:
   ```bash
   bun run deploy
   ```

Your app will be live at `https://<worker-name>.<subdomain>.workers.dev`.

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com)

**Note**: Ensure your `wrangler.jsonc` has the correct account ID and settings. Durable Objects migrations are pre-configured.

## API Usage

The backend exposes RESTful endpoints under `/api/`:

- `GET /api/users` - List users (supports `?cursor` & `?limit`)
- `POST /api/users` - Create user `{ name: string }`
- `GET /api/chats` - List chats
- `POST /api/chats` - Create chat `{ title: string }`
- `GET /api/chats/:chatId/messages` - List messages
- `POST /api/chats/:chatId/messages` - Send message `{ userId: string, text: string }`
- Delete endpoints: `DELETE /api/users/:id`, `POST /api/users/deleteMany`

All responses follow `{ success: boolean, data?: T, error?: string }`.

Frontend uses `api-client.ts` for type-safe fetches with TanStack Query.

## Project Structure

```
├── src/              # React frontend (pages, components, hooks, lib)
├── worker/           # Cloudflare Worker backend (entities, routes)
├── shared/           # Shared types & mock data
├── vite.config.ts    # Vite config for SSR/SPA
└── wrangler.jsonc    # Worker deployment config
```

## Customization

- **Add Entities**: Extend `IndexedEntity` in `worker/entities.ts`
- **Add Routes**: Implement in `worker/user-routes.ts`, auto-loaded by `worker/index.ts`
- **UI Components**: Use shadcn/ui (`npx shadcn-ui@latest add <component>`)
- **Theme**: Toggle dark/light mode, fully customizable via Tailwind

**Do not modify** `worker/core-utils.ts` or `worker/index.ts` to avoid breaking core functionality.

## Environment Variables

No required env vars. All storage uses Durable Objects.

## Troubleshooting

- **Worker routes not loading**: Check console for import errors in `user-routes.ts`.
- **Durable Objects**: Run `wrangler dev --remote` for persistent storage in dev.
- **Type errors**: Run `bun run cf-typegen` after Worker changes.
- **CORS issues**: Pre-configured for `*` in dev/production.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Run `bun dev` for testing
4. Submit PR

## License

MIT License. See [LICENSE](LICENSE) for details.