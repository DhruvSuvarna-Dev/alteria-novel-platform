import Image from 'next/image';
import { Check } from 'lucide-react';

export default function BuyPage() {
  const benefits = [
    "Instant access to all current chapters",
    "Future chapters added automatically",
    "Distraction-free custom reader",
    "Exclusive lore and character artwork unlocks",
    "Support the author directly"
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 font-bold">Unlock the Full Story</h1>
          <p className="text-slate-600 text-lg font-medium">Join thousands of readers and step into the world of Alteria.</p>
        </div>

        <div className="glass-card bg-white p-2 md:p-4 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <div className="flex flex-col md:flex-row bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
            {/* Left Image Side */}
            <div className="w-full md:w-2/5 relative min-h-[400px] md:min-h-full">
              <Image 
                src="/book_cover.jpg" 
                alt="Alteria Book Cover" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-forest-400 font-bold uppercase tracking-widest text-xs mb-2">Book I</span>
                <h3 className="text-white font-serif text-3xl mb-1">ALTERIA</h3>
                <p className="text-slate-300 text-sm">Full Digital Edition</p>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-slate-900 mb-2 font-bold">Premium Access</h2>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-forest-600">₹299</span>
                  <span className="text-slate-500 mb-1 font-medium">one-time purchase</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                    <div className="mt-1 bg-forest-100 p-1 rounded-full text-forest-600 flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-forest-600 text-white rounded-xl hover:bg-forest-700 transition-colors font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Proceed to Checkout
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-6 font-medium">
                Secure payment powered by Stripe. Instant access upon purchase.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
