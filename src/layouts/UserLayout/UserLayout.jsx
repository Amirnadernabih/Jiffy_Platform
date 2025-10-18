import Footer from '../../components/user/footer/Footer';
import Navbar from '../../components/user/navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { BlueLeftGlow, PurpleRightGlow } from "../../assets/reusable-svg/Svgs";
import './UserLayout.css';

const UserLayout = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === '/user/pricing';

  return (
    <>
      {/* Background SVGs positioned behind navbar and header */}
      <div className="user-layout-container">
        <div className="blue-left-glow">
          <BlueLeftGlow />
        </div>

        <div className="purple-right-glow">
          <PurpleRightGlow />
        </div>



        {isPricingPage ? (
          // Special layout for pricing page with background for navbar + header
          <>
            <div className="pricing-content-layer">
                <div className="user-navbar-wrapper">
                  <Navbar className="UserLayout-nav"/>
                </div>
                <main className="user-main">
                  <Outlet />
                </main>
              </div>
          </>
        ) : (
          // Normal layout for other pages
          <>
            <div className="user-navbar-wrapper">
              <Navbar className="UserLayout-nav"/>
            </div>
            <main className="user-main">
              <Outlet />
            </main>
          </>
        )}
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UserLayout;