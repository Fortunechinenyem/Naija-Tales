import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/app/components/Footer";

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
  {
    id: 6,
    title: "The Brave Hunter",
    language: "Yoruba",

    image: "/images/hunter.jpg",
  },
  {
    id: 7,
    title: "The Clever Hare",
    language: "Pidgin",

    image: "/images/hare.jpg",
  },
  {
    id: 8,
    title: "The Talking Drum",
    language: "Igbo",

    image: "/images/drum2.jpg",
  },
];

export default function Stories() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-teal-500 min-h-screen p-8">
      <div className="mb-7">
        <Link
          href="/"
          className="bg-white text-purple-600 font-bold px-4 py-2 rounded-md shadow-md hover:bg-purple-100 transition w-full sm:w-auto text-center"
        >
          Back
        </Link>
      </div>
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
        >
          Explore Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white drop-shadow-md mb-8"
        >
          Enjoy timeless Nigerian folktales in different languages!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
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

      <section className="mt-12 text-center">
        <Footer />
      </section>
    </div>
  );
}
