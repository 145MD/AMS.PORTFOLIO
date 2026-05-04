import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-1.5 rounded-lg">
                <Image src="/logo-ams.png" alt="ClassPass Logo" width={24} height={24} className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">ClassPass</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern NFC-based attendance and fee management solution for educational institutes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/features#nfc" className="hover:text-primary transition-colors">NFC Technology</Link></li>
              <li><Link href="/features#attendance" className="hover:text-primary transition-colors">Attendance</Link></li>
              <li><Link href="/features#fees" className="hover:text-primary transition-colors">Fee Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="https://github.com/your-org/ams" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ClassPass. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Add social links here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
