
import { ArrowRight, Code, Server, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Digital Future</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge IT solutions. We deliver innovative technology services that drive growth and efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span className="font-medium">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Code className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Custom Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-8 h-8 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Cybersecurity</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-blue-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
