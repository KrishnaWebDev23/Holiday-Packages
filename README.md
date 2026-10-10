# ✈️ WanderlustCo — Holiday Packages Web Application

A clean, responsive single-page web application built for exploring curated holiday packages. Designed with a focus on modern user experience, responsive layout structuring, and modular component architecture.

🔗 **Live Demo:** [View Live Website](https://your-deployment-link.vercel.app)  
📁 **Repository:** [GitHub Repository](https://github.com/your-username/your-repo-name)

---

## ✨ Key Features

- **Immersive Hero Section:** High-impact visual landing introduction with glassmorphism navigation and quick-action triggers.
- **Dynamic Category Filtering:** Real-time client-side filtering that lets users browse packages by interest (*Beach, Mountain, Cultural, City*).
- **Mobile-Optimized Experience:** Features smooth horizontal touch-swiping with native scroll snapping on mobile viewports, scaling up cleanly into a multi-column grid on desktop screens.
- **Interactive Contact Form:** Fully controlled form state management with client-side validation, asynchronous submission simulation, loading feedback spinners, and success alerts.
- **Seamless Single-Page Navigation:** Built with native anchor-based smooth scrolling to maintain continuous context across sections.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 📁 Project Structure

```text
src/
├── components/         # Modular React components
│   ├── Navbar.tsx      # Sticky header & mobile drawer menu
│   ├── Hero.tsx        # Landing header section
│   ├── About.tsx       # Company statistics and trust badges
│   ├── Packages.tsx    # Filterable package cards grid
│   ├── ContactForm.tsx # Controlled form with validation & feedback
│   └── Footer.tsx      # Footer links and contact info
├── data/
│   └── packagesData.ts # Typed mock dataset for travel packages
├── types/
│   └── index.ts        # TypeScript interfaces and data models
├── App.tsx             # Main application container
└── main.tsx            # Entry point
