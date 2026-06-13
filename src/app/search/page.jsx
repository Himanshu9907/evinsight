import Navbar from "../components/Navbar";

export default function SearchPage() {
  return (
    <>
    <Navbar />
    <main className="bg-black text-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-8">
          Search Articles
        </h1>

        <input
          type="text"
          placeholder="Search EV articles..."
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4"
        />
      </div>
    </main>
    </>
  );
}