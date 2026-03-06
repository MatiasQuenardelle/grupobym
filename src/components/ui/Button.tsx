import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-400 text-white hover:bg-primary-500 focus:ring-primary-400",
  secondary:
    "bg-secondary-700 text-white hover:bg-secondary-800 focus:ring-secondary-700",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20BD5A] focus:ring-[#25D366]",
  outline:
    "bg-transparent border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white focus:ring-primary-400",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  href?: never;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
};

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  as = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === "a") {
    const { ...linkProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
