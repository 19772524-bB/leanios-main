import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'วันตรวจรับบ้านหลังแรกของบี - 43 จุดที่ต้องแก้ไข | Ohh My Home!',
  description: 'ประสบการณ์จริงการตรวจรับบ้านมือหนึ่งจากโครงการมหาชน ที่พบ defect 43 จุด และบทเรียนเรื่องความสำคัญของคนคุมงาน',
  keywords: 'ตรวจรับบ้าน, บ้านใหม่, defect, บ้านมือหนึ่ง, โครงการมหาชน, สร้างบ้าน, คุมงาน',
  openGraph: {
    title: 'วันตรวจรับบ้านหลังแรกของบี - 43 จุดที่ต้องแก้ไข',
    description: 'ประสบการณ์จริงการตรวจรับบ้านมือหนึ่งจากโครงการมหาชน ที่พบ defect 43 จุด',
    type: 'article',
    locale: 'th_TH',
  },
}

export default function FirstHomeInspectionStory() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link 
              href="/" 
              className="flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm tracking-wide">กลับหน้าแรก</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Home className="h-12 w-12 text-stone-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight tracking-wider text-stone-900 mb-6 leading-tight">
            วันตรวจรับบ้านหลังแรกของบี
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            บ้านมือหนึ่งจากโครงการมหาชน ที่พบ defect มากถึง 43 จุด
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="space-y-12">
          {/* Opening Story */}
          <section className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-700 font-light leading-relaxed mb-6">
              วันนี้บีมาตรวจรับบ้านหลังแรกของตัวเองค่ะ แม้ว่าบีจะตรวจอย่างดีแค่ไหน 
              แต่บ้านที่สร้างเสร็จแล้วก็มีหลายอย่างที่ไม่สามารถแก้ไขได้
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              จากการตรวจครั้งนี้ บีพบว่ามี defect มากถึง 43 จุด เช่น งานฉาบผนังที่ย้วย 
              ไม่สามารถแก้ด้วยการสกิมผิว หรืองานผนังที่แตกร้าวจากการทรุดของบ้าน
              ก็ไม่สามารถฉาบเก็บงานแล้วไม่เกิดรอยแตกใหม่อีกได้
            </p>
            <p className="text-stone-600 leading-relaxed">
              รวมถึงงานกระเบื้องห้องน้ำที่ไม่ได้สโลป ก็ต้องกระเทาะกระเบื้องทำใหม่ซึ่งจะทำให้บ้านช้ำ
            </p>
          </section>

          {/* Section 1: First Inspection Results */}
          <section className="bg-white p-8 rounded-lg border border-stone-200">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-light tracking-wide text-stone-900">43 จุดที่ต้องแก้ไข</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-300 pl-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">งานฉาบผนังที่ย้วย</h3>
                <p className="text-stone-600 leading-relaxed">
                  ไม่สามารถแก้ด้วยการสกิมผิวได้ เพราะความไม่เรียบมากเกินไป ต้องฉาบใหม่ทั้งหมด
                </p>
              </div>

              <div className="border-l-4 border-red-300 pl-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">ผนังแตกร้าวจากการทรุด</h3>
                <p className="text-stone-600 leading-relaxed">
                  ไม่สามารถฉาบเก็บงานแล้วไม่เกิดรอยแตกใหม่อีกได้ เพราะเป็นปัญหาโครงสร้าง
                </p>
              </div>

              <div className="border-l-4 border-red-300 pl-6">
                <h3 className="text-lg font-medium text-stone-800 mb-3">กระเบื้องห้องน้ำไม่ได้สโลป</h3>
                <p className="text-stone-600 leading-relaxed">
                  ต้องกระเทาะกระเบื้องทำใหม่ซึ่งจะทำให้บ้านช้ำ แต่ถ้าไม่ทำน้ำจะขังและเกิดปัญหาตามมา
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Second Visit */}
          <section className="bg-stone-100 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <XCircle className="h-6 w-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-light tracking-wide text-stone-900">2 สัปดาห์ต่อมา</h2>
            </div>
            
            <p className="text-stone-700 leading-relaxed mb-6">
              บีขอนัดตรวจงานแก้ แล้วกลับมาตรวจใหม่ในอีก 2 สัปดาห์ แต่บ้านก็ไม่สามารถแก้ไขได้ตามที่บีต้องการ
            </p>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-stone-400">
              <h3 className="text-lg font-medium text-stone-800 mb-3">บทสนทนาที่จำได้</h3>
              <div className="space-y-3">
                <p className="text-stone-600 italic">
                  วิศวกรคุมงาน: "ให้เซ็นต์รับไปเถอะครับ"
                </p>
                <p className="text-stone-600 italic">
                  บี: "ถ้าเป็นบ้านคุณ คุณจะทำยังไงครับ?"
                </p>
                <p className="text-stone-600 italic">
                  วิศวกร: "ถ้าเป็นบ้านผม แค่น้ำไหลไฟติดผมก็รับงานแล้วครับ"
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Key Insight */}
          <section className="bg-white p-8 rounded-lg border border-stone-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-light tracking-wide text-stone-900">สิ่งที่บีได้เรียนรู้</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-stone-700 font-light leading-relaxed">
                จริงๆ แล้วคนที่สำคัญที่สุดคือคนคุมงาน เพราะ attitude ของวิศวกรคุมงานเป็นแบบนี้นี่เอง 
                ไม่แปลกใจเลยที่บ้านของบีถึงมี defect มากขนาดนี้
              </p>
              
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-stone-800 mb-3">บทเรียนสำคัญ</h3>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3">•</span>
                    <span>คุณภาพงานขึ้นอยู่กับ attitude ของคนคุมงาน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3">•</span>
                    <span>บ้านมือหนึ่งไม่ได้หมายความว่าจะไม่มีปัญหา</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3">•</span>
                    <span>การตรวจรับต้องใช้เวลาและความอดทน</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3">•</span>
                    <span>บางปัญหาแก้ไขได้ บางอย่างต้องยอมรับและหาทางรับมือ</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Closing Thoughts */}
          <section className="text-center py-12">
            <p className="text-stone-600 leading-relaxed mb-6">
              การตรวจรับบ้านครั้งแรกทำให้บีรู้ว่า การสร้างบ้านไม่ใช่เรื่องง่าย 
              แต่ถ้าเรารู้จักปัญหาและเตรียมใจไว้ เราก็จะรับมือได้ดีขึ้น
            </p>
            <p className="text-lg text-stone-700 font-light">
              หวังว่าประสบการณ์ของบีจะช่วยให้คุณเตรียมตัวได้ดีขึ้นนะคะ
            </p>
          </section>
        </article>
      </main>

      {/* Call to Action */}
      <section className="bg-white py-16 border-t border-stone-200">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-2xl font-light tracking-wide text-stone-900 mb-6">
            อ่านเรื่องราวอื่นๆ
          </h2>
          <p className="text-stone-600 mb-8">
            บีมีประสบการณ์และเรื่องราวอีกมากมายที่อยากแชร์ให้ฟัง
          </p>
          <Link 
            href="/" 
            className="inline-block bg-stone-900 text-white hover:bg-stone-800 px-8 py-3 text-sm tracking-wide font-normal rounded-md transition-colors"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-light tracking-wider text-stone-900 mb-4">Ohh My Home!</h3>
          <p className="text-stone-600 font-light">
            คนเยอะเรื่องอยู่
          </p>
        </div>
      </footer>
    </div>
  )
}