# 🧠 Chain of Mind – AI Task Planner

An intelligent, streaming task planner built in **5 hours** — inspired by OpenAI Copilot UX.  
Reads your goal → breaks it into steps → streams the plan into a sleek UI card.

Tested. Deployed. Fake streaming included. Built to showcase frontend ✕ AI ✕ UX skills.

---

## 🌐 Live Demo

🔗 [chain-of-mind.vercel.app](https://chain-of-mind-iw3z.vercel.app)

> Type your goal → Click **Generate Plan** → Watch the plan stream in real time.

---

## 🛠️ Tech Stack

| Area        | Tech Used                                   |
|-------------|----------------------------------------------|
| **Framework** | Next.js 14 (App Router, TypeScript)         |
| **Styling**   | Tailwind CSS + Shadcn UI + Lucide Icons     |
| **Animation** | Custom `fade-in` via Tailwind config        |
| **API Layer** | Simulated OpenAI with `ReadableStream`      |
| **Hooks**     | Custom `useStream()` for real-time UI       |
| **Testing**   | Playwright (End-to-End tests)               |
| **Deploy**    | Vercel with environment config              |

---

## 📂 Project Structure

```bash
chain_of_mind/
├── app/
│   ├── api/
│   │   └── plan/
│   │       └── route.ts         # Fake OpenAI streaming logic
│   ├── dashboard/
│   │   └── page.tsx             # UI: textarea, button, result card
│   ├── layout.tsx               # Layout shell with header
│   └── globals.css              # Tailwind + base styles
│
├── components/
│   ├── ui/
│   │   ├── button.tsx           # Shadcn button
│   │   ├── card.tsx             # Shadcn card
│   │   └── input.tsx            # Shadcn input
│   └── AgentCard.tsx           # Custom animated result card
│
├── lib/
│   └── useStream.ts             # Hook for streaming data
│
├── public/                     # Default assets
├── tests/
│   └── agent.spec.ts            # Playwright E2E test
│
├── .env.local                   # OPENAI_API_KEY (optional/fake)
├── tailwind.config.ts           # Extended with animation
├── package.json
└── README.md



## ⏱️ Hour-by-Hour Build Log

| Hour | Milestone |
|------|-----------|
| **Hour 1** | Created project with `create-next-app` + Tailwind + TypeScript + Shadcn |
| **Hour 2** | Built layout shell with header and global styles |
| **Hour 3** | Integrated fake OpenAI streaming API and useStream hook |
| **Hour 4** | Built AgentCard component with fade-in animation |
| **Hour 5** | Wrote Playwright test and deployed to Vercel |

---

## 🧪 Test Result

✅ All end-to-end tests pass locally using Playwright:

```bash
> npm run test:e2e
✓ 1 passed (Playwright: streamed agent response)


👩‍💻 Author
Anvi Yadav
Final-year CS student | Building production-ready, AI-powered frontend systems.
Strong in React, API integration, and shipping polished features fast.

🔗 GitHub: github.com/Yanvi09

🔗 Project URL: chain-of-mind.vercel.app

