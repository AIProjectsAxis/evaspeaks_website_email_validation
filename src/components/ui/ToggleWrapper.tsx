import React from 'react';
import { toggleConfig } from '../../config/toggleConfig';
import MaintenanceCard from './MaintenanceCard';

interface ToggleWrapperProps {
  type: 'section' | 'page';
  name: string;
  children: React.ReactNode;
}

const ToggleWrapper: React.FC<ToggleWrapperProps> = ({ type, name, children }) => {
  // Get the configuration for this specific item
  const config = toggleConfig[type === 'section' ? 'sections' : 'pages'][name];
  
  // If no config found, default to enabled
  if (!config) {
    console.warn(`No toggle configuration found for ${type}: ${name}`);
    return <>{children}</>;
  }

  // If enabled, render children unchanged
  if (config.enabled) {
    return <>{children}</>;
  }

  // If disabled, show maintenance card
  return <MaintenanceCard message={config.message} type={type} />;
};

export default ToggleWrapper;