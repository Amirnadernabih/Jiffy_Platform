export const FINANCIAL_LEGAL_ICON = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="24" height="24" rx="4" fill="#6366F1"/>
    <path d="M16 16L24 16M16 20L24 20M16 24L20 24" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L16 8L20 12" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HEALTHCARE_ICON = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" fill="#06B6D4"/>
    <path d="M20 12V28M12 20H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const BEAUTY_SPA_ICON = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L26 18H14L20 6Z" fill="#8B5CF6"/>
    <circle cx="20" cy="26" r="10" fill="#8B5CF6"/>
    <circle cx="20" cy="26" r="5" fill="white"/>
    <circle cx="18" cy="24" r="1" fill="#8B5CF6"/>
    <circle cx="22" cy="24" r="1" fill="#8B5CF6"/>
  </svg>
);

export const EDUCATION_ICON = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16L20 8L34 16L20 24L6 16Z" fill="#6366F1"/>
    <path d="M10 18V28C10 28 15 32 20 32C25 32 30 28 30 28V18" stroke="#6366F1" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="18" r="2" fill="#6366F1"/>
  </svg>
);

export const MAINTENANCE_ICON = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" fill="#64748B"/>
    <path d="M15 15L25 25M25 15L15 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="4" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

export const PETCARE_ICON = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="26" rx="10" ry="8" fill="#F59E0B"/>
    <circle cx="15" cy="14" r="4" fill="#F59E0B"/>
    <circle cx="25" cy="14" r="4" fill="#F59E0B"/>
    <circle cx="10" cy="20" r="3" fill="#F59E0B"/>
    <circle cx="30" cy="20" r="3" fill="#F59E0B"/>
  </svg>
);

export const SERVICE_CATEGORIES = [
  {
    id: 'financial-legal',
    name: 'Financial & Legal',
    icon: FINANCIAL_LEGAL_ICON,
    color: '#6366F1'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HEALTHCARE_ICON,
    color: '#06B6D4'
  },
  {
    id: 'beauty-spa',
    name: 'Beauty & Spa',
    icon: BEAUTY_SPA_ICON,
    color: '#8B5CF6'
  },
  {
    id: 'education',
    name: 'Education',
    icon: EDUCATION_ICON,
    color: '#6366F1'
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    icon: MAINTENANCE_ICON,
    color: '#64748B'
  },
  {
    id: 'petcare',
    name: 'Petcare',
    icon: PETCARE_ICON,
    color: '#F59E0B'
  }
];