# React Airbnb Experience

An Airbnb-inspired accommodation browsing demo built with React 18. This is an educational portfolio project based on a React course, not an official Airbnb product.

## Features

- Airbnb-style home page with curated destinations and room sections
- Room listing page with filters, pagination, loading states, and API data
- Room image carousel and full-screen photo browser
- React Router, Redux Toolkit, styled-components, Ant Design, and Material UI

## Tech stack

- React 18 + Create React App
- React Router 6
- Redux Toolkit + React Redux
- styled-components + Less
- Axios

## Getting started

Requirements: Node.js 18+ and npm 9+.

```bash
npm install
cp .env.example .env.local
npm start
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run build   # production build
npm test        # test runner
```

## Routes

- `#/home` — home page
- `#/entire` — accommodation listing
- `#/detail` — accommodation photo gallery

## API configuration

The demo currently consumes a course-provided API. Set `REACT_APP_API_BASE_URL` in `.env.local` to use another compatible API endpoint. The endpoint may be unavailable outside the original learning environment.

## Project status

The current milestone focuses on browsing, listing, pagination, photo viewing, and a basic room information module. Booking flows, authentication, reviews, search, and production-grade error states are planned for future iterations once real services are available.

## License

The source code in this repository is licensed under the [MIT License](./LICENSE).

This is an independent educational project and is not affiliated with Airbnb. Airbnb names, logos, visual assets, third-party images, and course-provided API data belong to their respective owners and are not claimed by this license.
