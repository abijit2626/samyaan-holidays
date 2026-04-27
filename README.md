# Samyaan Holidays

A premium, high-conversion luxury travel platform built with Next.js, Supabase, and AI.

## 🚀 Tech Stack
- **Frontend**: Next.js 15+ (App Router, TypeScript)
- **Styling**: Vanilla CSS with a custom Premium Design System
- **Animation**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: OpenRouter / Gemini API

## 🏛 Architecture
- `/src/app`: Core pages and routing.
- `/src/components`: Premium UI components (Navbar, Hero, ItineraryForm).
- `/src/lib`: Logic and client initializations (Supabase).
- `/src/app/api`: Backend logic (AI generation, lead capture).

## 🛠 Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/abijit2626/samyaan-holidays.git
   cd samyaan-holidays
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Database Setup**:
   - Run the SQL Schema provided in the artifacts in your Supabase SQL Editor.
4. **Environment Variables**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   OPENROUTER_API_KEY=your_optional_ai_key
   ```
5. **Run Locally**:
   ```bash
   npm run dev
   ```

## 🚢 Deployment (Vercel)
The project is optimized for [Vercel](https://vercel.com/):
1. Connect your GitHub repository to Vercel.
2. Add the environment variables mentioned above in the Vercel Dashboard.
3. Deploy!

## 🔐 Admin Dashboard
Access the internal workspace at `/admin` to manage leads and content.
