import React, { useState } from 'react';
import { Camera, Gamepad2, Watch, Calendar, Bot, Check } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [isHuman, setIsHuman] = useState(false);
  const [selectedCaptcha, setSelectedCaptcha] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleCaptcha = (type: string, correct: boolean) => {
    setSelectedCaptcha(type);
    setIsHuman(correct);
  };

  const handleSend = async () => {
    if (!isHuman) return;
    setIsSubmitting(true);

    try {
        // Submit to FormSubmit.co
        const response = await fetch("https://formsubmit.co/ajax/pixlswebpixlswebsoln@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.comment,
                services: selectedServices.join(', '),
                _subject: "New Project Inquiry from Pixls Website",
                _captcha: "false" 
            })
        });

        if (response.ok) {
            setIsSubmitted(true);
        }
    } catch (error) {
        console.error("Error sending quote:", error);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 animate-fadeIn font-sans relative">
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <p className="text-base text-gray-400 mb-4">Ask for a Quote</p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-12">What do you need?</h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-24">
           {/* Web Design */}
           <div 
             onClick={() => toggleService('web-design')}
             className={`border ${selectedServices.includes('web-design') ? 'border-white bg-[#1a1a1a]' : 'border-[#2a2a2a]'} 
             p-8 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-[200px] hover:border-white hover:bg-[#1a1a1a]`}
           >
              <svg className="w-14 h-14 mb-4 stroke-[#ccc] stroke-1 fill-none" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span className="text-[#ccc] text-lg">Web Design</span>
           </div>

           {/* Development */}
           <div 
             onClick={() => toggleService('development')}
             className={`border ${selectedServices.includes('development') ? 'border-white bg-[#1a1a1a]' : 'border-[#2a2a2a]'} 
             p-8 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-[200px] hover:border-white hover:bg-[#1a1a1a]`}
           >
              <svg className="w-14 h-14 mb-4 stroke-[#ccc] stroke-1 fill-none" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <polyline points="8 13 6 15 8 17"></polyline>
                <polyline points="16 13 18 15 16 17"></polyline>
              </svg>
              <span className="text-[#ccc] text-lg">Development</span>
           </div>

           {/* Mobile App */}
           <div 
             onClick={() => toggleService('mobile-app')}
             className={`border ${selectedServices.includes('mobile-app') ? 'border-white bg-[#1a1a1a]' : 'border-[#2a2a2a]'} 
             p-8 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-[200px] hover:border-white hover:bg-[#1a1a1a]`}
           >
              <svg className="w-14 h-14 mb-4 stroke-[#ccc] stroke-1 fill-none" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12" y2="18"></line>
              </svg>
              <span className="text-[#ccc] text-lg">Mobile App</span>
           </div>

           {/* AI Agents */}
           <div 
             onClick={() => toggleService('ai-agents')}
             className={`border ${selectedServices.includes('ai-agents') ? 'border-white bg-[#1a1a1a]' : 'border-[#2a2a2a]'} 
             p-8 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-[200px] hover:border-white hover:bg-[#1a1a1a]`}
           >
              <Bot className="w-14 h-14 mb-4 text-[#ccc] stroke-[1px]" />
              <span className="text-[#ccc] text-lg">AI Agents</span>
           </div>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">Tell us about you</h2>
            
            {!isSubmitted ? (
              <>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                   <div className="flex-1">
                     <input 
                       type="text" 
                       placeholder="Name" 
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                       className="w-full bg-transparent border-b border-[#2a2a2a] text-white py-4 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-500"
                     />
                   </div>
                   <div className="flex-1">
                     <input 
                       type="email" 
                       placeholder="Email" 
                       value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                       className="w-full bg-transparent border-b border-[#2a2a2a] text-white py-4 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-500"
                     />
                   </div>
                </div>
                
                <div className="mb-12">
                   <input 
                     type="text" 
                     placeholder="Comment (optional)" 
                     value={formData.comment}
                     onChange={(e) => setFormData({...formData, comment: e.target.value})}
                     className="w-full bg-transparent border-b border-[#2a2a2a] text-white py-4 text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-500"
                   />
                </div>

                {/* Captcha */}
                <div className="my-16 text-center">
                   <p className="text-lg mb-8 text-gray-300">Please prove you are a human by selecting the <span className="text-[#e74c3c] font-bold">gamepad</span>.</p>
                   <div className="flex justify-center gap-10">
                      <button onClick={() => handleCaptcha('camera', false)} className={`transition-opacity duration-300 focus:outline-none ${selectedCaptcha === 'camera' ? 'opacity-100 text-white' : 'opacity-40 hover:opacity-100 text-white'}`}>
                        <Camera size={32} />
                      </button>
                      <button onClick={() => handleCaptcha('watch', false)} className={`transition-opacity duration-300 focus:outline-none ${selectedCaptcha === 'watch' ? 'opacity-100 text-white' : 'opacity-40 hover:opacity-100 text-white'}`}>
                        <Watch size={32} />
                      </button>
                      <button onClick={() => handleCaptcha('gamepad', true)} className={`transition-opacity duration-300 focus:outline-none ${selectedCaptcha === 'gamepad' ? 'opacity-100 text-[#e74c3c]' : 'opacity-40 hover:opacity-100 text-white'}`}>
                        <Gamepad2 size={32} />
                      </button>
                   </div>
                </div>

                <div className="text-center flex flex-col items-center gap-6">
                  <button 
                    onClick={handleSend}
                    className={`py-4 px-20 text-lg font-medium transition-all duration-300 border-none ${isHuman ? 'bg-white text-black cursor-pointer hover:bg-gray-200' : 'bg-[#f2f2f2] text-[#999] cursor-not-allowed'}`}
                    disabled={!isHuman || isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                  
                  <div className="flex items-center gap-4 w-full justify-center">
                    <span className="h-px w-16 bg-gray-800"></span>
                    <span className="text-gray-500 text-sm font-semibold tracking-widest">OR</span>
                    <span className="h-px w-16 bg-gray-800"></span>
                  </div>

                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white border border-gray-700 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Book a meeting via Calendly</span>
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center py-20 animate-fadeIn">
                <Check className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 text-lg">Thanks for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => { setIsSubmitted(false); setIsHuman(false); setSelectedCaptcha(null); }}
                  className="mt-8 text-sm underline text-gray-500 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;