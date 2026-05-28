# The Forum — React

This is the React + Vite version of The Forum website. Same content and design as the static HTML version, but built as a single-page React app with React Router.

## Prerequisites

You need **Node.js** (v18 or newer) installed on your machine. Check with:

```
node -v
npm -v
```

If Node.js isn't installed, get it from https://nodejs.org (download the LTS version).

## Run locally (the boss's "host locally" step)

Open a terminal in this folder and run:

```
npm install
npm run dev
```

That will:
1. Download all the dependencies into `node_modules`
2. Start a local dev server (default: `http://localhost:5173`)
3. Auto-open the site in your browser

The dev server has **hot reload** — edit any file and the browser updates automatically.

## Build for production

To create an optimized production build:

```
npm run build
```

The output ends up in the `dist/` folder. To preview the production build locally:

```
npm run preview
```

## Project structure

```
forum-react/
├── index.html              # Vite entry HTML (loads React)
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite config
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Routes
│   ├── styles.css          # All styles (ported from the HTML version)
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── RevealRoot.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── Customizer.jsx
│   │   └── Sections.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Services.jsx
│       ├── Products.jsx
│       ├── ServiceWebsite.jsx
│       ├── ServiceConsole.jsx
│       ├── ServiceCCTV.jsx
│       ├── ServiceERP.jsx
│       ├── ServiceMaintenance.jsx
│       ├── ServiceConsultancy.jsx
│       ├── ProductCanteen.jsx
│       ├── ProductVayu.jsx
│       └── ProductAttendance.jsx
└── README.md
```

## Routes

| URL                          | Page                       |
| ---------------------------- | -------------------------- |
| /                            | Home                       |
| /services                    | Services overview          |
| /products                    | Products overview          |
| /services/website            | Website Development        |
| /services/device-console     | Device Console             |
| /services/cctv               | CCTV Solutions             |
| /services/erp                | ERP Systems                |
| /services/maintenance        | Maintenance                |
| /services/consultancy        | Consultancy                |
| /products/canteen            | Canteen                    |
| /products/vayu               | Vayu                       |
| /products/attendance        | Attendance                 |

## Notes

- The original static HTML version still lives in the parent folder — this React build is independent.
- Theme (dark / light) preference persists in `localStorage`.
- Scroll-spy on the homepage highlights the active section in the nav.
- Scroll-reveal animations re-trigger on every route change.
