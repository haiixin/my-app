export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Hi! My name is Haixin, and a fun fact about me is that I can drive.
      </p>
      <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Hire Me!
      </button>
      <img src="/next.svg" alt="Next.js Logo" className="h-16 mt-6" />
    </main>
  );
}