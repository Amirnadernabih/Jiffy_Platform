import { Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout/UserLayout';
import Home from '../pages/user/Home';
import Contact from '../pages/user/ContactUs';
import Pricing from '../pages/user/Pricing';
import MapPage from '../pages/user/MapPage';
import ForBusiness from '../components/user/ForBusiness/ForBusiness';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import MainPage from '../pages/admin/MainPage';
import CustomerSignUp from '../pages/auth/CustomerSignUp';
import CustomerSignIn from '../pages/auth/CustomerSignIn';
import ProfessionalSignIn from '../pages/auth/ProfessionalSignIn';
import ProfessionalSignUp from '../pages/auth/ProfessionalSignUp';
import AuthSelection from '../pages/auth/AuthSelection';
import UnderConstruction from '../routes/UnderConstruction';
import ProtectedRoute from './ProtectedRoute';
import CalendarPage from '../pages/admin/CalendarPage';
import InvoicesPage from '../pages/admin/InvoicesPage';
import Chat from '../pages/admin/Chat';
import Inbox from '../pages/admin/Inbox';
import Clients from '../pages/admin/Clients';
import ServicesForCustomers from '../components/user/ServicesForCustomers/ServicesForCustomers';
import ServicesForBusinesses from '../components/user/ServicesForBusinesses/ServicesForBusinesses';
import ServiceCategory from '../pages/user/ServiceCategory';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to user home page */}
      <Route path="/" element={<Navigate to="/user" replace />} />
      
      {/* User pages with navbar/footer - NO AUTHENTICATION REQUIRED */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="Map" element={<MapPage />} />
        <Route path="ForBusiness" element={<ForBusiness />} />
        <Route path="services/customers" element={<ServicesForCustomers />} />
        <Route path="services/customers/:category" element={<ServiceCategory />} />
        <Route path="services/businesses" element={<ServicesForBusinesses />} />
      </Route>

      {/* Admin pages - ONLY accessible after login */}
      <Route path="/admin" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<MainPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="profile" element={<div>User Profile Page</div>} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="social" element={<div>Social Page</div>}/>
        <Route path="inbox" element={<Inbox />}/>
        <Route path="chat" element={<Chat />} />
        <Route path="chat/:id" element={<Chat />} />
      </Route>

      {/* Auth pages without layout */}
      <Route path="/auth" element={<AuthSelection />} />
      <Route path="/auth/customer/sign-up" element={<CustomerSignUp />} />
      <Route path="/auth/customer/sign-in" element={<CustomerSignIn />} />
      <Route path="/auth/professional/sign-in" element={<ProfessionalSignIn />} />
      <Route path="/auth/professional/sign-up" element={<ProfessionalSignUp />} />
      
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
};

export default AppRoutes;