import React from 'react';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  isMobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  isMobile = false,
}) => {
  const baseStyles = "font-normal transition-colors duration-200";
  const desktopStyles = "text-white/80 text-md hover:text-white drop-shadow-xs";
  const mobileStyles = "block w-full py-2.5 px-4 text-base text-slate-200 hover:bg-white/10 hover:text-white rounded-lg";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </a>
  );
};