
import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavProps } from '../types';

const WorkPage: React.FC<NavProps> = ({ navigate }) => {
  const [filter, setFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  
  // Work (Case Study) Content Database
  const workDetail: Record<string, any> = {
    'fintech-healthy-app': {
        title: "HealthDOC: A Fintech App That Connects Money to Health",
        category: "App Development",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-black mb-8 text-black">Project Overview</h2>
                <p class="text-xl leading-relaxed text-gray-700">HealthDOC is a mobile-first fintech app designed to help users make smarter financial decisions by connecting their spending to their health and wellbeing. Instead of just tracking expenses, the app categorises purchases based on health impact, encouraging users to spend more mindfully while building better lifestyle habits.</p>
                <p class="text-xl leading-relaxed text-gray-700 mt-4">Built for health-conscious individuals who want their money to reflect their values, HealthDOC sits at the intersection of personal finance and wellness. It's not about restriction—it's about awareness and positive reinforcement.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">The Challenge</h2>
                    <p class="text-lg leading-relaxed text-gray-700">Most budgeting apps treat money in isolation. They tell you how much you've spent, but not whether those choices align with your health goals. Users often struggle to connect their daily spending patterns with long-term wellbeing, leading to poor financial and lifestyle habits that compound over time.</p>
                    <p class="text-lg leading-relaxed text-gray-700 mt-4">The client wanted a tool that would go beyond simple expense tracking. They needed a solution that would motivate users to make healthier choices without feeling preachy or overwhelming.</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">Our Solution</h2>
                    <p class="text-lg leading-relaxed text-gray-700">We built HealthDOC as a mobile-first React application with a soft, pastel-themed interface designed to feel calm and inviting. The core innovation lies in how expenses are categorised: every transaction is tagged as Healthy (gym, fresh produce), Unhealthy (takeaways), or Neutral.</p>
                    <p class="text-lg leading-relaxed text-gray-700 mt-4">This categorisation isn't about judgement. It's about visibility. Users can see, at a glance, where their money goes and how those choices impact their overall health picture.</p>
                </div>
            </div>

            <div class="mb-20">
                <h2 class="text-3xl font-black mb-8 text-black">Key Features</h2>
                <div class="grid sm:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">AI Budget Doctor</h3>
                        <p class="text-gray-600">Personalised guidance powered by Google Gemini that analyses spending habits and offers actionable advice.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Health Scoring</h3>
                        <p class="text-gray-600">Automatic categorisation of transactions into health impact scores to visualize lifestyle choices.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Rewards Programme</h3>
                        <p class="text-gray-600">Users earn points for healthy financial decisions, redeemable for real-world wellness perks.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Medicine Wallet</h3>
                        <p class="text-gray-600">A dedicated section to track pharmacy spending, manage prescriptions, and set refill reminders.</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 pt-16">
                <h2 class="text-3xl font-black mb-8 text-black">Results & Impact</h2>
                <p class="text-xl leading-relaxed text-gray-700 mb-6">HealthDOC successfully bridges the gap between finance and wellbeing. The AI-powered guidance creates a more engaging experience than static budgeting tools, and the rewards system provides tangible motivation.</p>
                <p class="text-xl leading-relaxed text-gray-700">This solution positions the client at the forefront of a growing trend: people want tools that help them live better, not just manage their money. HealthDOC delivers on that promise with a thoughtful, user-friendly approach.</p>
            </div>
        `
    },
    'pixoo-e-commerce': {
        title: "PIXOO Case Study: Redefining Luxury Fashion E-Commerce",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-black mb-8 text-black">Project Overview</h2>
                <p class="text-xl leading-relaxed text-gray-700">PIXOO is a premium fashion e-commerce platform designed to bring high-end luxury shopping online with the polish and attention to detail you'd expect from a flagship boutique. Built for fashion-forward customers who appreciate quality, aesthetics, and a seamless browsing experience, PIXOO bridges the gap between editorial storytelling and functional online retail.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">The Challenge</h2>
                    <p class="text-lg leading-relaxed text-gray-700">Traditional e-commerce platforms often feel generic and transactional. In luxury fashion, brand identity and emotional connection matter just as much as the product itself. The challenge was creating an online shopping experience that felt exclusive, visually striking, and performance-driven without sacrificing usability or loading speed.</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">Our Solution</h2>
                    <p class="text-lg leading-relaxed text-gray-700">We built PIXOO from the ground up using React and TypeScript, prioritising clean architecture. The design leans into dark minimalism with geometric shapes and subtle animations. We created a custom hero slider with snap physics and unique arch-shaped product frames to give the site a distinct personality.</p>
                </div>
            </div>

            <div class="mb-20">
                <h2 class="text-3xl font-black mb-8 text-black">Key Features</h2>
                <div class="grid sm:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Custom Hero Slider</h3>
                        <p class="text-gray-600">Snap-scroll physics with unique frames for a tactile, premium feel.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Glass-Morphism Navbar</h3>
                        <p class="text-gray-600">A navigation bar that adapts dynamically on scroll, keeping the UI light.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Interactive Cards</h3>
                        <p class="text-gray-600">Smooth hover zooms, quick-view modals, and elegant gradient text treatments.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Geometric Design</h3>
                        <p class="text-gray-600">A flexible system supporting arch, pill, and rectangular cropping styles.</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 pt-16">
                <h2 class="text-3xl font-black mb-8 text-black">Results & Impact</h2>
                <p class="text-xl leading-relaxed text-gray-700 mb-6">PIXOO demonstrates how technical execution and design thinking can elevate an e-commerce experience. The platform loads quickly, performs smoothly across devices, and creates a browsing experience that feels intentional rather than algorithmic.</p>
                <p class="text-xl leading-relaxed text-gray-700">PIXOO proves that e-commerce doesn't have to feel transactional. By combining editorial storytelling with functional design, we created a platform that positions luxury fashion as an experience, not just a product category.</p>
            </div>
        `
    },
    'world-clock': {
        title: "ChronoWorld Case Study: Reimagining Global Time Management",
        category: "Utility Tool",
        image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000",
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-black mb-8 text-black">Project Overview</h2>
                <p class="text-xl leading-relaxed text-gray-700">ChronoWorld is a web-based timezone dashboard designed for remote teams, global professionals, and anyone juggling connections across multiple time zones. Rather than simply displaying clocks, ChronoWorld creates an intelligent layer on top of time data, showing context, routines, and optimal meeting windows at a glance.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">The Challenge</h2>
                    <p class="text-lg leading-relaxed text-gray-700">Managing time zones is surprisingly painful. Knowing it's 3pm in Berlin doesn't tell you much unless you also know what that means for someone's workday. Traditional world clocks strip away this human element, leaving users to guess about availability, leading to scheduling friction and errors.</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">Our Solution</h2>
                    <p class="text-lg leading-relaxed text-gray-700">We approached ChronoWorld as a contextual dashboard. The hero clock adapts visually to the selected city, showing not just the time but what that time means: morning routine, working hours, leisure time, or sleep. The interface uses glassmorphism and dynamic theming that shifts based on the local time of the viewed city.</p>
                </div>
            </div>

            <div class="mb-20">
                <h2 class="text-3xl font-black mb-8 text-black">Key Features</h2>
                <div class="grid sm:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Contextual Status</h3>
                        <p class="text-gray-600">Indicators showing routines like "Morning", "Working Hours", or "Sleeping" alongside raw time.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Smart Meeting Planner</h3>
                        <p class="text-gray-600">Automated availability scoring that helps users find the best overlap time across zones.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Dynamic Theming</h3>
                        <p class="text-gray-600">City cards automatically adapt their visual theme based on the local day/night cycle.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Interactive World Map</h3>
                        <p class="text-gray-600">A D3.js visualization highlighting active cities with pulsing beacons for spatial context.</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 pt-16">
                <h2 class="text-3xl font-black mb-8 text-black">Results & Impact</h2>
                <p class="text-xl leading-relaxed text-gray-700 mb-6">ChronoWorld eliminates guesswork from global coordination. The contextual status system speeds up decision-making and reduces the awkwardness of messaging colleagues at inappropriate times.</p>
                <p class="text-xl leading-relaxed text-gray-700">Visually, the glassmorphism UI sets ChronoWorld apart from sterile alternatives. Users report that the "Smart Meeting Planner" significantly reduces the time spent coordinating schedules across borders.</p>
            </div>
        `
    },
    'crypto-exchange-app': {
        title: "Nova Crypto Wallet Case Study: Premium Mobile Trading Reimagined",
        category: "Web3",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000",
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-black mb-8 text-black">Project Overview</h2>
                <p class="text-xl leading-relaxed text-gray-700">Nova is a mobile-first cryptocurrency wallet and trading platform designed to bring institutional-grade functionality into a consumer-friendly interface. Built for both active traders and casual holders, Nova combines portfolio management, real-time market data, and secure transactions in a single, cohesive experience.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">The Challenge</h2>
                    <p class="text-lg leading-relaxed text-gray-700">Most crypto wallets are either too basic (just storage) or too complex (desktop charts crammed onto mobile). The mobile experience is often cluttered and intimidating. There was also a trust problem; users needed a platform that looked secure, professional, and established, not like a fly-by-night operation.</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">Our Solution</h2>
                    <p class="text-lg leading-relaxed text-gray-700">We designed Nova around a mobile-first philosophy. The home dashboard acts as mission control, providing a privacy-first view of balances and quick actions. We utilized <strong>Recharts</strong> to build interactive, performant market charts that work smoothly on touchscreens without lag.</p>
                </div>
            </div>

            <div class="mb-20">
                <h2 class="text-3xl font-black mb-8 text-black">Key Features</h2>
                <div class="grid sm:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Privacy-First Dashboard</h3>
                        <p class="text-gray-600">Toggle to hide sensitive balance information when in public spaces.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Real-Time Data</h3>
                        <p class="text-gray-600">Live price updates, 24h volume, and daily highs streamed instantly.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Interactive Charts</h3>
                        <p class="text-gray-600">Multiple timeframe options with an order book visualization for deeper analysis.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Glassmorphic UI</h3>
                        <p class="text-gray-600">A modern dark mode aesthetic using backdrop blur for depth and clarity.</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 pt-16">
                <h2 class="text-3xl font-black mb-8 text-black">Results & Impact</h2>
                <p class="text-xl leading-relaxed text-gray-700 mb-6">Nova demonstrates that mobile crypto interfaces can be both simple and powerful. The modular design serves beginners with clear entry points while giving pros immediate access to data.</p>
                <p class="text-xl leading-relaxed text-gray-700">The "professional" visual identity has built significant user trust. From a technical perspective, the React component architecture allows for easy addition of features like staking or NFT support in the future.</p>
            </div>
        `
    },
    'saas-website': {
        title: "Pixls Web Solution Case Study: Building a Digital Identity That Performs",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-black mb-8 text-black">Project Overview</h2>
                <p class="text-xl leading-relaxed text-gray-700">Pixls Web Solution is a digital development company specialising in modern web and mobile solutions. The company website serves as both a portfolio and a statement of capability. It's built to demonstrate technical excellence while communicating the brand's positioning as a forward-thinking agency.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">The Challenge</h2>
                    <p class="text-lg leading-relaxed text-gray-700">Agency websites need to balance impressiveness with clarity. The site needed to appeal to both startups (fast, modern) and enterprises (reliable, technical). It had to load instantly while showcasing advanced animations to prove the agency's engineering capability.</p>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">Technical Architecture</h2>
                    <p class="text-lg leading-relaxed text-gray-700">Built on <strong>React 19</strong>, the site uses <strong>GSAP</strong> for complex scroll sequencing and <strong>Three.js</strong> for interactive WebGL effects. We employed a hybrid styling approach using Tailwind CSS for layout utility and styled-components for dynamic component behavior.</p>
                </div>
            </div>

            <div class="mb-20">
                <h2 class="text-3xl font-black mb-8 text-black">Key Features</h2>
                <div class="grid sm:grid-cols-2 gap-8">
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">WebGL Lightning</h3>
                        <p class="text-gray-600">Interactive background creating depth and movement on the homepage.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">GSAP Scroll Animations</h3>
                        <p class="text-gray-600">Cinematic content reveals synced with Lenis smooth scrolling.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Custom Typography</h3>
                        <p class="text-gray-600">BlurText and SplitText components for dynamic, engaging headline reveals.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">3D Tilt Cards</h3>
                        <p class="text-gray-600">Service cards that respond to mouse movement with perspective transforms.</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 pt-16">
                <h2 class="text-3xl font-black mb-8 text-black">Results & Impact</h2>
                <p class="text-xl leading-relaxed text-gray-700 mb-6">The website successfully positions Pixls as a high-end technical partner. The interactive components serve as live demonstrations of capability, answering "Can they build this?" without needing to say a word.</p>
                <p class="text-xl leading-relaxed text-gray-700">Performance metrics are excellent, with Lighthouse scores consistently hitting 90+ despite the heavy use of visuals. This proves that visual impact doesn't have to come at the cost of speed.</p>
            </div>
        `
    },
    'offline-first-aid-apps': {
        title: "Offline First Aid Coach",
        category: "Health & Wellness",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000",
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-black mb-8 text-black">Project Overview</h2>
                <p class="text-xl leading-relaxed text-gray-700">A modern, offline-first progressive web application (PWA) designed to provide immediate, clear, and accessible first aid instructions during emergencies. This app prioritizes speed, clarity, and accessibility, ensuring users can access life-saving information even without an internet connection.</p>
            </div>

            <div class="mb-20">
                <h2 class="text-3xl font-black mb-8 text-black">Key Features</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">100% Offline Capable</h3>
                        <p class="text-gray-600">All content and logic are bundled locally, ensuring it works perfectly in remote areas with no network.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Emergency Mode</h3>
                        <p class="text-gray-600">Triple-tap activation triggers a high-contrast UI with only essential life-saving steps.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Smart Guides</h3>
                        <p class="text-gray-600">Step-by-step protocols for CPR, bleeding, burns, etc., with critical alerts highlighted in red.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Voice Guidance</h3>
                        <p class="text-gray-600">Text-to-speech reads instructions aloud so the rescuer can keep their eyes on the patient.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Child Mode</h3>
                        <p class="text-gray-600">A dedicated toggle that instantly adjusts protocols for infants and children.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 class="font-bold text-xl mb-3">Quick Tools</h3>
                        <p class="text-gray-600">One-tap access to emergency numbers (112, 104) and instant injury search.</p>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">Tech Stack</h2>
                    <ul class="space-y-3 text-lg text-gray-700">
                        <li>• <strong>Framework:</strong> React 19</li>
                        <li>• <strong>Styling:</strong> Tailwind CSS (Dark Mode default)</li>
                        <li>• <strong>PWA:</strong> Service Workers for offline caching</li>
                        <li>• <strong>Build:</strong> Vite</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-6 text-black border-l-4 border-black pl-4">User Experience</h2>
                    <p class="text-lg leading-relaxed text-gray-700">The app is designed with a "Dark Mode" first approach to save battery life and reduce eye strain. It features large, legible typography and uses haptic feedback (vibration) for critical interactions like the Emergency Button to provide physical confirmation.</p>
                </div>
            </div>
        `
    }
  };

  const projects = [
    { 
      id: 'fintech-healthy-app',
      title: "Fintech Healthy App", 
      category: "App Development", 
      type: "App", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", 
      year: "2024" 
    },
    { 
      id: 'pixoo-e-commerce',
      title: "Pixoo E-commerce", 
      category: "Web Design", 
      type: "Web", 
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000", 
      year: "2024" 
    },
    { 
      id: 'world-clock',
      title: "World Clock", 
      category: "Utility Tool", 
      type: "App", 
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000", 
      year: "2023" 
    },
    { 
      id: 'crypto-exchange-app',
      title: "Crypto Exchange App", 
      category: "Web3", 
      type: "App", 
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000", 
      year: "2023" 
    },
    { 
      id: 'saas-website',
      title: "SAAS Website", 
      category: "Web Design", 
      type: "Web", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000", 
      year: "2023" 
    },
    { 
      id: 'offline-first-aid-apps',
      title: "Offline First Aid apps", 
      category: "Health & Wellness", 
      type: "App", 
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000", 
      year: "2022" 
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  if (selectedCase) {
    const caseData = workDetail[selectedCase];
    return (
        <div className="font-sans antialiased min-h-screen pt-32 md:pt-40 pb-12 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto bg-white text-black animate-fadeIn">
            <header className="mb-12 border-b border-gray-200 pb-6 flex justify-between items-center max-w-4xl mx-auto">
                <button onClick={() => { setSelectedCase(null); window.scrollTo(0,0); }} className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors cursor-pointer focus:outline-none">
                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm uppercase tracking-widest font-bold">Back to Selected Works</span>
                </button>
            </header>
            
            <article className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">{caseData.category}</span>
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-8">{caseData.title}</h1>
                    <div className="w-full aspect-[16/9] overflow-hidden mb-12 bg-gray-100">
                        <img src={caseData.image} alt={caseData.title} className="w-full h-full object-cover" />
                    </div>
                    <div 
                        className="prose prose-lg max-w-none text-gray-700 prose-headings:font-bold prose-headings:text-black prose-p:mb-6 prose-p:leading-relaxed prose-li:mb-2"
                        dangerouslySetInnerHTML={{ __html: caseData.content }} 
                    />
                </div>
            </article>

            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200 text-center pb-24">
                 <button onClick={() => { setSelectedCase(null); window.scrollTo(0,0); }} className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:opacity-80 transition-opacity focus:outline-none">
                    View More Projects
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="animate-fadeIn pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter">Selected Works</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
            We partner with forward-thinking companies to design and build digital products that people love to use.
          </p>
          
          <div className="flex gap-2 flex-wrap">
            {['All', 'Web', 'App'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 border ${
                  filter === f 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map((project) => (
            <div key={project.id} onClick={() => { setSelectedCase(project.id); window.scrollTo(0,0); }} className="group cursor-pointer">
               <div className="w-full aspect-[4/3] overflow-hidden mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
               </div>
               <div className="flex justify-between items-start border-t border-gray-200 pt-6 group-hover:border-black transition-colors">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                    <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <span>{project.category}</span>
                      <span className="text-gray-300">•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
