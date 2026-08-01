import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./FloatingEmojis.css";

const EMOJIS = ["❤️", "✨", "🌸", "💙", "🦋", "⭐", "🌹", "💖"];

const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = crypto.randomUUID();

      const emoji = {
        id,
        symbol: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        size: 22 + Math.random() * 26,
        duration: 8 + Math.random() * 6,
        rotate: Math.random() * 360,
        drift: 60 + Math.random() * 120,
      };

      setEmojis((prev) => [...prev, emoji]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const removeEmoji = (id) => {
    setEmojis((prev) => prev.filter((emoji) => emoji.id !== id));
  };

  return (
    <div className="FloatingLayer">
      {emojis.map((emoji) => (
        <motion.div
          key={emoji.id}
          className="FloatingEmoji"
          style={{
            left: `${emoji.left}%`,
            fontSize: `${emoji.size}px`,
          }}
          initial={{
            y: "110vh",
            opacity: 0,
            rotate: 0,
            x: 0,
          }}
          animate={{
            y: "-20vh",
            x: [
              0,
              emoji.drift,
              -emoji.drift * 0.7,
              emoji.drift * 0.4,
              -emoji.drift * 0.2,
              0,
            ],
            rotate: [
              0,
              emoji.rotate * 0.25,
              -emoji.rotate * 0.15,
              emoji.rotate * 0.6,
              emoji.rotate,
            ],
            scale: [0.8, 1, 1.08, 0.96, 1],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: emoji.duration,

            ease: "easeInOut",

            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          onAnimationComplete={() => removeEmoji(emoji.id)}
        >
          {emoji.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
