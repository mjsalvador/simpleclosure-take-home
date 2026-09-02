## Project Description

This is a a small movie discovery app where you can browse the top 20 trending movies from The Movie Database (TMDB), and filter them by genre, and sort the results. It's a React, TypeScript, and Next.js project bootstrapped with a personal [project template](https://github.com/mjsalvador/bootstrap/) based on [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Running Locally

**Prerequisites:** Node.js 20.9+

1. Install the dependencies:
   ```
   npm i
   ```
2. Create `.env.local` from the example and fill in the variables
   ```
   cp .env.example .env.local
   ```
        TMDB_API_KEY=Your TMDB API key
        TMDB_BASE_URL=https://api.themoviedb.org/3
3. Build and start the server
   ```
   npm run build && npm run start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Brief Note on Architecture

The client never talks to TMDB directly. It calls an internal [Next.js Route Handler](https://nextjs.org/docs/app/getting-started/route-handlers), which proxy the requests to TMDB with the API key injected server-side.

- **Route handlers** (`src/app/api/movies`, `src/app/api/genres`) are the app's [backend for frontend](https://nextjs.org/docs/app/guides/backend-for-frontend) and they call TMDB through a single shared axios instance.
- **Data fetching is done with [SWR](https://vercel.com/oss/swr).** `useGetMovies` and `useGetGenres` wrap `useSWR` and expose data, loading, and error states.
- **Filtering and sorting are performed client-side instead of via query parameters on API requests.** The first page of TMDB's `/discover/movie` endpoint is intentionally treated as a fixed dataset. `src/app/page.tsx` holds the sort and filter state and derives the results.
- **Components of Interest:**
  - `MoviesControl`: controls sort properties and direction, and genre filters
  - `GenresPanel`: renders [all movie genres](https://developer.themoviedb.org/reference/genre-movie-list) as toggle buttons
  - `MoviesGrid`: renders a grid of `MovieCard`s
  - `MovieCard`: renders the movie poster, title, rating, number of ratings, and year, with an overlay of the description triggered on hover.

## Tech Stack

| Area          | Technologies                          |
| ------------- | ------------------------------------- |
| UI Frameworks | React, TypeScript, Next.js            |
| Data fetching | SWR, axios                            |
| Styling       | Tailwind, shadcn, lucide              |
| Tooling       | ESLint, Prettier, Husky + lint-staged |

## AI Usage

- Claude Design was prompted to create a UI mockup given my vision for the final product
- Claude Code was used as a rubber ducky and reviewer, but all architectural decisions and final code are mine
- Upon completion of an MVP, Claude Code was prompted to identify potential areas of improvement and surface uncaught gaps and bugs
