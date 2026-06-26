import { BLOG_CATEGORIES } from "@/lib/constants";

export function BlogCategories() {
  return (
    <div className="flex flex-wrap gap-2">
      {BLOG_CATEGORIES.map((category) => (
        <span
          key={category}
          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
