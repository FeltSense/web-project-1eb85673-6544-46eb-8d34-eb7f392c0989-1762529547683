export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to showcase premium properties and deliver exceptional client experiences
      </p>
    </div>

    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Prestige Properties Platform</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-gray-600 ml-2">one-time payment</span>
          </div>
          <p className="text-gray-600">
            Complete luxury real estate platform with all premium features included
          </p>
        </div>

        <div className="p-8">
          <ul className="space-y-4 mb-8">
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Exclusive access to premium luxury property listings</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Expert agents with deep market knowledge and insights</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Personalized property matching service tailored to your needs</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Immersive virtual tours and property experiences</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Comprehensive neighborhood insights and market data</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>White-glove client service throughout the entire buying process</span>
            </li>
          </ul>

          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started - $29
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}