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
  Target,
  Feather,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
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
  Target,
  Feather,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? ScanLine;
}
