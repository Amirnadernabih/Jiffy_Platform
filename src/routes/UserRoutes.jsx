import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout/UserLayout';
import Home from '../pages/user/Home';
import Contact from '../pages/user/ContactUs';
import Pricing from '../pages/user/Pricing';
import MapPage from '../pages/user/MapPage';
import ForBusiness from '../components/user/ForBusiness/ForBusiness';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="Map" element={<MapPage />} />
        <Route path="ForBusiness" element={<ForBusiness />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;