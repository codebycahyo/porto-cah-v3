import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="px-6 md:px-8 py-8">
      <div className="mx-auto max-w-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-caption font-sans text-text-muted tracking-[0.04em]">
          © {new Date().getFullYear()} Cahyo
        </p>

        <p className="text-caption font-sans text-text-muted tracking-[0.04em]">
          Yogyakarta · {time} WIB
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-caption font-sans text-text-muted tracking-[0.04em] transition-colors hover:text-text-primary"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
