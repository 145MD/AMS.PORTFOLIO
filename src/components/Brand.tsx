import Image from "next/image";
import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="ClassPass home">
      <span className="brand-pulse flex size-13 items-center justify-center rounded-full bg-white p-1 shadow-[0_10px_30px_rgba(29,138,244,.28)]">
        <Image
          src="/logo-ams-wbg.png"
          alt="ClassPass logo"
          width={40}
          height={40}
          priority
          className="h-full w-full object-contain rounded-full"
        />
      </span>
      <span className={`text-[15px] font-black tracking-[-.04em] ${inverse ? "text-white" : "text-[#031530]"}`}>
        CLASS<span className="text-[#1D8AF4]">PASS</span>
      </span>
    </Link>
  );
}
