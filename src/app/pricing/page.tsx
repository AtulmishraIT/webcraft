import React from 'react'

export default function pemplate() {
  return (
<section className="min-h-screen bg-gray-50 py-12 font-sans">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
        WebCraft Studio
      </h1>
      <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
        Crafting high-impact websites & web applications that grow businesses.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 mb-12">
      <div className="flex flex-col">
        <span className="text-sm uppercase font-medium text-indigo-600">Company</span>
        <span className="mt-1 font-semibold text-gray-800">WebCraft Studio</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm uppercase font-medium text-indigo-600">Location</span>
        <span className="mt-1 text-gray-800">
          Melvin Niwas,<br />
          Opp BK No.1618,<br />
          Near Bagade Decorators,<br />
          Ulhasnagar 421004
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm uppercase font-medium text-indigo-600">Contact</span>
        <span className="mt-1 text-gray-800">+91 7756054570</span>
        <span className="mt-1 text-gray-800">officialwebcraftstudio@gmail.com</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm uppercase font-medium text-indigo-600">Online</span>
        <a
          href="https://webcraft-atulmishra.vercel.app"
          className="mt-1 text-indigo-600 font-semibold hover:underline break-all"
          target="_blank"
          rel="noopener noreferrer"
          >webcraft-atulmishra.vercel.app</a
        >
      </div>
    </div>

    <div className="grid gap-8 lg:grid-cols-2 mb-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-500">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2zm0 4h16v2H4v-2z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Basic Static Website</h2>
            <p className="mt-1 text-gray-600">3–5 pages (Home, About, Contact, etc.). No backend. Ideal for personal or small businesses.</p>
          </div>
        </div>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-gray-900">₹5,000</span>
          <span className="text-xl font-semibold text-gray-600">– ₹20,000</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">(≈ $100 – $300)</div>
        <ul className="space-y-1 text-gray-700 list-disc list-inside">
          <li>3–5 pages</li>
          <li>No CMS or backend</li>
          <li>Responsive & fast</li>
          <li>Good for portfolios/basic presence</li>
        </ul>
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-500">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5h18v2H3V5zm0 4h14v2H3V9zm0 4h18v2H3v-2zm0 4h14v2H3v-2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Business Website (Dynamic)</h2>
            <p className="mt-1 text-gray-600">Pages + blog/CMS, contact forms, lead generation tools. Great for startups and professionals.</p>
          </div>
        </div>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-gray-900">₹15,000</span>
          <span className="text-xl font-semibold text-gray-600">– ₹50,000</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">(≈ $300 – $1,000)</div>
        <ul className="space-y-1 text-gray-700 list-disc list-inside">
          <li>CMS / admin panel</li>
          <li>Lead generation & forms</li>
          <li>Responsive & SEO-friendly</li>
        </ul>
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-500">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">E-commerce Website</h2>
            <p className="mt-1 text-gray-600">Product listings, cart, payment gateway, admin dashboard. Example stacks: custom React+Express, WooCommerce.</p>
          </div>
        </div>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-gray-900">₹30,000</span>
          <span className="text-xl font-semibold text-gray-600">– ₹1,50,000+</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">(≈ $500 – $3,000+)</div>
        <ul className="space-y-1 text-gray-700 list-disc list-inside">
          <li>Product catalog & cart</li>
          <li>Payment integration</li>
          <li>Order management dashboard</li>
        </ul>
      </div>

      
      <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-indigo-500">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Web App / SaaS Platform</h2>
            <p className="mt-1 text-gray-600">Custom dashboards, user login, real-time features. Tech stack: React, Next.js, Tailwind CSS. Examples: CRM, project management.</p>
          </div>
        </div>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-gray-900">₹50,000</span>
          <span className="text-xl font-semibold text-gray-600">– ₹5,00,000+</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">(≈ $1,000 – $10,000+)</div>
        <ul className="space-y-1 text-gray-700 list-disc list-inside">
          <li>Custom user systems</li>
          <li>Real-time/interactive features</li>
          <li>Scalable architecture</li>
        </ul>
      </div>
    </div>

    
    <div className="text-center mt-12 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
      <p className="text-gray-600 mb-4">
        Let’s build something great together. Transparent pricing, clean code, and real results.
      </p>
      <a
        href="https://webcraft-atulmishra.vercel.app"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:brightness-105 transition"
      >
        Start Your Project
        <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>

    
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Atul Mishra</span> – WebCraft Studio
        </p>
        <p className="text-sm text-gray-500 mt-1">Professional website development tailored to your goals.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 text-sm">
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:officialwebcraftstudio@gmail.com" className="text-indigo-600 hover:underline">
            officialwebcraftstudio@gmail.com
          </a>
        </div>
        <div>
          <span className="font-semibold">Phone:</span>{" "}
          <a href="tel:+917756054570" className="text-indigo-600 hover:underline">
            +91 7756054570
          </a>
        </div>
        <div>
          <span className="font-semibold">Website:</span>{" "}
          <a href="https://webcraft-atulmishra.vercel.app" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
            webcraft-atulmishra.vercel.app
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
