const clean = (value?: string) => value?.trim() || "";

export const siteConfig = {
  name: "APEX GYM",
  siteUrl: clean(process.env.NEXT_PUBLIC_SITE_URL) || "https://apex-gym-mu.vercel.app",
  phone: clean(process.env.NEXT_PUBLIC_CONTACT_PHONE),
  email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  whatsapp: clean(process.env.NEXT_PUBLIC_CONTACT_WHATSAPP),
  address: clean(process.env.NEXT_PUBLIC_GYM_ADDRESS),
  hours: clean(process.env.NEXT_PUBLIC_GYM_HOURS),
};

export function getWhatsAppHref(message = "Hi APEX GYM, I want to know more about membership and a free trial.") {
  const digits = siteConfig.whatsapp.replace(/\D/g, "");
  if (!digits) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
