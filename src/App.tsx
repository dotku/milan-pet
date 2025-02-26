import React from 'react';
import { ChevronRight, PawPrint as Paw, Battery, Timer, Wifi, Shield, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Paw className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">咪蓝</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-500">产品特点</a>
            <a href="#specs" className="text-gray-600 hover:text-orange-500">规格参数</a>
            <a href="#buy" className="text-gray-600 hover:text-orange-500">立即购买</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                智能宠物喂食器
                <span className="block text-orange-500">为爱宠打造智慧生活</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                革新您的宠物喂食体验，智能喂食器将娱乐与科学喂养完美结合，
                让您的爱宠享受更健康、更快乐的生活。
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold 
                hover:bg-orange-600 transition-colors flex items-center">
                立即选购 <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="/images/970-1.jpg" 
                alt="猫咪与喂食器" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              智能特性，呵护爱宠
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Battery className="h-8 w-8 text-orange-500" />}
                title="USB供电"
                description="便捷的USB接口供电方式"
              />
              <FeatureCard 
                icon={<Timer className="h-8 w-8 text-orange-500" />}
                title="定时投喂"
                description="可设置自动定时投喂时间"
              />
              <FeatureCard 
                icon={<Wifi className="h-8 w-8 text-orange-500" />}
                title="智能控制"
                description="手机APP远程控制喂食和互动"
              />
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-20 bg-orange-50" id="specs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              产品规格
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">技术参数</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-500 mr-2" />
                    <span>食品级安全材质</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-500 mr-2" />
                    <span>USB供电 (5V)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-500 mr-2" />
                    <span>容量：500ml干粮</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">包装清单</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-500 mr-2" />
                    <span>智能喂食器主机</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-500 mr-2" />
                    <span>USB充电线</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-orange-500 mr-2" />
                    <span>中文说明书</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" id="buy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              准备好为爱宠升级生活体验了吗？
            </h2>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold 
              hover:bg-orange-600 transition-colors inline-flex items-center">
              立即订购 <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Paw className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold">咪蓝</span>
              </div>
              <p className="text-gray-400">
                让宠物护理更智能，更愉悦
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-orange-500">产品特点</a></li>
                <li><a href="#specs" className="text-gray-400 hover:text-orange-500">规格参数</a></li>
                <li><a href="#buy" className="text-gray-400 hover:text-orange-500">立即购买</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <p className="text-gray-400">
                邮箱: support@milan.com<br />
                电话: 400-123-4567<br />
                <span className="flex items-center mt-2">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  微信客服: Helen (wxid_mshnxf7rr89o22)
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-orange-50 p-6 rounded-xl">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;