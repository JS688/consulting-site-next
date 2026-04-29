import Image from "next/image";

type BrandLogoProps = {
  size?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

const sizeClasses = {
  header: "h-9 md:h-10",
  footer: "h-[68px] sm:h-[82px]",
} as const;

const imageClasses = {
  header: "brand-logo-image h-full w-auto object-contain",
  footer: "brand-logo-image h-full w-auto object-contain",
} as const;

export default function BrandLogo({ size = "header", priority = false, className = "" }: BrandLogoProps) {
  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center`.trim()}>
      <Image
        src="/logotip.png"
        alt="JulTech AI Consulting logo"
        width={380}
        height={140}
        priority={priority}
        sizes={size === "header" ? "(min-width: 1024px) 200px, (min-width: 640px) 170px, 140px" : "(min-width: 640px) 260px, 210px"}
        className={imageClasses[size]}
      />
    </div>
  );
}