import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className={cn(
          "h-full group cursor-pointer",
          featured && "md:col-span-2 md:grid md:grid-cols-2"
        )}
      >
        <div
          className={cn(
            "aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-t-2xl flex items-center justify-center",
            featured && "md:rounded-l-2xl md:rounded-tr-none"
          )}
        >
          <div className="text-4xl">📄</div>
        </div>
        <CardContent>
          <div className="flex items-center gap-3 mb-3">
            <Badge>{post.category}</Badge>
            <span className="text-xs text-text/40 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.publishedAt}
            </span>
          </div>
          <h3
            className={cn(
              "font-semibold text-text group-hover:text-primary transition-colors mb-2",
              featured ? "text-xl" : "text-base"
            )}
          >
            {post.title}
          </h3>
          <p className="text-sm text-text/60 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-4 text-xs text-text/40">
            <Clock className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
