import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Custom Dreamz Motorsports</h1>
        <p className="mb-6 text-gray-300">
          We’re here to help with all your performance, paint, and audio needs.  
          Reach out today to schedule service or ask a question.
        </p>

        <div className="space-y-4 bg-gray-900 rounded-lg p-6">
          <p>
            📍 <strong>Address:</strong> 3751 Peach Orchard Rd, Augusta, GA 30906
          </p>
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:7067732422" className="text-red-400 hover:underline">
              (706) 773-2422
            </a>
          </p>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:customdreamzmotorsports1@gmail.com"
              className="text-red-400 hover:underline"
            >
              customdreamzmotorsports1@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-6 bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
          <ul className="space-y-1">
            <li>
              <span className="inline-block w-28 font-medium">Monday - Friday:</span>
              9:30 AM – 4:40 PM
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

        <div className="mt-6 bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
          <p className="mb-2 text-gray-400">
            You can find us on Google Maps:
          </p>
          <a
            href="https://www.google.com/maps/place/3751+Peach+Orchard+Rd,+Augusta,+GA+30906"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline"
          >
            View on Google Maps
          </a>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-red-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
