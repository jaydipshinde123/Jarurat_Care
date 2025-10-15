import { Heart, Target, Eye, Award, Users, Globe, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-gray-200 mb-6">
            <Heart className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">About Jarurat Care</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Transforming Healthcare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing patient records management with cutting-edge technology 
            and a commitment to excellence in healthcare delivery.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 fade-in hover:shadow-lg transition-all">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Jarurat Care, we're committed to providing healthcare professionals with 
                  intuitive, efficient tools for managing patient records. Our platform streamlines 
                  workflows, reduces administrative burden, and enables better patient care through 
                  organized, accessible information.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 fade-in hover:shadow-lg transition-all">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-purple-50 rounded-2xl">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where healthcare providers can focus entirely on patient care, 
                  with technology seamlessly handling administrative tasks. Our goal is to become the 
                  leading patient records management system trusted by healthcare facilities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="fade-in mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Patient First",
                description: "Every feature is designed with patient care and safety as the top priority",
                color: "blue"
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Continuously improving our platform with cutting-edge technology solutions",
                color: "yellow"
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "Making healthcare management tools available to facilities of all sizes",
                color: "purple"
              },
            ].map((value, index) => (
              <div
                key={index}
                className=" bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`p-3 bg-${value.color}-50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 fade-in text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Built with Modern Technology</h2>
            <p className="text-blue-100 mb-8 leading-relaxed text-lg">
              This dashboard showcases modern web development practices using React.js, TypeScript, 
              and Tailwind CSS. The application demonstrates efficient state management, responsive 
              design principles, and seamless API integration.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "React.js", color: "bg-cyan-500" },
                { name: "Tailwind CSS", color: "bg-teal-500" },
                { name: "React Router", color: "bg-red-500" },
                { name: "React Hooks", color: "bg-purple-500" },
                { name: "RESTful API", color: "bg-green-500" },
                { name: "Lucide Icons", color: "bg-orange-500" },
                { name: "Vite", color: "bg-yellow-500" },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`${tech.color} px-6 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm bg-white/10 border border-white/20`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;