## Snaprise

A clean, responsive Nextjs-based photo gallery and directory platform that enables service professionals—contractors, cleaners, landscapers, and more—to showcase their work and connect with potential clients. This README guides you through setup, usage, and project structure.

---

### Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
4. [Project Structure](#project-structure)
5. [Available Scripts](#available-scripts)
6. [Milestones](#milestones)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **User Authentication:** Sign up, log in, and log out using Firebase Auth.
- **Project Management:** Create, edit, and delete projects.
- **Photo Upload & Notes:** Upload multiple photos per project with optional notes for each image; stored in Firebase Storage.
- **Public Profile:** Generate a public-facing profile with business information, photo galleries, service listings, and reviews.
- **Searchable Directory:** Directory page listing all public profiles; filter by trade, location, and keywords.
- **Visibility Toggle:** Mark profiles and individual projects as public or private.
- **Responsive Design:** Mobile-first layout built with React, Tailwind CSS, and shadcn/ui.

---

## Tech Stack

- **Framework:** Nextjs (TypeScript)
- **Routing:** App router
- **Styles:** Tailwind CSS & Shadcn/ui
- **Backend-as-a-Service:** Firebase (Auth, Firestore)
- **Image Storage:** ImageKit

---

## Getting Started

### Prerequisites

- Node.js v22+ and pnpm
- Firebase project (web app) with Auth, Firestore enabled
- ImageKit account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/snaprise.git
   cd snaprise
   ```
2. Install dependencies:
   ```bash
   bun install
   ```
3. Create a `.env.local` file at the project root and add your Firebase config:

```env

# Firebase

FIREBASE_API_KEY="<YOUR_FIREBASE_API_KEY>"
FIREBASE_AUTH_DOMAIN="<YOUR_FIREBASE_AUTH_DOMAIN>"
FIREBASE_PROJECT_ID="<YOUR_FIREBASE_PROJECT_ID>"
FIREBASE_STORAGE_BUCKET="<YOUR_FIREBASE_STORAGE_BUCKET>"
FIREBASE_MESSAGING_SENDER_ID="<YOUR_FIREBASE_MESSAGING_SENDER_ID>"
FIREBASE_APP_ID="<YOUR_FIREBASE_APP_ID>"

# AI

GOOGLE_GENAI_API_KEY="<YOUR_GOOGLE_GENAI_API_KEY>"

# ImageKit

IK_ENDPOINT="<YOUR_IMAGEKIT_ENDPOINT>"
IK_PUBLIC_KEY="<YOUR_IMAGEKIT_PUBLIC_KEY>"
```

### Running the App

- **Development:**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

- **Production Build:**

  ```bash
  bun run build
  bun run start
  ```

---

## Project Structure

```
├── public             # Public assets
├── src
│   ├── components     # Reusable UI components (shadcn/ui)
│   ├── lib            # Library functions
│   ├── config         # Third party configurations
│   ├── schemas        # Schemas for validation
│   ├── constants      # Constants
│   ├── styles         # Global styles / Tailwind config
├── .env.local         # Local environment variables
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with a clear description of changes.

---

## License

MIT License © 2025 Snaprise Contributors
