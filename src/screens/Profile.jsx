import React from "react";
import { motion } from "framer-motion";

export function Profile() {
  const cards = [
    {
      id: 1,
      title: "Frontend",
      desc: "HTML, JavaScript, UI/UX",
    },
    {
      id: 2,
      title: "Backend",
      desc: "Nodejs, Laravel, APIs",
    },
    {
      id: 3,
      title: "Mobile",
      desc: "Flutter, Firebase Apps",
    },
  ];
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
            // 1.
            initial={{ opacity: 0, y: 50 }}
            // 2.
            animate={{ opacity: 1, y: 0 }}
            // 3.
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 ">{card.desc}</p>
          </motion.div>
        ))}

        <motion.img
          src="/images/img.jpg"
          alt="Nature"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          style={{
            width: "300px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        />

        <motion.button
          className="bg-slate-500 h-20 w-30 p-6 "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click me
        </motion.button>
      </div>
    </div>
  );
}
