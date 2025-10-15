import { Link } from "react-router-dom";
import { Heart, Users, Shield, Clock, ArrowRight, Star, Activity } from "lucide-react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 slide-up">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl text-white text-sm font-medium border border-white/20">
              <Heart className="w-4 h-4" />
              <span>Patient Care Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jarurat Care
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Modern patient records management system designed for healthcare professionals. 
              Access patient information quickly, securely, and efficiently.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/patients">
                <button className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  View Patient Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/about">
                <button className="group bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Star className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionizing Healthcare Management
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our platform provides comprehensive tools for efficient patient management and care delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Patient Management",
                description: "Easily manage and access patient records with our intuitive interface designed for healthcare professionals",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Quick Access",
                description: "Find patient information instantly with powerful search capabilities and smart filters",
                color: "purple"
              },
              {
                icon: Heart,
                title: "Care Coordination",
                description: "Seamlessly coordinate with healthcare teams and improve patient outcomes",
                color: "red"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 bg-${feature.color}-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;