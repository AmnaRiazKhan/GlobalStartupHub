import { useState } from "react";

type VisaTabType = 'talent' | 'investment' | 'business' | 'permanent';

export function useVisaTabs(defaultTab: VisaTabType = 'talent') {
  const [activeTab, setActiveTab] = useState<VisaTabType>(defaultTab);
  
  const tabLabels = [
    { id: 'talent', label: 'Talent-Based Visas' },
    { id: 'investment', label: 'Investment-Based Visas' },
    { id: 'business', label: 'Business Expansion Visas' },
    { id: 'permanent', label: 'Permanent Residency' },
  ];
  
  return {
    activeTab,
    setActiveTab,
    tabLabels,
    isActive: (tabId: VisaTabType) => activeTab === tabId
  };
}
