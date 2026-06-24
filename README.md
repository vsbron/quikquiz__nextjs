# QuikQuiz

QuikQuiz is a lightweight, interactive quiz app built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Users can browse quiz categories, choose a difficulty level, answer 10 multiple-choice questions, and instantly view their results — including a visual correct vs wrong breakdown using **Chart.js**.

The app is designed as a clean portfolio project with a real-world structure: quiz data is served via **Next.js API routes**, results are calculated through a dedicated API endpoint, and the quiz flow is protected using **sessionStorage** to prevent invalid navigation (like opening results without finishing a quiz).

---

## Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Page Descriptions](#page-descriptions)
   - [Home Page](#home-page)
   - [How To Play Page](#how-to-play-page)
   - [Categories Page](#categories-page)
   - [Quiz Page](#quiz-page)
   - [Results Page](#results-page)
   - [About Us Page](#about-us-page)
4. [API Routes](#api-routes)
5. [Technical Details](#technical-details)

---

## Project Overview

QuikQuiz focuses on building a smooth, modern quiz experience using the Next.js App Router.  
The project includes dynamic routing, API-driven quiz loading, server-side result calculation, and session-based flow validation.

---

## Project Core Principles

- Simple, distraction-free UI
- Clear quiz flow from category → difficulty → quiz → results
- Modular, reusable UI components
- API-first structure without requiring a database
- Preventing invalid navigation (results must come from a completed quiz)

---

## Features

### UI / UX Features

- 🧭 **Header + Footer layout**
  - Header includes logo and main navigation
  - Footer includes navigation links + copyright
- 🏠 **Homepage hero section** with 3 main navigation buttons
- 🗂️ **Quiz Categories Page** listing all available categories
- 🎚️ **Difficulty selection** (3 levels per category)
- 🧠 **10-question quiz flow**
  - 4 answer options per question
  - includes questions with images
- 📊 **Results page**
  - final score with multiplier
  - donut chart visualization (correct vs wrong)
  - list of questions answered incorrectly
- 🎲 **Random Quiz button**
- 📱 **Fully responsive layout**
  - optimized down to **360px**
  - mobile navigation uses a hamburger menu

### Backend / Logic Features

- 🔌 **API-powered quiz loading**
  - quizzes are fetched through a GET API endpoint
- 🧮 **Server-side result calculation**
  - answers are sent via POST request
  - score and incorrect questions are calculated server-side
- 💾 **Session-based flow protection**
  - results are stored in `sessionStorage`
  - results page reads data and clears it
  - prevents opening results without completing the quiz

---

## Page Descriptions

### Home Page

- Hero section with a short intro
- Three main navigation buttons for quick access
- Header with logo and main navigation
- Footer with navigation links and copyright

### How To Play Page

- Clear rules and instructions for playing QuikQuiz
- Explains the quiz flow and how scoring works

### Categories Page

- Lists all available quiz categories
- Each category leads into the quiz flow
- Includes a Random Quiz option

### Quiz Page

- Difficulty selection (3 levels)
- 10-question quiz flow
- Each question includes 4 answer options
- Supports questions with images
- Tracks answers throughout the quiz session
- Final step allows the user to calculate results

### Results Page

- Shows the final score and difficulty multiplier
- Donut chart visualization of correct vs wrong answers (Chart.js)
- List of questions answered incorrectly
- Results are pulled from session storage and cleared immediately
- Includes quick-share buttons:
  - Telegram
  - WhatsApp
  - Reddit
  - X (Twitter)
- Includes a Download button to save the results as an image (screenshot export)
- Includes options to retry the quiz or pick another category

### App Info Page

- Short overview of QuikQuiz and its core features
- Highlights the project summary and tech stack

---

## API Routes

### Get category questions

`GET /api/categories/[category]`

- Finds the category pack by `slug`
- Returns the category object with title + difficulties + questions
- Returns 404 if the category does not exist

---

### Calculate quiz results

`POST /api/results`

Payload:

- `category` (string)
- `difficulty` (casual | moderate | pro)
- `answers` (string[])

Returns:

- `score`
- `total`
- `correctCount`
- `quizName`
- `wrongQuestions[]`

---

## Technical Details

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: HeroIcons
- **Charts**: Chart.js
- **Data Source**: static quiz packs (no database)
- **API Layer**: Next.js Route Handlers
- **Server-side result calculation** with payload checks (category, difficulty, answers length)
- **State**: client-side state + `sessionStorage`
- **SEO + social sharing metadata**: page titles/descriptions, canonical URLs, Open Graph, Twitter cards
- **Lighthouse scores**: 95+ across all categories (Performance, Accessibility, Best Practices, SEO)
- **Responsiveness**: optimized down to 360px
- **Deployment**: Vercel

---

## License

©2026 BroN

This repository is intended for portfolio/demo purposes. Permission is granted to view and run the project for personal evaluation. Reuse, redistribution, or commercial use is not permitted without written permission.

---

## Live Version

https://quikquiz.vercel.app/
