export const CONTACT = {
  whatsapp: "917708704523",
  whatsappDisplay: "7708704523",
  instagram: "rathii__selva",
  email: "ratthikas29@gmail.com",
  sms: "+917708704523",
  phone: "+917397732494",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
