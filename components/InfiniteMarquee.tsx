import React from 'react';

const InfiniteMarquee: React.FC = () => {
  const AndroidIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-2 relative -top-1">
      <path d="M16.609 13.913c.896 0 1.623-.746 1.623-1.666 0-.92-.727-1.666-1.623-1.666-.897 0-1.623.746-1.623 1.666 0 .92.727 1.666 1.623 1.666zm-9.215 0c.896 0 1.623-.746 1.623-1.666 0-.92-.727-1.666-1.623-1.666-.896 0-1.623.746-1.623 1.666 0 .92.727 1.666 1.623 1.666zm.609-8.498L6.469 2.583a.62.62 0 0 0-.083-.341.603.603 0 0 0-.258-.23.633.633 0 0 0-.34-.078.618.618 0 0 0-.324.167L3.43 4.135C1.29 5.394 0 7.854 0 10.518h24c0-2.664-1.29-5.124-3.43-6.383L18.536 2.1a.616.616 0 0 0-.822.067.62.62 0 0 0-.083.341l-1.534 2.832c-2.315-1.12-4.962-1.12-7.277 0zM0 11.833h24v7.333c0 2.292-1.808 4.167-4.008 4.167H4.008A4.095 4.095 0 0 1 0 19.166v-7.333z" />
    </svg>
  );

  const AppleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-2 relative -top-1">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.55-.83.96-1.98.81-3.12-1.11.05-2.45.74-3.25 1.68-.67.78-1.26 2.05-1.07 3.16 1.22.09 2.46-.86 3.51-1.72z" />
    </svg>
  );

  const items = [
    "Development", 
    "Design", 
    "Web Apps", 
    <span key="apps" className="inline-flex items-center h-full align-middle">
      Applications (<AndroidIcon /><span className="mx-1">&</span><AppleIcon />)
    </span>, 
    "GEO", 
    "SEO"
  ];

  return (
    <div className="w-full bg-black text-white py-6 overflow-hidden whitespace-nowrap border-y border-gray-800">
      <div className="inline-block animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-4xl font-bold uppercase mx-8 tracking-tighter inline-flex items-center align-middle h-full">
            {item} <span className="text-gray-600 mx-4 text-4xl">•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        } 
        .animate-marquee { 
          animation: marquee 20s linear infinite; 
        }
      `}</style>
    </div>
  );
};

export default InfiniteMarquee;