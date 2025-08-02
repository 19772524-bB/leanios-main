import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, AlertCircle, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ครั้งแรกตรวจบ้าน: สิ่งที่บีอยากรู้ไว้ก่อน | Ohh My Home!',
  description: 'เรื่องเล่าจากประสบการณ์ตรวจบ้านครั้งแรก สิ่งที่คิดว่ารู้แต่จริงๆ แล้วไม่รู้ และบทเรียนที่ได้จากการผิดพลาด พร้อมเทคนิคป้องกันให้คุณไม่ต้องเจ็บซ้ำรอย',
  keywords: 'ตรวจบ้าน, ซื้อบ้าน, ประสบการณ์, เคล็ดลับ, คนเยอะเรื่อง, Ohh My Home',
  openGraph: {
    title: 'ครั้งแรกตรวจบ้าน: สิ่งที่บีอยากรู้ไว้ก่อน',
    description: 'เรื่องเล่าจากประสบการณ์ตรวจบ้านครั้งแรก และบทเรียนที่ได้จากการผิดพลาด',
    type: 'article',
    locale: 'th_TH',
  },
}

export default function FirstHomeInspectionStory() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-stone-700 hover:text-stone-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-light tracking-wide">กลับสู่หน้าแรก</span>
            </Link>
            <div className="flex items-center">
              <h1 className="text-lg font-light tracking-wider text-stone-900">Ohh My Home!</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-6">
            <Home className="h-12 w-12 text-stone-600 mx-auto mb-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extralight tracking-wide text-stone-900 mb-6 leading-tight">
            ครั้งแรกตรวจบ้าน:<br />
            สิ่งที่บีอยากรู้ไว้ก่อน
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            เรื่องเล่าจากประสบการณ์ตรวจบ้านครั้งแรก สิ่งที่คิดว่ารู้แต่จริงๆ แล้วไม่รู้ 
            และบทเรียนที่ได้จากการผิดพลาด
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="space-y-12">
          {/* Opening Story */}
          <section className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-700 font-light leading-relaxed mb-6">
              วันนั้นบีตื่นเต้นมากค่ะ เพราะเป็นครั้งแรกที่ได้ไปตรวจบ้านที่กำลังจะซื้อ
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              เตรียมตัวมาดี เอาสมุดจดมา เอากล้องมา คิดว่าจะได้ตรวจทุกอย่างอย่างละเอียด... 
              แต่พอไปถึงจริงๆ บีถึงกับตกใจว่า "เอ๊ะ มันไม่ใช่แบบที่คิดเลยนี่นา"
            </p>
            <p className="text-stone-600 leading-relaxed">
              วันนี้เลยอยากมาเล่าให้ฟังว่า สิ่งที่บีคิดว่ารู้ แต่จริงๆ แล้วไม่รู้มีอะไรบ้าง 
              เพื่อให้คุณไม่ต้องงงแบบบีนะคะ
            </p>
          </section>

          {/* Section 1: What I Thought I Knew */}
          <section className="bg-white p-8 rounded-lg border border-stone-200">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-light tracking-wide text-stone-900">สิ่งที่บีคิดว่ารู้ (แต่จริงๆ ไม่รู้)</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-stone-300 pl-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">1. คิดว่าจะได้ตรวจนานๆ สบายๆ</h3>
                <p className="text-stone-600 leading-relaxed">
                  บีคิดว่าจะได้เดินดูบ้านทั้งวัน ตรวจทุกซอกทุกมุม แต่จริงๆ แล้วเวลาที่ให้มาแค่ 2-3 ชั่วโมงเท่านั้น
                  และยังต้องแบ่งเวลากับการคุยกับเจ้าของบ้าน ดูเอกสาร ฟังคำอธิบายอีกด้วย
                </p>
              </div>

              <div className="border-l-4 border-stone-300 pl-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">2. คิดว่าจะเห็นปัญหาได้หมด</h3>
                <p className="text-stone-600 leading-relaxed">
                  หลายอย่างมันซ่อนอยู่ในที่ที่มองไม่เห็น เช่น ระบบไฟฟ้าในฝาผนัง ท่อน้ำใต้พื้น 
                  หรือแม้แต่ปัญหาความชื้นที่จะปรากฏเฉพาะฤดูฝน
                </p>
              </div>

              <div className="border-l-4 border-stone-300 pl-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">3. คิดว่าเจ้าของจะบอกความจริงหมด</h3>
                <p className="text-stone-600 leading-relaxed">
                  เจ้าของบ้านเป็นคนดี แต่บางทีก็มีเรื่องที่เขาไม่ได้ตั้งใจปิดบัง แค่ลืมบอก 
                  หรือไม่รู้ว่ามันเป็นปัญหา เช่น "อ่อ ไฟดับบ่อยๆ นี่มันปกติแล้ว ในซอยนี้เป็นแบบนี้หมด"
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: What Actually Happened */}
          <section>
            <h2 className="text-2xl font-light tracking-wide text-stone-900 mb-8 text-center">สิ่งที่เกิดขึ้นจริงๆ ในวันตรวจบ้าน</h2>
            
            <div className="space-y-8">
              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-800 mb-4">เหตุการณ์ที่ 1: เจ้าของบ้านรีบไป</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  เจ้าของบอกว่า "ผมมีธุระด่วน ให้เวลาดูอีก 1 ชั่วโมงนะครับ" 
                  ทำให้บีต้องรีบๆ ดู ไม่ได้ตรวจละเอียดแบบที่วางแผนไว้
                </p>
                <p className="text-stone-500 text-sm italic">
                  บทเรียน: ควรตกลงเวลาให้ชัดเจนล่วงหน้า และขอเวลาสำรองไว้
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-800 mb-4">เหตุการณ์ที่ 2: สายฟ้าผ่า (จริงๆ นะ!)</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  พอไปถึงบ้าน ฝนตกพรํ่าเลย ไฟดับ ทำให้ดูระบบไฟฟ้าไม่ได้ 
                  และเสียงน้ำหยดก็ทำให้รู้ว่าหลังคารั่ว แต่ไม่รู้ว่ารั่วแค่ไหน
                </p>
                <p className="text-stone-500 text-sm italic">
                  บทเรียน: สภาพอากาศมีผลมาก ควรมีแผนสำรอง หรือนัดวันใหม่ถ้าจำเป็น
                </p>
              </div>

              <div className="bg-stone-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-800 mb-4">เหตุการณ์ที่ 3: เพื่อนบ้านมาคุย</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  ที่ไม่คาดคิดคือ เพื่อนบ้านมาทักทาย แล้วบอกข้อมูลที่เจ้าของไม่ได้บอก 
                  เช่น "บ้านหลังนี้ท่วมทุกปีนะ" หรือ "มดขาวเยอะ จริงๆ นะ"
                </p>
                <p className="text-stone-500 text-sm italic">
                  บทเรียน: เพื่อนบ้านเป็นแหล่งข้อมูลที่ดี แต่ต้องกรองข้อมูลด้วย
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Lessons Learned */}
          <section className="bg-white p-8 rounded-lg border border-stone-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-light tracking-wide text-stone-900">สิ่งที่บีได้เรียนรู้</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-stone-800">สิ่งที่ควรเตรียม</h3>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>ไฟฉายที่แรง (สำหรับใต้บ้าน ห้องใต้หลังคา)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>เครื่องวัดความชื้น (ถ้าหาได้)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>เซ็นเตอร์ประปา วัดความดันน้ำ</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>แบตเตอรี่สำรอง สำหรับอุปกรณ์ต่างๆ</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-stone-800">สิ่งที่ควรถาม</h3>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>"เคยมีปัญหีอะไรบ้างครับ ไม่ใหญ่ก็เล็ก"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>"ค่าใช้จ่ายประจำเดือนเท่าไหร่"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>"เพื่อนบ้านเป็นยังไงบ้าง"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>"มีแผนพัฒนาย่านนี้ไหม"</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="text-center py-8">
            <p className="text-stone-600 leading-relaxed mb-6">
              ตรวจบ้านครั้งแรกของบีก็ผ่านไปแบบ "เออมันก็เป็นแบบนี้นี่เอง" 
              ไม่ได้เพอร์เฟ็คต์แบบที่คิด แต่ก็ได้บทเรียนดีๆ มาเยอะ
            </p>
            <p className="text-stone-700 font-medium">
              หวังว่าประสบการณ์ของบีจะช่วยให้คุณเตรียมตัวได้ดีกว่านะคะ
            </p>
          </section>

          {/* Call to Action */}
          <section className="bg-stone-100 p-8 rounded-lg text-center">
            <h3 className="text-xl font-light tracking-wide text-stone-900 mb-4">
              อยากฟังเรื่องเล่าอื่นๆ ของบีไหม?
            </h3>
            <p className="text-stone-600 mb-6">
              บีมีเรื่องเล่าเกี่ยวกับการทำบ้านอีกเยอะเลย ทั้งเรื่องสนุกและเรื่องที่เจ็บมา
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-stone-800 text-white hover:bg-stone-700 px-8 py-2 text-sm font-light tracking-wide">
                  อ่านเรื่องเล่าอื่นๆ
                </Button>
              </Link>
              <Link href="#" className="text-sm text-stone-600 hover:text-stone-800 border-b border-stone-300 hover:border-stone-600 pb-1 transition-colors">
                แชร์ประสบการณ์ของคุณ
              </Link>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12 mt-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-stone-500 text-sm font-light mb-4">
            บทความจาก
          </p>
          <h3 className="text-xl font-light tracking-wider text-stone-900 mb-4">
            Ohh My Home! คนเยอะเรื่องอยู่
          </h3>
          <p className="text-stone-400 text-xs tracking-wide">
            เพราะทำบ้านอาจจะเยอะ... แต่ไม่ต้องเยอะคนเดียว
          </p>
        </div>
      </footer>
    </div>
  )
}