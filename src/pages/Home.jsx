import { useState } from "react";
import { posts, categories } from "../data/posts";
 
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
 
  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);
 
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Category Filter Bar */}
      <div className="border-b border-white/10 px-8 md:px-16">
        <div className="flex gap-8 overflow-x-auto py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm whitespace-nowrap transition-colors cursor-pointer bg-transparent border-none ${
                activeCategory === cat
                  ? "text-white font-semibold"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
 
      {/* Hero Heading */}
      <div className="px-8 md:px-16 py-16 border-b border-white/10">
        <h1
          className="text-6xl md:text-8xl text-white leading-none italic"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          What a day
        </h1>
      </div>
 
      {/* Posts List */}
      <div>
        {filtered.map((post) => (
          <article
            key={post.id}
            className="flex items-center justify-between px-8 md:px-16 py-16 border-b border-white/10 group cursor-pointer hover:bg-white/[0.02] transition-colors"
          >
            <div className="max-w-lg pr-8">
              <h2
                className="text-3xl md:text-4xl text-white mb-4 italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.mood}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
 
            <div className="shrink-0">
              <div className="w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </article>
        ))}
 
        {filtered.length === 0 && (
          <div className="px-8 md:px-16 py-24 text-white/30 text-sm">
            No posts in this category yet.
          </div>
        )}
      </div>
    </main>
  );
}