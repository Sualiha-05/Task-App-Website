import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Users,
  DollarSign,
  Facebook,
  Twitter,
  Instagram,
  Menu,
} from "lucide-react";

// Reusable animation
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-2xl font-bold text-rose-600">TaskFlow</h1>
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#home" className="hover:text-rose-600">
              Home
            </a>
            <a href="#features" className="hover:text-rose-600">
              Features
            </a>
            <a href="#testimonials" className="hover:text-rose-600">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-rose-600">
              Pricing
            </a>
            <a href="#faq" className="hover:text-rose-600">
              FAQ
            </a>
          </div>
          <button className="bg-rose-500 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-rose-600">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="pt-28 md:pt-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Organize <span className="text-rose-600">Your Work</span>
            <br /> Smarter and Faster with TaskFlow
          </h1>
          <p className="text-gray-600 mb-8">
            A smarter, faster way to stay on top of tasks. Stay organized, boost
            productivity, and reduce stress. Perfect for you and your entire
            team. Achieve more with less effort, every single day.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow">
              Explore More
            </button>

            <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-rose-600">
              <span>▶</span> Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 text-gray-700">
            <div>
              <p className="text-xl font-bold">64+</p>
              <p className="text-sm">Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold">24M+</p>
              <p className="text-sm">Per Year Users</p>
            </div>
            <div>
              <p className="text-xl font-bold">03k+</p>
              <p className="text-sm">Experiences</p>
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex gap-4">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.n_knUAIqKUrRXf4SWJ8VegHaEJ?pid=Api&P=0&h=220"
            alt="Travel 1"
            className="w-40 h-60 object-cover rounded-3xl shadow-lg"
          />
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.iOO3_XBZ3rNY62h3dJFfDgHaLH?pid=Api&P=0&h=220"
            alt="Travel 2"
            className="w-44 h-72 object-cover rounded-3xl shadow-lg"
          />
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.SaT6I4oUVhSvwl78DQHoEQHaFj?pid=Api&P=0&h=220"
            alt="Travel 3"
            className="w-40 h-60 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-12">
      Features
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Smart Task Management",
          desc: "Organize, prioritize and manage your tasks easily.",
        },
        {
          title: "Team Collaboration",
          desc: "Share progress and stay in sync with your team.",
        },
        {
          title: "Analytics Dashboard",
          desc: "Track productivity with real-time analytics.",
        },
        {
          title: "Custom Workflows",
          desc: "Create workflows tailored to your project needs.",
        },
        {
          title: "Cross-Platform Access",
          desc: "Stay connected on desktop, tablet, and mobile devices.",
        },
        {
          title: "Secure Data Storage",
          desc: "Your data is encrypted and safely stored in the cloud.",
        },
      ].map((f, i) => (
        <motion.div
          key={i}
          className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <h3 className="text-xl font-bold mb-3 text-gray-800">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials */}
<section id="testimonials" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-12">
      What Our Users Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Alice",
          feedback: "TaskFlow boosted our team's productivity by 40%! The intuitive design makes collaboration effortless, and tracking progress has never been easier. It’s truly a game-changer for our daily workflow.",
        },
        {
          name: "Mark",
          feedback: "Managing projects has never been this smooth. TaskFlow keeps everything organized in one place, from tasks to deadlines. Our team finally feels aligned and less stressed.",
        },
        {
          name: "Sophie",
          feedback: "Simple, intuitive, and powerful. Highly recommended! The clean design makes it easy for anyone to get started quickly. It saves me hours every week and keeps my workflow stress-free.",
        },
      ].map((t, i) => (
        <motion.div
          key={i}
          className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          {/* Golden Stars */}
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, starIndex) => (
              <svg
                key={starIndex}
                xmlns="http://www.w3.org/2000/svg"
                fill="gold"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="goldenrod"
                className="w-5 h-5 mx-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.12 4.292a.563.563 0 00.424.307l4.74.689a.563.563 0 01.312.96l-3.43 3.34a.563.563 0 00-.162.498l.81 4.723a.563.563 0 01-.817.592l-4.24-2.23a.563.563 0 00-.524 0l-4.24 2.23a.563.563 0 01-.818-.592l.81-4.723a.563.563 0 00-.162-.498l-3.43-3.34a.563.563 0 01.312-.96l4.74-.689a.563.563 0 00.424-.307l2.12-4.292z"
                />
              </svg>
            ))}
          </div>

          {/* Feedback */}
          <p className="italic text-gray-700 mb-4">“{t.feedback}”</p>
          <h4 className="font-semibold text-rose-600">{t.name}</h4>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Pricing */}
