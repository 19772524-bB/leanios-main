import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, Users, Settings, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-light tracking-wider text-black">Ohh My Home!</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors">รวมเรื่องเล่า</Link>
              <Link href="#technology" className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors">เทคนิคของคนเยอะ</Link>
              <Link href="/about" className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors">รู้จักกันให้มากขึ้น</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/sign-in">
                <Button variant="ghost" className="text-sm tracking-wide font-normal hover:bg-gray-50">Sign In</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="bg-black text-white hover:bg-gray-800 text-sm tracking-wide font-normal px-6">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Pure Image */}
      <section className="w-full h-screen overflow-hidden">
        <img src="/Cover.jpg" alt="Ohh My Home! Hero Background" className="w-full h-full object-cover" />
      </section>

      {/* Content Below Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-wider text-black mb-8 leading-tight">
            ยินดีต้อนรับสู่<br />
            Ohh My Home!<br />
            คนเยอะเรื่องอยู่
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            ทำบ้านอาจจะเยอะ... แต่ไม่ต้องเยอะคนเดียว
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-12 py-3 text-sm tracking-widest font-normal rounded-md shadow-lg">
              DISCOVER MORE →
            </Button>
            <Link href="#features" className="text-sm tracking-widest text-gray-700 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-1">
              EXPLORE FEATURES
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wider text-black mb-6">Exquisite Craftsmanship</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 font-light tracking-wide max-w-2xl mx-auto">
              Each feature meticulously designed and engineered to perfection, 
              embodying the essence of luxury software architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 rounded-lg">
              <Shield className="h-8 w-8 text-black mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-light tracking-wide text-black mb-3">Secure Authentication</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Military-grade security architecture with Supabase integration, ensuring your data remains protected with elegance.
              </p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 rounded-lg">
              <Users className="h-8 w-8 text-black mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-light tracking-wide text-black mb-3">Intuitive Dashboard</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A masterfully crafted user experience that seamlessly blends functionality with aesthetic excellence.
              </p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 rounded-lg">
              <Settings className="h-8 w-8 text-black mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-light tracking-wide text-black mb-3">Administrative Excellence</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Comprehensive control panel designed for sophisticated management and seamless operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg className="h-8 w-8 text-white mx-auto mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-8">Begin Your Journey</h2>
          <p className="text-xl text-gray-300 mb-12 font-light tracking-wide max-w-2xl mx-auto">
            Join an exclusive community of home enthusiasts who demand nothing less than perfection 
            in their living spaces and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-white text-black hover:bg-gray-100 px-12 py-3 text-sm tracking-widest font-normal rounded-md">
              START YOUR EXPERIENCE
            </Button>
            <Link href="#" className="text-sm tracking-widest text-gray-300 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">
              MEMBER ACCESS
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light tracking-wider text-black mb-6">Ohh My Home!</h3>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 font-light tracking-wide mb-8">
              The epitome of modern home design and lifestyle
            </p>
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              © 2024 Ohh My Home!. Crafted with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}