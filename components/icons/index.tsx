type IconProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11L12 4l9 7v9a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1v-9z" />
    </svg>
  );
  
export const ProjectsIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h10v8H4zM10 14h10v6H10zM14 4h6v6h-6z" />
    </svg>
  );
  
export const UserIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  );
  
export const MailIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v12H3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 7 9-7" />
    </svg>
  );
  
export const MenuIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
  
export const CloseIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 8m0-8l-8 8" />
    </svg>
  );
  
export const ExperienceIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10l3 4v14H4V7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4M8 13h8M8 17h8" />
    </svg>
  );
  
export const ToolsIcon = ({ className, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 7a4 4 0 0 1 0 8l6 6-2 2-6-6a4 4 0 1 1 2-10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 8l3 3" />
    </svg>
  );