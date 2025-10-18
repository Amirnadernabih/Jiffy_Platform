import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import MainPage from '../pages/admin/MainPage';
import CalendarPage from '../pages/admin/CalendarPage';
import InvoicesPage from '../pages/admin/InvoicesPage';
import Chat from '../pages/admin/Chat';
import Inbox from '../pages/admin/Inbox';
import Clients from '../pages/admin/Clients';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<MainPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        {/* Add other routes as needed */}
        <Route path="profile" element={<div>Profile Page</div>} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="social" element={<div>Social Page</div>}/>
        <Route path="inbox" element={<Inbox />}/>
        <Route path="chat" element={<Chat />} />
        <Route path="chat/:id" element={<Chat />} />
        
      </Route>
    </Routes>
  );
};

export default AdminRoutes;