import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./Toast.module.scss";

interface ToastProps {
  message: string;
  duration?: number;
  variant: "success" | "danger";
}

const icons = {
  success: "/icons/check.webp",
  danger: "/icons/error.webp",
};

export default function Toast({ message, variant }: ToastProps) {
  return createPortal(
    <div
      className={`display-flex align-center px-20 py-20 surface-background neutral-border-medium border-solid border-1 radius-l shadow-md z-50 ${styles.toast}`}
    >
      <Image src={icons[variant]} alt={variant} width={24} height={24} className="mr-16" />
      <span>{message}</span>
    </div>,
    document.body
  );
}