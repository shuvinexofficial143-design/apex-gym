import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  full?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  full = false,
}: ButtonProps) {
  const primary = variant === "primary";

  return (
    <Link
      href={href}
      style={{
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : undefined,
        justifyContent: "center",
        alignItems: "center",
        minHeight: size === "sm" ? 42 : 52,
        padding: size === "sm" ? "0 18px" : "0 24px",
        borderRadius: 14,
        border: primary ? "1px solid var(--accent)" : "1px solid var(--line)",
        background: primary ? "var(--accent)" : "#111",
        color: primary ? "#080808" : "#fff",
        fontWeight: 900,
        fontSize: 14,
        transition: "transform 180ms ease, opacity 180ms ease",
      }}
    >
      {children}
    </Link>
  );
}
