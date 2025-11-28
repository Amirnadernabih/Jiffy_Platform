import Header from '../../components/user/header/Header'; 
import Categories from '../../components/user/categories/Categories';
import Trending from '../../components/user/trending/Trending';
import New from '../../components/user/new/New';
import Country from '../../components/user/country/Country';
import { BlueLeftGlow, PurpleRightGlow } from '../../assets/reusable-svg/Svgs';

const Home = () => {
  return (
    <div style={{ overflowX: "hidden"}}>
      {/* Hide global layout glows on Home to prevent persistence during scroll */}
      <style>{`
        .blue-left-glow, .purple-right-glow { display: none !important; }
      `}</style>

      {/* Header + local glows constrained to initial viewport */}
      <div style={{ position: 'relative' }}>
        {/* Local glow layer visible only within header area */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'translate(-20%, -10%)',
              zIndex: -1,
              filter: 'blur(2px)',
              opacity: 0.7,
              height: '100%',
              animation: 'floatLeft 8s ease-in-out infinite'
            }}
          >
            <BlueLeftGlow />
          </div>

          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(20%, -10%)',
              zIndex: -1,
              filter: 'blur(2px)',
              opacity: 0.7,
              height: '100%',
              animation: 'floatRight 8s ease-in-out infinite'
            }}
          >
            <PurpleRightGlow />
          </div>

          <style>{`
            @keyframes floatLeft {
              0%, 100% { transform: translate(-20%, -10%); }
              25% { transform: translate(-18%, -8%); }
              50% { transform: translate(-22%, -6%); }
              75% { transform: translate(-24%, -12%); }
            }
            @keyframes floatRight {
              0%, 100% { transform: translate(20%, -10%); }
              25% { transform: translate(22%, -8%); }
              50% { transform: translate(18%, -6%); }
              75% { transform: translate(24%, -12%); }
            }
          `}</style>
        </div>

        {/* Header */}
        <Header />
      </div>
      
      {/* Rest of the sections */}
      <div style={{ background: '#fff' }}>
        <Categories />
        <Trending />
        <New />
        <Country />
      </div>
    </div>
  );
};

export default Home;
