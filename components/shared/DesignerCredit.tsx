import Image from "next/image";

export function DesignerCredit() {
  return (
    <a href="https://kiwitechlabs.com" target="_blank" rel="noopener noreferrer" className="kiwitech-credit">
            <Image src="/assets/brand/kiwitechlabs-logo.webp" width={40} height={40} alt="" unoptimized />
            <span>Designed by <strong>kiwitechlabs.com</strong></span>
          </a>
  );
}
