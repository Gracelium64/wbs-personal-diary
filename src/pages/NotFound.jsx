import { Link } from "react-router-dom";
 
export default function NotFound() {
  return (
    <main className="hero min-h-[80vh]">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-8xl font-black text-primary">404</h1>
          <p className="text-2xl font-semibold mt-2">Page not found</p>
          <p className="text-base-content/60 mt-3">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn btn-primary mt-8">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
 