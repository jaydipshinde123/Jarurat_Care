import { useEffect, useState } from "react";
import { Heart, Activity } from "lucide-react";

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      
      <div className="text-center space-y-8 px-6 w-full max-w-md">
        {/* Main Logo */}
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Animated Rings */}
            <div className="absolute w-32 h-32 border-4 border-white/20 rounded-full animate-ping opacity-70"></div>
            <div className="absolute w-32 h-32 border-2 border-white/15 rounded-full animate-pulse opacity-50"></div>
            
            {/* Logo Container */}
            <div className="relative bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/25 shadow-2xl z-10 transform transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <img 
                className="w-30 h-30 rounded-xl object-cover" 
                src="https://media.licdn.com/dms/image/v2/D4D0BAQH4MOer1snVLA/company-logo_200_200/company-logo_200_200/0/1718213718443?e=1763596800&v=beta&t=zrdLZtOFPHZE3ezUlWHux4GYVsuNToUB6FluMRWzSTI" 
                alt="Jarurat Care Logo" 
              />
            </div>
          </div>
        </div>

        {/* Text Content - Perfectly Centered */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Activity className="w-5 h-5 animate-pulse" />
            <p className="text-lg font-light">Healthcare Management System</p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center space-y-4">
          {/* Loading Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-2 h-2 bg-white/70 rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '1.2s'
                }}
              />
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/60 rounded-full animate-progress"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </div>

        {/* Footer Text */}
        <div className="pt-4">
          <p className="text-white/50 text-sm font-light">
            Loading your dashboard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;