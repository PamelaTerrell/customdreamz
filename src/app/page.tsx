import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12">
        <Image
          src="/cdm.png"
          alt="Custom Dreamz Motorsports logo"
          width={320}
          height={320}
          priority
        />
        <h1 className="text-4xl font-bold mt-6">Custom Dreamz Motorsports</h1>
        <p className="mt-2 text-lg text-gray-300">
          Performance Upgrades • Custom Paint • Custom Audio
        </p>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-900 text-white px-6 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">
          📍 <strong>Address:</strong> 3751 Peach Orchard Rd, Augusta, GA 30906
        </p>
        <p className="mb-2">
          📞 <strong>Phone:</strong>{" "}
          <a href="tel:7067732422" className="text-red-400 hover:underline">
            (706) 773-2422
          </a>
        </p>
        <p className="mb-6">
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:customdreamzmotorsports1@gmail.com"
            className="text-red-400 hover:underline"
          >
            customdreamzmotorsports1@gmail.com
          </a>
        </p>

        {/* Business Hours */}
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
          <ul className="text-left space-y-1">
            <li>
              <span className="inline-block w-28 font-medium">Monday - Friday:</span>
              9:30 AM – 4:30 PM
            </li>
            <li>
              <span className="inline-block w-28 font-medium">Saturday:</span>
              By Appointment
            </li>
            <li>
              <span className="inline-block w-28 font-medium">Sunday:</span>
              Closed
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
