import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center text-4xl font-bold">My Links</h1>
        <p className="text-center text-lg">
          A collection of links that I find useful.
        </p>
      </div>
    </main>
  );
}
