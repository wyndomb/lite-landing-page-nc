# Newsletter AI Studio

**AI-powered tools for newsletter creators to grow their audience and create compelling content.**

![Newsletter AI Studio](https://img.shields.io/badge/Status-Production%20Ready-green) ![Next.js](https://img.shields.io/badge/Next.js-14.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue) ![Supabase](https://img.shields.io/badge/Supabase-Backend-green) ![Stripe](https://img.shields.io/badge/Stripe-Payments-purple)

## 📖 Overview

Newsletter AI Studio is a comprehensive SaaS platform designed specifically for newsletter creators who want to grow their audience, create compelling content, and optimize their newsletter strategy using AI-powered tools. Built by newsletter creators for newsletter creators, it addresses the real challenges of content creation, audience growth, and engagement optimization.

**🔗 Live Demo:** [https://newsletter-coach.vercel.app](https://newsletter-coach.vercel.app)

> **Project Note:** This project was recently migrated from a Vite + React setup to Next.js 14 to leverage the App Router for improved performance, SEO, and scalability.

### 🎯 Target Audience

- Newsletter creators on platforms like Substack, ConvertKit, Mailchimp
- Content creators and marketers
- Entrepreneurs building newsletter-based businesses
- Anyone looking to grow their email audience with AI assistance

## ✨ Key Features

### 🤖 AI-Powered Content Tools

- **Substack Notes Generator**: Create engaging promotional notes to grow your audience (10 different note types including Signature Thesis, Contrarian Perspective, Vulnerable Story, etc.)
- **Title Generator**: Generate compelling newsletter titles with subtitles that drive opens and engagement
- **Content Ideas & Gap Analysis**: AI-powered content suggestions and gap analysis based on your newsletter content
- **Brand Voice Analyzer**: Analyzes your newsletter content to understand and maintain your unique voice across all generated content

### 🎨 Brand Voice Analysis

- **Newsletter URL Analysis**: Scrapes and analyzes your newsletter content using Firecrawl API
- **Brand Profile Creation**: Creates detailed profiles including voice tone, target audience, core expertise, writing style, unique angle, problems solved, content themes, and engagement style
- **Voice Consistency**: All AI tools use your brand profile to ensure generated content matches your authentic voice
- **Content Library**: Saves analyzed articles for reuse across different AI tools

### 📊 Smart Features

- **Dual Input Modes**: Enter newsletter URLs directly or select from your saved content library
- **Subscription Management**: Integrated billing with Stripe (Monthly $20/month, Yearly $200/year with 7-day free trial)
- **Trial System**: 7-day free trial for yearly plans
- **Mobile-Responsive Design**: Modern, gradient-rich UI that works perfectly on all devices
- **Authentication**: Google OAuth and email/password login with Supabase Auth

## 🛠️ Technology Stack

### Frontend

- **Next.js 14** with App Router, React 18, and TypeScript
- **Tailwind CSS** for responsive, modern UI design
- **Lucide React** for consistent iconography
- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** for performance

### Backend & Infrastructure

- **Supabase** for authentication, database, and real-time features
- **PostgreSQL** database with Row Level Security (RLS)
- **Supabase Edge Functions** for serverless API endpoints
- **Vercel** for hosting and deployment

### AI & External Services

- **Anthropic Claude API (claude-4-sonnet-20250514)** for advanced AI content generation
- **Firecrawl API** for intelligent web scraping and content extraction
- **Stripe** for secure payment processing and subscription management

### Development Tools

- **ESLint** for code quality and Next.js configuration
- **TypeScript** for type safety
- **PostCSS** with Autoprefixer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- Stripe account for payments
- Anthropic API key for AI features
- Firecrawl API key for web scraping

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration (Client-side)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration (Client-side)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Server-side only (for API routes and Edge Functions)
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# AI Services (for Supabase Edge Functions)
ANTHROPIC_API_KEY=sk-ant-...
FIRECRAWL_API_KEY=fc-...
```

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository_url>
   cd newsletter-coach
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Then, edit the `.env.local` file with your actual values from Supabase, Stripe, Anthropic, and Firecrawl.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗃️ Database Schema

### Core Tables

- **`brand_profiles`**: Stores AI-analyzed brand voice and style profiles for each user.
- **`scraped_articles`**: Caches newsletter content scraped via Firecrawl for analysis.
- **`stripe_user_subscriptions`**: Manages user subscription status and payment data from Stripe.

### Authentication

Uses Supabase Auth with Google OAuth integration and email/password authentication. User data is stored in the `auth.users` table.

## 🔧 Configuration

### Supabase Setup

1. **Create a new Supabase project**.
2. **Run the database migrations** located in the `supabase/migrations/` directory to set up the required tables and functions.
3. **Deploy Edge Functions** from the `supabase/functions/` directory. Each function needs to be deployed via the Supabase CLI.
4. **Configure authentication providers** (e.g., Google OAuth) in the Supabase dashboard.
5. **Set up Row Level Security (RLS) policies** on all tables to ensure data privacy.

### Stripe Integration

1. **Create products and pricing** in your Stripe Dashboard for monthly and yearly subscriptions.
2. **Configure webhooks** to handle subscription events
3. **Set up the webhook endpoint** at `/api/stripe/webhook`
4. **Test the payment flow** with Stripe test cards

### AI Services Setup

1. **Anthropic Claude**: Sign up for API access and get your API key
2. **Firecrawl**: Register for web scraping API access
3. **Configure rate limits** and error handling

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Connect to Vercel**

   - Import repository at [vercel.com](https://vercel.com)
   - Vercel auto-detects Next.js configuration

3. **Set Environment Variables**

   - Add all variables from `.env.local` in Vercel dashboard
   - Project Settings → Environment Variables

4. **Update Supabase Auth Settings**
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/auth/callback`
   - Allowed Origins: `https://your-app.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# ... add all other variables
```

## 📊 Features Deep Dive

### 1. Substack Notes Generator

Analyzes your newsletter content and brand voice to generate engaging Substack Notes in 10 different types:

- **Signature Thesis** 🎯 - Your core beliefs and positions
- **Contrarian Perspective** 🔥 - Challenge conventional wisdom
- **Vulnerable Story** 💭 - Personal experiences and lessons
- **Tactical Wisdom** ⚡ - Actionable insights and tips
- **Curiosity Catalyst** ❓ - Thought-provoking questions
- **Insight Revelation** 💡 - Key discoveries and realizations
- **Mistake Lesson** 📚 - Learning from failures
- **Industry Commentary** 📊 - Analysis of trends and news
- **Community Connection** 🤝 - Building relationships
- **Future Vision** 🔮 - Predictions and possibilities

### 2. Title Generator

Creates compelling newsletter titles with matching subtitles using:

- AI analysis based on your newsletter draft content
- Your brand voice profile for consistency
- Multiple title and subtitle combinations
- Copy-to-clipboard functionality for easy use

### 3. Content Ideas & Gap Analysis

Provides comprehensive content strategy insights:

- **Content Ideas**: Generated with categories, difficulty levels, and engagement estimates
- **Gap Analysis**: Identifies missing topics, formats, audience segments, content depth, and frequency issues
- **Priority Scoring**: Rates opportunities as low, medium, or high priority
- **Actionable Recommendations**: Specific steps to fill identified content gaps

### 4. Brand Voice Analyzer

Deep analysis of your newsletter to create a comprehensive brand profile:

- **Voice Tone**: Formal, casual, conversational, authoritative, etc.
- **Target Audience**: Demographics, interests, and pain points
- **Core Expertise**: Your main areas of knowledge and authority
- **Writing Style**: Sentence structure, vocabulary, and formatting preferences
- **Unique Angle**: What sets your perspective apart
- **Problems Solved**: Issues you help your audience address
- **Content Themes**: Recurring topics and message patterns
- **Engagement Style**: How you interact with and connect to your audience

## 🏗️ Current Implementation Status

### ✅ Fully Implemented Features

- **Substack Notes Generator**: Complete with 10 note types and brand voice integration
- **Title Generator**: Functional with brand voice analysis
- **Content Ideas & Gap Analysis**: Full implementation with categorization and priority scoring
- **Brand Voice Analyzer**: Complete analysis and profile creation system
- **Authentication System**: Google OAuth and email/password with Supabase
- **Subscription Management**: Stripe integration with monthly/yearly plans
- **Content Library**: Saves and manages analyzed articles
- **Responsive UI**: Modern gradient-based design

### 🚧 Mentioned but Not Implemented

- **Welcome Email Templates**: Listed in features but no implementation found
- **Welcome Page Setup**: Referenced but no dedicated component exists
- **Advanced Analytics Dashboard**: Menu item exists but functionality not implemented
- **Email List Integration**: ConvertKit/Mailchimp integration not present

## 🔐 Security Features

- **Row Level Security (RLS)** on all database tables
- **JWT-based authentication** with Supabase
- **Secure API endpoints** with proper authorization
- **Environment variable protection**
- **CORS configuration** for production domains
- **Stripe webhook signature verification**

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration and login flow
- [ ] Google OAuth authentication
- [ ] Protected route access (dashboard)
- [ ] AI tool functionality
- [ ] Subscription and payment processing
- [ ] Mobile responsiveness
- [ ] Brand voice analysis
- [ ] Content generation quality

### API Testing

```bash
# Test Supabase connection
curl -H "Authorization: Bearer YOUR_ANON_KEY" \
     "https://your-project.supabase.co/rest/v1/brand_profiles"

# Test Stripe webhook
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## 🐛 Troubleshooting

### Common Issues

**Authentication not working:**

- Verify Supabase Site URL matches your domain exactly
- Check Redirect URLs include `/auth/callback`
- Ensure environment variables are set correctly

**AI tools not responding:**

- Verify Anthropic API key is valid and has credits
- Check Firecrawl API rate limits
- Review Edge Function logs in Supabase

**Payment issues:**

- Confirm Stripe webhook endpoint is receiving events
- Verify webhook signature validation
- Check subscription status in Stripe dashboard

**CORS errors:**

- Add your domain to Supabase allowed origins
- Ensure no trailing slashes in URLs
- Check browser network tab for specific CORS issues

### Debug Mode

Enable debug logging by setting:

```env
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes with proper TypeScript types
4. Test thoroughly on both desktop and mobile
5. Commit changes: `git commit -am 'Add new feature'`
6. Push to branch: `git push origin feature/new-feature`
7. Submit a pull request

### Code Style Guidelines

- Use TypeScript for all new code
- Follow existing component structure patterns
- Use Tailwind CSS classes consistently
- Add proper error handling and loading states
- Include responsive design considerations

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built by **Wyndo** and **Joel Salinas** - newsletter creators who experienced the same challenges this tool solves.

## 🔗 Links

- **Live Demo**: [https://newsletter-coach.vercel.app](https://newsletter-coach.vercel.app)
- **Support**: [Create an issue](https://github.com/your-username/newsletter-coach/issues)
- **Documentation**: See README and inline code comments

## 📈 Roadmap

### Immediate (Next 30 days)

- [ ] Implement Welcome Email Templates (currently missing)
- [ ] Add Welcome Page Setup functionality (referenced but not built)
- [ ] Complete Analytics Dashboard (tab exists but no content)
- [ ] Settings page functionality (currently placeholder)

### Medium-term (Next 3 months)

- [ ] Email list integration (ConvertKit, Mailchimp)
- [ ] Content scheduling and automation
- [ ] Social media content generation
- [ ] Newsletter template library

### Long-term (6+ months)

- [ ] Advanced A/B testing tools
- [ ] Team collaboration features
- [ ] White-label solutions
- [ ] API for third-party integrations

## 💡 Key Features Summary

**Newsletter AI Studio** is a functional SaaS platform with 4 core AI-powered tools:

1. **Substack Notes Generator** - 10 different note types for audience growth
2. **Title Generator** - Compelling titles with subtitles for better engagement
3. **Content Ideas & Gap Analysis** - Strategic content planning with priority scoring
4. **Brand Voice Analyzer** - Comprehensive voice profile creation and consistency

**Pricing**: $20/month or $200/year (save $40) with 7-day free trial on yearly plans.

The app successfully integrates Anthropic Claude API, Firecrawl for content scraping, Supabase for backend, and Stripe for payments, providing a solid foundation for newsletter creators to enhance their content strategy with AI assistance.

---

**Made with ❤️ for newsletter creators worldwide**

**Ready to transform your newsletter strategy?** [Start your free trial today!](https://newsletter-coach.vercel.app)
