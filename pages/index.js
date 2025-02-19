import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Tortoise and the Birds",
    language: "English",
    image: "/images/tortoise.jpg",
  },
  {
    id: 2,
    title: "Anansi the Spider",
    language: "Pidgin",
    image: "/images/anansi.jpg",
  },
  {
    id: 3,
    title: "The Lion and the Mouse",
    language: "Yoruba",
    image: "/images/lion.jpg",
  },
  {
    id: 4,
    title: "The King's Drum",
    language: "Igbo",
    image: "/images/drum.jpg",
  },
  {
    id: 5,
    title: "The Magic Calabash",
    language: "Hausa",
    image: "/images/calabash.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aisha",
    quote: "My kids love Naija Tales! They learn so much about our culture.",
  },
  {
    id: 2,
    name: "Chinedu",
    quote: "The stories are so engaging and fun. Highly recommended!",
  },
  {
    id: 3,
    name: "Fatima",
    quote: "A great way to teach children our languages and traditions.",
  },
];

export default function Home() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="bg-gradient-to-b from-green-400 to-yellow-400 min-h-screen p-8">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
        >
          Naija Tales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white drop-shadow-md mb-8"
        >
          Discover magical stories from Nigeria!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link href="/stories">
            <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-100 transition-colors">
              Explore Stories
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-white p-3 rounded-full shadow-xl">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-gray-800 font-semibold outline-none"
          >
            <option value="English">🇬🇧 English</option>
            <option value="Pidgin">🇳🇬 Pidgin</option>
            <option value="Yoruba">🇳🇬 Yoruba</option>
            <option value="Igbo">🇳🇬 Igbo</option>
            <option value="Hausa">🇳🇬 Hausa</option>
          </select>
        </div>
      </div>

      {/* Featured Stories Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Featured Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(0, 3).map((story) => (
            <Link key={story.id} href={`/story/${story.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="font-bold text-xl text-gray-800 mb-2">
                    {story.title}
                  </h2>
                  <p className="text-gray-600">{story.language}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">
          About Naija Tales
        </h2>
        <p className="text-gray-700 text-lg text-center">
          Naija Tales is a fun and educational app that brings Nigerian
          folktales, myths, and legends to life. With interactive stories,
          animations, and games, children can learn about their culture while
          having fun!
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          What Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-green-600 font-semibold">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="mt-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white text-lg font-medium mb-4"
        >
          Made with ❤️ for Nigerian children
        </motion.p>
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="text-white hover:text-green-200 transition-colors"
          >
            Facebook
          </Link>
          <Link
            href="#"
            className="text-white hover:text-green-200 transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="text-white hover:text-green-200 transition-colors"
          >
            Instagram
          </Link>
        </div>
      </footer>
    </div>
  );
}
