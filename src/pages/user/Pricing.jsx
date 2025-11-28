import { useState } from 'react';
import PricingHeader from '../../components/user/PricingHeader/PricingHeader';
import PricingComponent from '../../components/user/Pricing/Pricing';
import { BlueLeftGlow, PurpleRightGlow } from "../../assets/reusable-svg/Svgs";

function App() {
  const [plan, setPlan] = useState('monthly');

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      {/* Background layer spanning the page */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        {/* Left blue glow - behind navbar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(-20%, -10%)",
            zIndex: -1,
            pointerEvents: "none",
            filter: "blur(2px)",
            opacity: 0.7,
            height: "100vh",
            animation: "floatLeft 8s ease-in-out infinite",
          }}
        >
          <BlueLeftGlow />
        <style>{`
          @keyframes floatLeft {
            0%, 100% {
              transform: translate(-20%, -10%);
            }
            25% {
              transform: translate(-18%, -8%);
            }
            50% {
              transform: translate(-22%, -6%);
            }
            75% {
              transform: translate(-24%, -12%);
            }
          }
          
          @keyframes floatRight {
            0%, 100% {
              transform: translate(20%, -10%);
            }
            25% {
              transform: translate(22%, -8%);
            }
            50% {
              transform: translate(18%, -6%);
            }
            75% {
              transform: translate(24%, -12%);
            }
          }
        `}</style>
        </div>

        {/* Right purple glow - behind navbar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(20%, -10%)",
            zIndex: -1,
            pointerEvents: "none",
            filter: "blur(2px)",
            opacity: 0.7,
            height: "100vh",
            animation: "floatRight 10s ease-in-out infinite",
          }}
        >
          <PurpleRightGlow />
        </div>

        {/* Seamless blend overlay for navbar area */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "120px",
            zIndex: 0,
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(250, 250, 250, 0.2) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />


      </div>

      {/* Content above the glows */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <PricingHeader plan={plan} setPlan={setPlan} />
        <PricingComponent plan={plan} />
      </div>
    </div>
  );
}

export default App;
