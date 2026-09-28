import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, strokeWidth = 1.8, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4.5 4.6 1.5 1.5 0 0 1 6 3z" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

export const RoofIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 11 12 4l9 7" />
    <path d="M5 10v9h14v-9" />
  </Icon>
);

export const RenovationIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.6" />
    <path d="M4 4v4.6h4.6" />
    <path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.4" />
    <path d="M20 20v-4.6h-4.6" />
  </Icon>
);

export const GutterIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 8h16" />
    <path d="M6 8v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    <path d="M12 14v6" />
  </Icon>
);

export const DropIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
  </Icon>
);

export const BrushIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M19 5 9 15" />
    <path d="M9 15l-5 4 1-6 4-4z" />
    <path d="M14 3l3 3" />
  </Icon>
);

export const FrameIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 20 12 4l9 16" />
    <path d="M7 20 12 11l5 9" />
    <path d="M5 16h14" />
  </Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </Icon>
);

export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);

export const StarIcon = ({ size = 15, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...p}
  >
    <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9" />
  </svg>
);
