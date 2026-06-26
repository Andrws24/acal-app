export interface Service {
  title: string;
  description: string;
  features: readonly string[];
  icon: string;
  comingSoon?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
