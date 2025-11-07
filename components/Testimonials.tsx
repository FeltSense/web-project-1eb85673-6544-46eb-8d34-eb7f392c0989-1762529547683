export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Trusted by Discerning Clients
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Hear from clients who've experienced our commitment to excellence in luxury real estate
      </p>
    </div>
  </div>

  <div className="relative">
    <div className="flex animate-scroll">
      <div className="flex gap-6 pr-6">
        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "The team at Prestige Properties helped us find our dream waterfront estate. Their market knowledge and negotiation skills saved us over $200,000 on the purchase price. Truly exceptional service from start to finish."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              MR
            </div>
            <div>
              <div className="font-semibold text-slate-900">Michael Richardson</div>
              <div className="text-sm text-slate-600">CEO, Richardson Capital</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "After working with three other agencies, Prestige Properties sold our penthouse in just 18 days at 7% above asking price. Their marketing strategy and exclusive buyer network are unmatched in the luxury market."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              SC
            </div>
            <div>
              <div className="font-semibold text-slate-900">Sarah Chen</div>
              <div className="text-sm text-slate-600">Founder, Chen Ventures</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "Relocating from London, we needed someone who understood international buyers. Prestige Properties handled everything—from property tours to legal coordination. We closed on our $4.2M estate seamlessly while still overseas."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              JW
            </div>
            <div>
              <div className="font-semibold text-slate-900">James Wellington</div>
              <div className="text-sm text-slate-600">Managing Director, Wellington & Associates</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "We've built our investment portfolio to 12 luxury properties working exclusively with Prestige. Their off-market access and due diligence process have consistently delivered properties that appreciate 15-20% annually."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              DM
            </div>
            <div>
              <div className="font-semibold text-slate-900">Diana Martinez</div>
              <div className="text-sm text-slate-600">Principal, Martinez Property Group</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 pr-6">
        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "The team at Prestige Properties helped us find our dream waterfront estate. Their market knowledge and negotiation skills saved us over $200,000 on the purchase price. Truly exceptional service from start to finish."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              MR
            </div>
            <div>
              <div className="font-semibold text-slate-900">Michael Richardson</div>
              <div className="text-sm text-slate-600">CEO, Richardson Capital</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "After working with three other agencies, Prestige Properties sold our penthouse in just 18 days at 7% above asking price. Their marketing strategy and exclusive buyer network are unmatched in the luxury market."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              SC
            </div>
            <div>
              <div className="font-semibold text-slate-900">Sarah Chen</div>
              <div className="text-sm text-slate-600">Founder, Chen Ventures</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "Relocating from London, we needed someone who understood international buyers. Prestige Properties handled everything—from property tours to legal coordination. We closed on our $4.2M estate seamlessly while still overseas."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              JW
            </div>
            <div>
              <div className="font-semibold text-slate-900">James Wellington</div>
              <div className="text-sm text-slate-600">Managing Director, Wellington & Associates</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200 w-[400px] flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "We've built our investment portfolio to 12 luxury properties working exclusively with Prestige. Their off-market access and due diligence process have consistently delivered properties that appreciate 15-20% annually."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              DM
            </div>
            <div>
              <div className="font-semibold text-slate-900">Diana Martinez</div>
              <div className="text-sm text-slate-600">Principal, Martinez Property Group</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 40s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
  );
}