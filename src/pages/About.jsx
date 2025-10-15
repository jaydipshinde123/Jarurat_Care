import { useState } from "react";
import { Heart, Target, Users, Zap, Globe, TrendingUp, Clock, Mail, ArrowRight, Calendar, Users2, Brain, MessageCircle, Star, ChevronRight, Shield, BookOpen, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Header with Side-by-Side Layout */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-gray-200">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">About Our Mission</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Standing Strong <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Together</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At Jarurat Care Foundation, we understand that facing cancer can be overwhelming, 
                and no one should have to go through it alone.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, number: "150+", label: "Patients Helped", color: "blue" },
                    { icon: Heart, number: "50+", label: "Emotional Support Services", color: "purple" },
                    { icon: Star, number: "25+", label: "Expert Doctors", color: "green" },
                    { icon: MapPin, number: "95+", label: "Early Treatments Initiated", color: "orange" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <stat.icon className={`w-8 h-8 text-${stat.color}-600 mx-auto mb-2`} />
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content in Card Layout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Jarurat Care Foundation</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                That's why we've made it our mission to stand by those affected by cancer, 
                offering unwavering support every step of the way. We're a community-driven 
                NGO dedicated to bringing hope, care, and strength to patients, caregivers, 
                and healthcare professionals across India.
              </p>
              <p>
                Our focus is on creating a warm and inclusive space where everyone's needs 
                are heard and met. Whether it's providing a comforting word, nutritional advice, 
                or practical help, we're here to make the journey a little easier.
              </p>
              <p>
                We work closely with healthcare providers, volunteers, and generous donors 
                to reach those who need us most, ensuring that no one is left without the 
                support they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side with Icons */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-2xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To stand by those affected by cancer, offering unwavering support every step of the way. 
                We're dedicated to bringing hope, care, and strength across India.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-600 rounded-2xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Create an all-inclusive community of cancer warriors, caregivers, and doctors 
                in India, fostering support, knowledge sharing, and solidarity in the fight against cancer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Circular Design */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Reach",
                description: "Connecting with patients and communities across India",
                color: "blue"
              },
              {
                icon: Zap,
                title: "Impact", 
                description: "Delivering meaningful interventions that make a difference",
                color: "green"
              },
              {
                icon: Shield,
                title: "Sustain",
                description: "Providing ongoing assistance and continuous care",
                color: "purple"
              },
              {
                icon: Globe,
                title: "Evolve",
                description: "Adapting to meet changing needs of the community",
                color: "orange"
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`relative inline-flex items-center justify-center w-24 h-24 bg-${value.color}-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey - Timeline with Vertical Line */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-purple-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2023",
                  month: "DECEMBER",
                  title: "The Beginning",
                  description: "Our story commenced in December 2023, marking a pivotal moment in our lives. It was then that we faced the profound loss of our cherished mother, who bravely battled Cholangiocarcinoma for seven months."
                },
                {
                  year: "2024", 
                  month: "FOUNDATION",
                  title: "Building Foundation",
                  description: "Led by two co-founders with firsthand experience, conducting extensive research to identify specific needs and gaps in cancer patient support services."
                },
                {
                  year: "2024",
                  month: "GROWTH", 
                  title: "Strategic Development",
                  description: "Developed clear vision and strategic plan, launched impactful community engagement programs within the cancer support community."
                }
              ].map((milestone, index) => (
                <div key={index} className="relative flex gap-8 items-start">
                  {/* Dot on Timeline */}
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  <div className="ml-16 bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-xl">
                        <div className="text-sm font-bold">{milestone.year}</div>
                        <div className="text-xs">{milestone.month}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Feature Cards */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Caregiving Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users2,
                title: "Cancer Connect",
                description: "Committed caregivers connecting patients, caregivers, and healthcare professionals for sharing updates and awareness.",
                color: "blue"
              },
              {
                icon: Brain,
                title: "Treatment Think Tank",
                description: "Expert team of oncologists, dieticians, and advisors for tailored comprehensive patient care.",
                color: "purple"
              },
              {
                icon: MessageCircle,
                title: "Hope AI Chatbot",
                description: "Available on jarurat.care, providing immediate support and guidance at any time.",
                color: "green"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className={`p-4 bg-${service.color}-100 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <service.icon className={`w-10 h-10 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Advisory Board */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory Board</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Advisory Board features top oncologists and cancer experts guiding us in providing 
              the best care and staying updated on treatment advances.
            </p>
          </div>
        </div>
      </section>

      {/* Founders - Profile Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pioneers Of Our Foundation</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The heart behind our foundation is someone who personally knows the challenges of battling cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Priyanka Joshi",
                role: "Co-Founder",
                description: "Driven by a deep desire to help others, offering support, hope, and community."
              },
              {
                name: "Ayush Anand",
                role: "Co-Founder", 
                description: "Committed to building a supportive ecosystem for cancer warriors and families."
              }
            ].map((founder, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{founder.role}</div>
                <p className="text-gray-600 leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default About;