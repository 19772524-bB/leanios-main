export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-light tracking-wider text-black hover:text-gray-700 transition-colors">
                Ohh My Home!
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors">รวมเรื่องเล่า</a>
              <a href="/#technology" className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors">เทคนิคของคนเยอะ</a>
              <a href="/about" className="text-sm tracking-wide text-black border-b border-black">รู้จักกันให้มากขึ้น</a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-wider text-black mb-8 leading-tight">
            รู้จักกันให้มากขึ้น
          </h1>
          <div className="w-16 h-px bg-black mx-auto mb-12"></div>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            เรื่องราวของคนที่อยากแชร์ประสบการณ์การทำบ้าน การจัดบ้าน และเรื่องเล่าต่างๆ ที่เกิดขึ้นในชีวิตประจำวัน
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-black mb-6">
                สวัสดีค่ะ!
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                ยินดีที่ได้รู้จักค่ะ! ที่นี่คือพื้นที่ที่เราจะมาแชร์เรื่องราวต่างๆ เกี่ยวกับการทำบ้าน การจัดบ้าน 
                และเรื่องเล่าในชีวิตประจำวันที่อาจจะดูธรรมดา แต่มีความหมายดี
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                เราเชื่อว่าการทำบ้านไม่ต้องเป็นภาระของคนคนเดียว และทุกเรื่องราวเล็กๆ น้อยๆ 
                ในบ้านล้วนมีคุณค่าและน่าแชร์
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                หวังว่าเนื้อหาต่างๆ ที่แชร์ที่นี่จะเป็นประโยชน์และสร้างแรงบันดาลใจให้กับทุกคนค่ะ
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl font-light tracking-wide text-black mb-4">
                สิ่งที่คุณจะพบที่นี่
              </h3>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  <span>เทคนิคการทำบ้านและการจัดระเบียบ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  <span>ไอเดียการตกแต่งบ้านแบบง่ายๆ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  <span>เรื่องเล่าและประสบการณ์จริง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  <span>การแชร์ความรู้และเทคนิคต่างๆ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-black mb-8">
            มาคุยกันค่ะ
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-8">
            หากมีคำถาม ข้อเสนอแนะ หรืออยากแชร์ประสบการณ์ของตัวเอง 
            ยินดีรับฟังและพูดคุยกันเสมอค่ะ
          </p>
          <a 
            href="/" 
            className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm tracking-wide font-normal rounded-md transition-colors"
          >
            กลับหน้าแรก
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-light tracking-wider text-black mb-6">Ohh My Home!</h3>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 font-light tracking-wide mb-8">
              คนเยอะเรื่องอยู่
            </p>
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              © 2024 Ohh My Home!. ทำด้วยใจ
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}