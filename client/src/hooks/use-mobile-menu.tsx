import { useState, useEffect } from "react";

export function useMobileMenu(): [boolean, (value: boolean) => void] {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when the window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Close the mobile menu when user clicks outside of it
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return [isOpen, setIsOpen];
}
