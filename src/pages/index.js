import { Link } from "react-router-dom";
 
const features = [
  {
    icon: "⚡",
    title: "Fast by Default",
    desc: "Powered by Vite for near-instant dev startup and optimized production builds.",
  },
  {
    icon: "🎨",
    title: "Beautiful UI",
    desc: "Tailwind CSS + DaisyUI give you polished components with zero friction.",
  },
  {
    icon: "🗺️",
    title: "Routing Ready",
    desc: "React Router v7 handles all your navigation — just add new pages and routes.",
  },
];
 
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center max-w-2xl">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to <span className="text-primary">MyApp</span>
            </h1>
            <p className="mt-4 text-lg text-base-content/70">
              A clean React + Vite + Tailwind + DaisyUI starter. Delete what you
              don't need and build something great.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/about" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <a
                href="https://daisyui.com/components/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-lg"
              >
                UI Docs ↗
              </a>
            </div>
          </div>
        </div>
      </section>
 
      {/* Feature Cards */}
      <section className="py-20 px-6 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">What's included</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">{f.icon}</div>
                <h3 className="card-title">{f.title}</h3>
                <p className="text-base-content/70 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* CTA Banner */}
      <section className="w-full bg-primary text-primary-content py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
        <p className="mb-6 opacity-80">Open your editor and start replacing this placeholder content.</p>
        <Link to="/about" className="btn btn-neutral btn-lg">
          Learn More
        </Link>
      </section>
 
      {/* Footer */}
      <footer className="footer footer-center p-6 text-base-content/50 text-sm w-full bg-base-200 mt-auto">
        <p>© {new Date().getFullYear()} MyApp — Built with React, Vite & DaisyUI</p>
      </footer>
    </main>
  );
}