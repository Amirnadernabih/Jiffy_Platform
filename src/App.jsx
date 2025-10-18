import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext.jsx';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;