
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Projects Completed' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Asti Infotech</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a forward-thinking IT company dedicated to delivering innovative technology solutions that empower businesses to thrive in the digital age.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between business needs and technology solutions, Asti Infotech has grown to become a trusted partner for companies seeking digital transformation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced professionals combines technical expertise with business acumen to deliver solutions that not only meet current requirements but also scale for future growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in an ever-evolving digital landscape.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Competitive pricing and timely delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
