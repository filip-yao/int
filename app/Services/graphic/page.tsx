"use client";

import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date('2025-03-10T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-8 w-full max-w-2xl px-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center bg-white/10 p-2 md:p-4 rounded-lg">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm uppercase tracking-wider opacity-80">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            <span className="text-xl sm:text-2xl block mb-2">Vítejte na webu</span>
            KOSMO PRODUCTION
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6">
            Naše stránka je právě ve výstavbě
          </h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            Pracujeme na tom, abychom vám mohli nabídnout skvělý zážitek.<br />
            Vraťte se k nám brzy!
          </p>
          <CountdownTimer />
        </div>
      </div>
    </Layout>
  );
}
