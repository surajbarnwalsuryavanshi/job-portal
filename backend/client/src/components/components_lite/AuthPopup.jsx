import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const AuthPopup = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // 5 seconds wapas set kar diya original flow ke liye

      return () => clearTimeout(timer);
    }
  }, [user]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-950/40 backdrop-blur-md px-4 animate-fade-in">
      {/* Decorative Sunset Horizon Glows (Behind the card) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Popup Card */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white/95 shadow-[0_20px_60px_rgba(255,140,0,0.15)] ring-1 ring-white/50 animate-sunset-pop">
        {/* Top Gradient - Sky blending into Sunset */}
        <div className="h-3 bg-gradient-to-r from-sky-400 via-pink-400 to-orange-400"></div>

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 text-slate-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
        >
          <X size={24} strokeWidth={2} />
        </button>

        {/* Content */}
        <div className="px-8 py-10 text-center">
          {/* Icon Area - Sunset Gradient */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-sky-400 shadow-[0_10px_25px_rgba(255,140,0,0.3)] hover:scale-105 transition-transform duration-300">
            <span className="text-4xl">🚀</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-slate-800 leading-tight">
            Unlock More Features
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-lg leading-relaxed text-slate-500 font-medium">
            Create your free account to apply for jobs, save opportunities, and
            get the best experience on the platform.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            {/* Login - Warm Sunset Button */}
            <button
              onClick={() => navigate("/login")}
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(255,105,180,0.4)] cursor-pointer"
            >
              Login Now
            </button>

            {/* Signup - Soft Outline */}
            <button
              onClick={() => navigate("/register")}
              className="w-full rounded-2xl border-2 border-pink-200 bg-white/50 py-4 text-lg font-semibold text-pink-600 transition-all duration-300 hover:bg-pink-50 hover:border-pink-300 hover:scale-[1.03] cursor-pointer"
            >
              Create Free Account
            </button>
          </div>

          {/* Bottom Text */}
          <button
            onClick={() => setShowPopup(false)}
            className="mt-6 text-sm font-medium text-slate-400 transition hover:text-slate-700 cursor-pointer"
          >
            Continue browsing jobs →
          </button>
        </div>
      </div>

      {/* Breezy & Smooth Animations */}
      <style>
        {`
          @keyframes sunsetPop {
            0% {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(12px); }
          }

          .animate-sunset-pop {
            animation: sunsetPop 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AuthPopup;
