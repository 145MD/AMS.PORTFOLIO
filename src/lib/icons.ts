import {
  ScanLine,
  Wallet,
  ReceiptText,
  MessageSquareText,
  GraduationCap,
  Building2,
  CreditCard,
  ShieldCheck,
  User,
  Globe,
  BarChart3,
  LayoutDashboard,
  Users,
  Lock,
  type LucideIcon,
} from "lucide-react";

/** Maps the string icon names stored in content.ts to lucide components. */
export const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  Wallet,
  ReceiptText,
  MessageSquareText,
  GraduationCap,
  Building2,
  CreditCard,
  ShieldCheck,
  User,
  Globe,
  BarChart3,
  LayoutDashboard,
  Users,
  Lock,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? ScanLine;
}
