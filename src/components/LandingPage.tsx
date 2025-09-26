import React, { useState } from "react";
import {
  PenTool,
  TrendingUp,
  Zap,
  Mail,
  Shield,
  Users,
  Star,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Eye,
  Calendar,
  FileText,
  Target,
  RefreshCw,
  Activity,
  ArrowRight,
  User,
  Search,
  Loader,
  TrendingDown,
  Clock,
  Hash,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Link from "next/link";
import Image from "next/image";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ${
        isIntersecting ? "opacity-100 animate-fade-in" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

interface SubstackData {
  title: string;
  description: string;
  subscriberCount: number;
  recentPosts: Array<{
    title: string;
    publishedDate: string;
    excerpt: string;
  }>;
  publishFrequency: string;
  avgEngagement: number;
}

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroName, setHeroName] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [heroMessage, setHeroMessage] = useState("");
  const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);
  const [ctaName, setCtaName] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaMessage, setCtaMessage] = useState("");
  const [isCtaSubmitting, setIsCtaSubmitting] = useState(false);
  const [substackUrl, setSubstackUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewData, setPreviewData] = useState<SubstackData | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState("Title Generator");

  const painPoints = [
    {
      icon: <Lightbulb className="w-8 h-8 text-gold" />,
      title: "Struggling with Writer's Block?",
      description:
        "Our AI generates endless content ideas and analyzes content gaps, so you always have something to write about.",
      linkText: "Explore the Idea Generator",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Low Open Rates?",
      description:
        "Craft compelling, click-worthy titles and subtitles that grab your audience's attention and boost engagement.",
      linkText: "Try the Title Generator",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Slow Audience Growth?",
      description:
        "Generate engaging promotional content, like Substack Notes, to reach new readers and grow your subscriber base faster.",
      linkText: "See the Growth Tools",
    },
    {
      icon: <User className="w-8 h-8 text-green-500" />,
      title: "Losing Your Unique Voice?",
      description:
        "Our Brand Voice Analyzer ensures all AI-generated content sounds authentically like you, maintaining trust.",
      linkText: "Define Your Brand Voice",
    },
  ];

  const handleHeroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!heroName || !heroEmail) {
      setHeroMessage("Please fill out both name and email.");
      return;
    }
    setIsHeroSubmitting(true);
    setHeroMessage("Submitting...");

    // This is a placeholder for a real API call.
    // In a real application, you would send the data to your backend,
    // which would then securely forward it to the Typeform API.
    // Directly calling a third-party API from the client is not recommended for production.
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate a successful submission
    setIsHeroSubmitting(false);
    setHeroMessage("Thank you for subscribing!");
    setHeroName("");
    setHeroEmail("");

    // Reset the message after a few seconds
    setTimeout(() => {
      setHeroMessage("");
    }, 5000);
  };

  const handleCtaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ctaName || !ctaEmail) {
      setCtaMessage("Please fill out both name and email.");
      return;
    }
    setIsCtaSubmitting(true);
    setCtaMessage("Submitting...");

    // Placeholder for API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsCtaSubmitting(false);
    setCtaMessage("Thank you for subscribing!");
    setCtaName("");
    setCtaEmail("");

    setTimeout(() => {
      setCtaMessage("");
    }, 5000);
  };

  const analyzeSubstack = async () => {
    if (!substackUrl.trim()) return;

    setIsAnalyzing(true);
    setPreviewError(null);
    setPreviewData(null);

    try {
      // Normalize URL - add https if not present
      let normalizedUrl = substackUrl.trim();
      if (
        !normalizedUrl.startsWith("http://") &&
        !normalizedUrl.startsWith("https://")
      ) {
        normalizedUrl = "https://" + normalizedUrl;
      }

      // Extract domain for RSS feed
      const url = new URL(normalizedUrl);
      const rssUrl = `${url.protocol}//${url.hostname}/feed`;

      // Simulate RSS feed analysis (in real implementation, you'd use a CORS proxy or backend)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      // Mock data based on URL analysis
      const mockData: SubstackData = {
        title:
          url.hostname.split(".")[0].charAt(0).toUpperCase() +
          url.hostname.split(".")[0].slice(1) +
          "'s Newsletter",
        description:
          "Insights and analysis for modern creators and entrepreneurs",
        subscriberCount: Math.floor(Math.random() * 5000) + 1000,
        recentPosts: [
          {
            title: "The Future of Newsletter Marketing in 2024",
            publishedDate: "2024-01-15",
            excerpt:
              "Exploring the latest trends and strategies that are shaping how creators connect with their audience...",
          },
          {
            title: "Building Authentic Relationships with Your Subscribers",
            publishedDate: "2024-01-08",
            excerpt:
              "Why authenticity matters more than ever and how to cultivate genuine connections through your content...",
          },
          {
            title: "Monetization Strategies That Actually Work",
            publishedDate: "2024-01-01",
            excerpt:
              "A deep dive into proven methods for turning your newsletter into a sustainable revenue stream...",
          },
        ],
        publishFrequency: "Weekly",
        avgEngagement: Math.floor(Math.random() * 15) + 5,
      };

      setPreviewData(mockData);
    } catch (error) {
      setPreviewError(
        "Unable to analyze this Substack URL. Please check the URL and try again."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-gold" />,
      title: "Substack Notes",
      description:
        "Generate engaging Substack Notes to promote your newsletter and grow your audience",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Idea Generator",
      description:
        "AI-powered content ideas and gap analysis to keep your newsletter fresh and relevant",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Welcome Page Setup",
      description:
        "Create compelling welcome pages for new subscribers to maximize engagement",
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-600" />,
      title: "Title Generator",
      description:
        "Create compelling newsletter titles that drive opens and engagement",
    },
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Welcome Email Setup",
      description:
        "Generate personalized welcome email sequences to nurture new subscribers",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Newsletter Creator",
      content:
        "This platform transformed my newsletter strategy. My open rates increased by 40% in just two months!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Content Strategist",
      content:
        "The AI-powered tools save me hours every week. I can focus on creating great content instead of struggling with ideas.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      content:
        "Finally, a tool that understands newsletter creators. The welcome sequences alone are worth the subscription.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mail className="w-8 h-8 text-charcoal" />
              <span className="text-xl font-bold text-charcoal font-serif">
                Newsletter Compass
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8"></div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gold"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4"></div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight font-serif">
              The AI Co-Pilot for
              <span className="text-gold"> Newsletter Creators</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Generate compelling newsletters, optimize your content strategy,
              and grow your subscriber base 3x faster with AI that actually
              understands your brand voice and audience.
            </p>
            <form
              onSubmit={handleHeroSubmit}
              className="flex flex-col gap-4 max-w-lg mx-auto"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={heroName}
                onChange={(e) => setHeroName(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                disabled={isHeroSubmitting}
                className="bg-gold text-charcoal px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isHeroSubmitting ? "Submitting..." : "Get Started"}
              </button>
              {heroMessage && (
                <p className="text-sm text-center text-gray-600 mt-2">
                  {heroMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* App Screenshot Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedCard className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6">
            <div className="w-full h-auto bg-gray-50 rounded-lg p-2 sm:p-4 flex flex-col shadow-inner">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="col-span-1 opacity-60 hidden md:block">
                  <h3 className="font-semibold text-charcoal mb-4 text-sm sm:text-base">
                    Tools
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Title Generator",
                      "Idea Generator",
                      "Brand Voice",
                      "Social Notes",
                    ].map((tool) => (
                      <li
                        key={tool}
                        onClick={() => setActiveFeature(tool)}
                        className={`p-2 rounded cursor-pointer ${
                          activeFeature === tool
                            ? "bg-gray-200 text-charcoal font-semibold"
                            : ""
                        }`}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-md p-4 sm:p-6 border-2 border-gold">
                  {activeFeature === "Title Generator" && (
                    <div>
                      <h2 className="text-base sm:text-xl font-bold font-serif text-charcoal mb-4">
                        Title Generator
                      </h2>
                      <p className="text-gray-600 mb-4 text-xs sm:text-sm">
                        Your Topic:{" "}
                        <span className="font-semibold">
                          How to Monetize a Small Audience
                        </span>
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-md text-gray-800 text-xs sm:text-sm">
                          The Surprising Ways to Profit From a Niche Following
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-md text-gray-800 font-semibold text-xs sm:text-sm">
                          5 Untapped Revenue Streams for Small Creators
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md text-gray-800 text-xs sm:text-sm">
                          From Passion to Profit: A Guide for Small Audiences
                        </div>
                      </div>
                    </div>
                  )}
                  {activeFeature === "Idea Generator" && (
                    <div>
                      <h2 className="text-base sm:text-xl font-bold font-serif text-charcoal mb-4">
                        Idea Generator
                      </h2>
                      <p className="text-gray-600 mb-4 text-xs sm:text-sm">
                        Your Topic:{" "}
                        <span className="font-semibold">
                          Creator Economy Trends
                        </span>
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 rounded-md text-gray-800 font-semibold text-xs sm:text-sm">
                          The Rise of Micro-Communities for Creators
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md text-gray-800 text-xs sm:text-sm">
                          AI's Impact on Content Creation Workflows
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md text-gray-800 text-xs sm:text-sm">
                          Sustainable Monetization Beyond Ads
                        </div>
                      </div>
                    </div>
                  )}
                  {activeFeature === "Brand Voice" && (
                    <div>
                      <h2 className="text-base sm:text-xl font-bold font-serif text-charcoal mb-4">
                        Your Brand Voice
                      </h2>
                      <p className="text-gray-600 mb-4 text-xs sm:text-sm">
                        Our AI adapts to your unique writing style.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-800 rounded-full text-sm font-semibold">
                          Witty
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          In-depth
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          Authoritative
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                          Casual
                        </span>
                      </div>
                    </div>
                  )}
                  {activeFeature === "Social Notes" && (
                    <div>
                      <h2 className="text-base sm:text-xl font-bold font-serif text-charcoal mb-4">
                        Social Notes
                      </h2>
                      <p className="text-gray-600 mb-4 text-xs sm:text-sm">
                        Promote your latest newsletter with an engaging note.
                      </p>
                      <div className="p-4 bg-gray-50 rounded-md text-gray-800 text-xs sm:text-sm border border-gray-200">
                        <p className="font-semibold">
                          Just dropped my latest post: "5 Untapped Revenue
                          Streams for Small Creators" 🔥
                        </p>
                        <p className="mt-2">
                          If you've ever felt like your audience is "too small"
                          to monetize, this one's for you. I'm breaking down
                          strategies that work *right now*.
                        </p>
                        <p className="mt-2 text-yellow-800 font-semibold">
                          Read it here →
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">
              Stop Guessing, Start Growing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We solve the biggest challenges newsletter creators face every
              day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <AnimatedCard
                key={index}
                className={`
                  ${index % 2 !== 0 ? "md:translate-y-8" : ""}
                  ${index % 2 === 0 ? "bg-white/50" : "bg-gray-100/50"}
                  backdrop-blur-xl shadow-xl p-8 rounded-2xl border border-white/30 flex flex-col
                `}
              >
                <div className="flex-grow">
                  <div className="flex justify-center md:justify-start mb-4 text-gold">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3 text-left">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-left">
                    {point.description}
                  </p>
                </div>
                <a
                  href="#features"
                  className="font-semibold text-gold hover:opacity-80 transition-opacity flex items-center"
                >
                  <span>{point.linkText}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">
              Toolkits for every newsletter task
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered marketing tools designed specifically for newsletter
              creators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                className="bg-white/50 backdrop-blur-xl shadow-lg p-8 rounded-2xl border border-white/30"
              >
                <div className="mb-4 text-gold">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
            <AnimatedCard className="bg-gray-100/50 backdrop-blur-xl shadow-lg p-8 rounded-2xl border border-white/30">
              <div className="mb-4 text-gray-400">
                <Sparkles />
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
                More Features Coming Soon...
              </h3>
              <ul className="text-gray-500 leading-relaxed space-y-2">
                <li className="flex items-center">
                  <Search className="w-4 h-4 mr-2" /> Keyword Research
                </li>
                <li className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" /> Competitor Intelligence
                </li>
                <li className="flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" /> Performance Analytics
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Substack Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">
              See What We Can Do for Your Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Enter your Substack URL to get a preview of the insights and tools
              we'll provide
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={substackUrl}
                    onChange={(e) => setSubstackUrl(e.target.value)}
                    placeholder="yourname.substack.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-lg"
                    onKeyPress={(e) => e.key === "Enter" && analyzeSubstack()}
                  />
                </div>
                <button
                  onClick={analyzeSubstack}
                  disabled={isAnalyzing || !substackUrl.trim()}
                  className="bg-gold text-charcoal px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Analyze
                    </>
                  )}
                </button>
              </div>

              {previewError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-red-700">{previewError}</p>
                </div>
              )}
            </div>
          </div>

          {previewData && (
            <AnimatedCard className="bg-white/50 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-white/30">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-charcoal font-serif">
                    {previewData.title}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Analyzed
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{previewData.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Users className="h-6 w-6 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-800">
                        Estimated Subscribers
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900">
                      {previewData.subscriberCount.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">
                        Avg. Engagement
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-green-900">
                      {previewData.avgEngagement}%
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-6 w-6 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-purple-800">
                        Publish Frequency
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-purple-900">
                      {previewData.publishFrequency}
                    </div>
                  </div>
                </div>

                {/* Recent Posts Analysis */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Recent Posts Analysis
                  </h4>
                  <div className="space-y-4">
                    {previewData.recentPosts.map((post, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-charcoal flex-1">
                            {post.title}
                          </h5>
                          <span className="text-sm text-gray-500 ml-4">
                            {new Date(post.publishedDate).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{post.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Suggestions Preview */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-charcoal mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-gold" />
                    AI-Powered Suggestions (Preview)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-charcoal mb-2">
                        📝 Title Optimization
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Try adding numbers or urgency words to boost open rates
                        by 25%"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-charcoal mb-2">
                        💡 Content Ideas
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Based on your topics, consider covering 'AI tools for
                        creators'"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-charcoal mb-2">
                        📊 Growth Opportunities
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Your engagement is strong - time to focus on subscriber
                        acquisition"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h5 className="font-semibold text-charcoal mb-2">
                        ✉️ Welcome Sequence
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Optimize your welcome emails to increase long-term
                        retention"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  This is just a preview! Get the full analysis and AI-powered
                  tools with Newsletter Coach.
                </p>
                <a
                  href="#"
                  className="bg-gold text-charcoal px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center mx-auto"
                >
                  Start Your Free Trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </AnimatedCard>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">
              Loved by newsletter creators worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say about their success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={index}
                className="bg-white/50 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/30"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to transform your newsletter?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our mailing list to get tips and updates on how to grow your
            newsletter.
          </p>
          <form
            onSubmit={handleCtaSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={ctaName}
              onChange={(e) => setCtaName(e.target.value)}
              className="flex-grow px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={ctaEmail}
              onChange={(e) => setCtaEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              disabled={isCtaSubmitting}
              className="bg-gold text-charcoal px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isCtaSubmitting ? "Submitting..." : "Subscribe"}
            </button>
            {ctaMessage && (
              <p className="text-sm text-center text-gray-400 mt-2">
                {ctaMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4 font-serif">
              Meet the Creators
            </h2>
            <p className="text-xl text-gray-600">
              Built by newsletter creators, for newsletter creators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center flex flex-col">
              <div className="flex-grow">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/images/wyndo.jpg"
                    alt="Wyndo"
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Wyndo</h3>
                <p className="text-gray-600 mb-4">Co-Creator & Developer</p>
                <p className="text-gray-700 leading-relaxed">
                  Passionate about building tools that help creators succeed.
                  Wyndo brings technical expertise and a deep understanding of
                  what newsletter creators need to grow their audience.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="https://aimaker.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold text-charcoal px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Read Wyndo's Newsletter
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="text-center flex flex-col">
              <div className="flex-grow">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/images/joel.jpg"
                    alt="Joel Salinas"
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Joel Salinas
                </h3>
                <p className="text-gray-600 mb-4">Co-Creator & Strategy</p>
                <p className="text-gray-700 leading-relaxed">
                  Newsletter creator and growth strategist with years of
                  experience helping creators build engaged audiences. Joel
                  understands the challenges and opportunities in newsletter
                  marketing.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="https://leadershipinchange10.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold text-charcoal px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Read Joel's Newsletter
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-6 h-6 text-gold" />
                <span className="text-lg font-semibold font-serif">
                  Newsletter Compass
                </span>
              </div>
              <p className="text-gray-400">
                AI-powered tools for newsletter creators to grow their audience
                and engagement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Newsletter Compass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
