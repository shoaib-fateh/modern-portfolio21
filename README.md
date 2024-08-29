<div align="center">
  <br />
  <a href="#" target="_blank">
    <img src="https://github.com/adrianhajdin/portfolio/assets/151519281/c6ca3c03-6cb7-4f67-a9b9-a73da5bfa0d8" alt="Project Banner">
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Explore My Next.js Portfolio</h3>

  <div align="center">
    Dive into this project crafted with Next.js, Three.js, Framer Motion, and TailwindCSS.
  </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code Snippets](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## 🤖 Introduction

Welcome to a portfolio that blends modern web technologies: Next.js for seamless user interfaces, Three.js for engaging 3D visuals, Framer Motion for fluid animations, and TailwindCSS for stylish and responsive designs.

## ⚙️ Tech Stack

- **Next.js**: For server-side rendering and static site generation.
- **Three.js**: To bring 3D graphics and interactive elements.
- **Framer Motion**: For smooth and sophisticated animations.
- **Tailwind CSS**: To style the portfolio with a utility-first approach.

## 🔋 Features

- **Dynamic Hero Section**: Featuring a captivating introduction with an animated background.
- **Modern Layout**: Utilizing advanced CSS techniques for a sleek presentation.
- **Interactive 3D Elements**: Including 3D models and animations that engage users.
- **Animated Testimonials**: Showcasing feedback with eye-catching animations.
- **Professional Work Display**: Highlighting experience and achievements prominently.
- **Creative Canvas Effects**: Implementing HTML5 canvas for unique visual effects.
- **Responsive Design**: Ensuring a seamless experience across all devices.

## 🤸 Quick Start

To get started with the project locally:

**Prerequisites**

Make sure you have these installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Clone the Repository**

```bash
git clone https://github.com/shoaib-fateh/modern-portfolio21.git
cd portfolio
```

**Install Dependencies**

```bash
npm install
```

**Run the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live project.

## 🕸️ Code Snippets

<details>
<summary><code>data/index.ts</code></summary>

```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


</details>

<details>
<summary><code>tailwind.config.ts</code></summary>
```

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom colors
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Custom animations
      },
    },
  },
  plugins: [],
};

export default config;
```
