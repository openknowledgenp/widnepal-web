// src/components/shared/CountdownTimer.jsx
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} class="bg-white backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform">
          <div class="text-3xl font-bold bg-clip-text text-[#40ADE3]">
            {value.toString().padStart(2, '0')}
          </div>
          <div class="text-sm uppercase tracking-wider text-teal-800">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};