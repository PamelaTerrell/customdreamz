import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Our Services
        </h1>
        <p className="mb-6 text-gray-400">
          At Custom Dreamz Motorsports, we provide a complete range of services to keep your bikes, ATVs, and vehicles running strong and looking incredible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Motorcycle, Dirt Bike, & ATV Service & Repair
            </h2>
            <p className="text-gray-100">
              Professional maintenance, diagnostics, and repairs for motorcycles, dirt bikes, ATVs, UTVs, side by sides, and more.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Custom Paint & Body Work
            </h2>
            <p className="text-gray-100">
              Complete paint services, body work, fiberglass repair, and stunning custom finishes to make your ride stand out.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Performance Upgrades
            </h2>
            <p className="text-gray-100">
              Engine enhancements, exhaust upgrades, tuning, and performance modifications for maximum power and reliability.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Sound Equipment Installation
            </h2>
            <p className="text-gray-100">
              Custom audio systems and high-quality sound equipment installations for motorcycles and other vehicles.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Tire Services
            </h2>
            <p className="text-gray-100">
              New tires, mounting, balancing, and repairs to keep you safe and riding smoothly.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Parts Sales
            </h2>
            <p className="text-gray-100">
              Sales of OEM and aftermarket parts and accessories for all major brands and models.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Request a Quote or Appointment
          </Link>
        </div>
      </div>
    </main>
  );
}
