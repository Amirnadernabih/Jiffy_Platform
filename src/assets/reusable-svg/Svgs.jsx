// Floating wrapper for animation
const FloatingWrapper = ({ children, direction = "up" }) => {
  return (
    <div
      style={{
        animation: direction === "up" ? "floatUp 6s ease-in-out infinite" : "floatDown 6s ease-in-out infinite",
      }}
    >
      {children}
    </div>
  );
};

// Blue glow (bottom one – floats upward then down again)
export const BlueLeftGlow = () => (
  <FloatingWrapper direction="up">
    <svg xmlns="http://www.w3.org/2000/svg" width="822" height="827" viewBox="0 0 822 827" fill="none">
      <g filter="url(#filter0_f_843_55749)">
        <path
          d="M621.5 413.5C818.5 519 558.823 780 360 780C161.177 780 0 634.493 0 455C0 275.507 161.177 130 360 130C558.823 130 621.5 234.007 621.5 413.5Z"
          fill="#01C7FF"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter id="filter0_f_843_55749" x="-130" y="0" width="951.712" height="910" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_843_55749"/>
        </filter>
      </defs>
    </svg>
  </FloatingWrapper>
);

// Purple glow (top one – floats downward then up again)
export const PurpleRightGlow = () => (
  <FloatingWrapper direction="down">
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="888" viewBox="0 0 1024 888" fill="none">
      <g filter="url(#filter0_f_843_55750)">
        <path
          d="M944 353C944 532.493 782.823 678 584 678C385.177 678 210 560.993 210 381.5C210 202.007 385.177 28 584 28C782.823 28 944 173.507 944 353Z"
          fill="#0B31FB"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter id="filter0_f_843_55750" x="0" y="-182" width="1154" height="1070" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="105" result="effect1_foregroundBlur_843_55750"/>
        </filter>
      </defs>
    </svg>
  </FloatingWrapper>
);
          <style>
            {`
                @keyframes floatUp {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-30px); }
            }
            
            @keyframes floatDown {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(30px); }
            }
           ` }
          
          </style>