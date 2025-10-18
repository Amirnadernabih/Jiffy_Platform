import { useState } from 'react';

export const useFormData = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phoneNumber: '',
      company: '',
      address: ''
    },
    businessInfo: {
      businessName: '',
      businessEmail: '',
      registrationNumber: '',
      company: '',
      address: '',
      selectedServices: [],
      paymentInfo: {}
    },
    servicesBuilder: {},
    schedulingType: {}
  });

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const resetFormData = () => {
    setFormData({
      personalInfo: { fullName: '', email: '', phoneNumber: '', company: '', address: '' },
      businessInfo: { businessName: '', businessEmail: '', registrationNumber: '', company: '', address: '', selectedServices: [], paymentInfo: {} },
      servicesBuilder: {},
      schedulingType: {}
    });
  };

  return { formData, updateFormData, resetFormData };
};