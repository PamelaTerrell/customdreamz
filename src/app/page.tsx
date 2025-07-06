import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Image
        src="/cdm.png"
        alt="Custom Dreamz Motorsports logo"
        width={300}   // Change this to your preferred size
        height={300}
        priority
      />
      <h1 className="text-4xl font-bold mt-6">Custom Dreamz Motorsports</h1>
      <p className="mt-2 text-lg text-gray-300">Performance Upgrades • Custom Paint • Custom Audio</p>
    </main>
  );
}
