
import React from 'react';

const InfiniteMarquee: React.FC = () => {
  const AndroidIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mx-2 relative -top-0.5">
      <path d="M17.523 15.3414C18.2365 15.3414 18.8143 14.7636 18.8143 14.0501C18.8143 13.3366 18.2365 12.7588 17.523 12.7588C16.8095 12.7588 16.2317 13.3366 16.2317 14.0501C16.2317 14.7636 16.8095 15.3414 17.523 15.3414Z" />
      <path d="M6.47703 15.3414C7.19053 15.3414 7.76834 14.7636 7.76834 14.0501C7.76834 13.3366 7.19053 12.7588 6.47703 12.7588C5.76353 12.7588 5.18572 13.3366 5.18572 14.0501C5.18572 14.7636 5.76353 15.3414 6.47703 15.3414Z" />
      <path d="M22 13.5932V19.4068C22 20.839 20.839 22 19.4068 22H4.59322C3.16102 22 2 20.839 2 19.4068V13.5932C2 13.3931 2.16102 13.2321 2.36111 13.2321H21.6389C21.839 13.2321 22 13.3931 22 13.5932Z" />
      <path d="M15.4261 1.77778L17.1518 4.76615C17.2608 4.9548 17.196 5.19632 17.0073 5.30528C16.8186 5.41424 16.5772 5.34947 16.4682 5.16082L14.7425 2.17245C13.8821 2.68426 12.9157 2.94444 11.9167 2.94444C10.9176 2.94444 9.95123 2.68426 9.09081 2.17245L7.36511 5.16082C7.25615 5.34947 7.0147 5.41424 6.82605 5.30528C6.63739 5.19632 6.57255 4.9548 6.68151 4.76615L8.40722 1.77778C5.5539 3.25057 3.63048 6.13628 3.51179 9.53704H20.3216C20.2029 6.13628 18.2794 3.25057 15.4261 1.77778Z" />
    </svg>
  );

  const AppleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mx-2 relative -top-1">
      <path d="M17.05 20.28c-.96.95-2.22 1.78-3.3 1.77-1.12-.02-1.89-.73-3.23-.73-1.35 0-2.2.73-3.26.75-1.07.02-2.31-.82-3.27-1.78C2 18.25 1 15.39 1 12.5c0-4.63 3-7.1 5.92-7.1 1.54 0 3 .95 3.93.95.93 0 2.76-1.15 4.61-1.15 1.95 0 3.4.72 4.41 2.2-2.38 1.4-2 4.67.43 5.82-1.05 2.54-2.33 4.88-3.25 6.06zM13.25 1c0 2.21-1.8 3.53-3.03 4-1.23.47-3 .47-3 .47s0-1.77.47-3C8.16 1.24 9.48 0 11.69 0c.52 0 1.56 1 1.56 1z" />
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
