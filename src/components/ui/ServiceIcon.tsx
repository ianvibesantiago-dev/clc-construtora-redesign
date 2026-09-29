import type { ServiceIcon as IconName } from "@/content/site";

// Ícones em SVG inline (traço), no lugar dos PNGs do site original.
const paths: Record<IconName, React.ReactNode> = {
  excavator: (
    <>
      <path d="M3 17h11v3H3z" />
      <circle cx="5.5" cy="20" r="1" />
      <circle cx="11.5" cy="20" r="1" />
      <path d="M5 17v-4h6l2 4M11 13l4-7 5 3-2 4h-3" />
    </>
  ),
  roller: (
    <>
      <circle cx="6" cy="17" r="3" />
      <rect x="13" y="14" width="8" height="6" rx="3" />
      <path d="M6 14V8h7v6M9 8V5h4" />
    </>
  ),
  cobble: (
    <>
      <rect x="3" y="4" width="7" height="4" rx="1" />
      <rect x="13" y="4" width="8" height="4" rx="1" />
      <rect x="3" y="11" width="10" height="4" rx="1" />
      <rect x="16" y="11" width="5" height="4" rx="1" />
      <rect x="3" y="18" width="6" height="3" rx="1" />
      <rect x="12" y="18" width="9" height="3" rx="1" />
    </>
  ),
  dam: (
    <>
      <path d="M3 20h18M6 20V6h4l3 14" />
      <path d="M14 11c1.5 1 3 1 4.5 0s3-1 3 0M14 15c1.5 1 3 1 4.5 0" />
    </>
  ),
  drain: (
    <>
      <path d="M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z" />
      <path d="M3 21h18M8 21v-2h8v2" />
    </>
  ),
  mixer: (
    <>
      <path d="M2 17h13v-5l4-2 3 3v4h-3" />
      <path d="M4 12l3-5h6l2 5" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
};

export function ServiceIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {paths[name]}
    </svg>
  );
}
