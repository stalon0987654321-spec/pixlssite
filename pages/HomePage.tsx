
import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CaseCard from '../components/CaseCard';
import InfiniteMarquee from '../components/InfiniteMarquee';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import { NavProps } from '../types';

const HomePage: React.FC<NavProps> = ({ navigate }) => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
          We Build <br />
          <span className="text-gray-400">Digital</span> <br />
          Experiences
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="max-w-md text-lg text-gray-600 font-medium">
            Pixls is a digital agency helping brands thrive in the modern world through strategic design and cutting-edge development.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => navigate('work')}>View Work</Button>
            <Button variant="outline" onClick={() => navigate('contact')}>Get in Touch</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Marquee Section */}
    <InfiniteMarquee />

    {/* Selected Works */}
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading number="01" title="Selected Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <CaseCard 
            title="Fintech Healthy App" 
            category="App Development" 
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
            onClick={() => navigate('work')} 
          />
          <CaseCard 
            title="Pixoo E-commerce" 
            category="Web Design" 
            image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
            onClick={() => navigate('work')}
          />
          <CaseCard 
            title="World Clock" 
            category="Utility Tool" 
            image="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000" 
            onClick={() => navigate('work')}
          />
          <CaseCard 
            title="Crypto Exchange App" 
            category="Web3" 
            image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000" 
            onClick={() => navigate('work')}
          />
        </div>
        <div className="mt-16 text-center">
          <Button variant="outline" onClick={() => navigate('work')}>View All Projects</Button>
        </div>
      </div>
    </section>

    {/* About Teaser */}
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <SectionHeading number="02" title="Who We Are" />
        </div>
        <div className="md:w-1/2">
          <p className="text-2xl md:text-3xl font-bold leading-tight mb-8">
            We are a team of strategists, designers, and developers. We don't just build websites; we build business solutions that drive growth.
          </p>
          <ul className="space-y-4 mb-8">
            {['Digital Strategy', 'UI/UX Design', 'Web Development', 'Mobile Apps'].map((item) => (
              <li key={item} className="flex items-center text-gray-600 font-medium">
                <Check className="w-5 h-5 mr-3 text-black" /> {item}
              </li>
            ))}
          </ul>
          <Button variant="primary" onClick={() => navigate('about')}>More About Us</Button>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <ServicesSection />

    {/* FAQ Section */}
    <FAQSection />
  </div>
);

export default HomePage;
