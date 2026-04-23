import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Frontend", desc: "React, Tailwind, UI/UX" },
  { id: 2, title: "Backend", desc: "Node.js, NestJS, APIs" },
  { id: 3, title: "Mobile", desc: "Flutter, Firebase apps" },
];

export function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer"
            // initial state (before animation)
            initial={{ opacity: 0, y: 50 }}
            // animate when component loads
            animate={{ opacity: 1, y: 0 }}
            // delay each card (nice stagger effect)
            transition={{ duration: 0.5, delay: index * 0.2 }}
            // hover animation
            whileHover={{ scale: 1.05 }}
            // click animation
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
