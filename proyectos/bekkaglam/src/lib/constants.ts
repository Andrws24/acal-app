export const BEKKAGLAM = {
  name: "Bekkaglam",
  slogan: "La tienda fav de las girls",
  tagline: "Tú eres tu mayor inversión. Sé linda y luce linda.",
  description:
    "Tienda online de ropa femenina en Cartagena, Colombia. Swimwear, outfits, sets deportivos y accesorios.",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573245634876",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573245634876",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573245634876"}`,
  instagram: "@bekkaglam",
  instagramUrl: "https://instagram.com/bekkaglam",
  location: "Cartagena, Colombia",
  email: "bekkaglam@email.com",
};

export const CATEGORIES = [
  { name: "Swimwear", slug: "swimwear" },
  { name: "Sets & Dresses", slug: "sets-dresses" },
  { name: "Sportwear", slug: "sportwear" },
  { name: "Tops", slug: "tops" },
  { name: "Accesorios", slug: "accesorios" },
];
