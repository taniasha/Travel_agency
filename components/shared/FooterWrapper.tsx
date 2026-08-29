"use client";

import { usePathname } from "next/navigation";
import LegalFooter from "@/components/shared/LegalFooter";
import PrimaryFooter from "@/components/shared/PrimaryFooter";

export default function FooterWrapper() {
  const pathname = usePathname();
  const hideFooter = pathname === "/aboutextra/how-it-all-works";

  if (hideFooter) return null;

  return (
    <>
      <PrimaryFooter />
      <LegalFooter />
    </>
  );
}