<section id="pricing" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-12">
      Pricing Plans
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          plan: "Free",
          price: "$0",
          desc: "Basic features to get started.",
          features: [
            "✔ Task Management",
            "✔ Basic Analytics",
            "✔ 1 Team Member",
          ],
        },
        {
          plan: "Pro",
          price: "$9/mo",
          desc: "Advanced features for small teams.",
          features: [
            "✔ Everything in Free",
            "✔ Unlimited Projects",
            "✔ Team Collaboration",
            "✔ Priority Support",
          ],
          highlight: true,
        },
        {
          plan: "Enterprise",
          price: "Custom",
          desc: "Tailored solutions for enterprises.",
          features: [
            "✔ Everything in Pro",
            "✔ Dedicated Account Manager",
            "✔ Custom Integrations",
            "✔ 24/7 Premium Support",
          ],
        },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition ${
            p.highlight
              ? "border-2 border-rose-500 bg-white scale-105"
              : "border border-gray-200 bg-white"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          {/* Badge for popular plan */}
          {p.highlight && (
            <span className="bg-rose-500 text-white text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">
              Most Popular
            </span>
          )}

          {/* Plan Title */}
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {p.plan}
          </h3>

          {/* Price */}
          <p className="text-3xl font-extrabold mb-4 text-rose-600">
            {p.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6">{p.desc}</p>

          {/* Features List */}
          <ul className="space-y-2 text-sm mb-6 text-gray-700">
            {p.features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center">
                {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            className={`px-6 py-2 rounded-full font-semibold shadow-md ${
              p.highlight
                ? "bg-rose-500 hover:bg-rose-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            Choose Plan
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-600 text-center mb-12">
            FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How does TaskFlow work?",
                a: "TaskFlow lets you organize, assign, and track tasks seamlessly.",
              },
              {
                q: "Can I use TaskFlow for free?",
                a: "Yes, our Free plan includes all the basics you need to start.",
              },
              {
                q: "Is TaskFlow secure?",
                a: "We use modern encryption to keep your data safe and private.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <h4 className="font-semibold mb-2 text-gray-900">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-white text-gray-700 pt-12 pb-6 mt-16 border-t">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
    {/* Company */}
    <div>
      <h3 className="font-semibold text-gray-900 mb-3 border-b-2 border-rose-500 inline-block">
        Company
      </h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-rose-600">About Us</a></li>
        <li><a href="#" className="hover:text-rose-600">Our Services</a></li>
        <li><a href="#" className="hover:text-rose-600">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-rose-600">Affiliate Program</a></li>
      </ul>
    </div>

    {/* Get Help */}
    <div>
      <h3 className="font-semibold text-gray-900 mb-3 border-b-2 border-rose-500 inline-block">
        Get Help
      </h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-rose-600">FAQ</a></li>
        <li><a href="#" className="hover:text-rose-600">Shipping</a></li>
        <li><a href="#" className="hover:text-rose-600">Returns</a></li>
        <li><a href="#" className="hover:text-rose-600">Order Status</a></li>
        <li><a href="#" className="hover:text-rose-600">Payment Options</a></li>
      </ul>
    </div>

    {/* Online Shop */}
    <div>
      <h3 className="font-semibold text-gray-900 mb-3 border-b-2 border-rose-500 inline-block">
        Online Shop
      </h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-rose-600">Watch</a></li>
        <li><a href="#" className="hover:text-rose-600">Bag</a></li>
        <li><a href="#" className="hover:text-rose-600">Shoes</a></li>
        <li><a href="#" className="hover:text-rose-600">Dress</a></li>
      </ul>
    </div>

    {/* Follow Us */}
    <div>
      <h3 className="font-semibold text-gray-900 mb-3 border-b-2 border-rose-500 inline-block">
        Follow Us
      </h3>
      <div className="flex space-x-4">
        <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-rose-500 hover:text-white transition">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-rose-500 hover:text-white transition">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-rose-500 hover:text-white transition">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
    © 2025 TaskFlow. All rights reserved.
  </div>
</footer>

    </div>
  );
}
