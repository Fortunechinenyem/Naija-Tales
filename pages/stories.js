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
    language: "Hausa",
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
    title: "The Clever Rabbit",
    language: "Pidgin",
    image: "/images/rabbit.jpg",
  },
  {
    id: 8,
    title: "The Talking Drum",
    language: "Igbo",
    image: "/images/drum2.jpg",
  },
  {
    id: 9,
    title: "The Tree of Life",
    language: "Igbo",
    image: "/images/tree.jpg",
  },
  {
    id: 10,
    title: "The Eagle and the Chick",
    language: "Yoruba",
    image: "/images/eagle.jpg",
  },
  {
    id: 11,
    title: "The Hunter and the Enchanted Deer",
    language: "Hausa",
    image: "/images/deer.jpg",
  },
  {
    id: 12,
    title: "The Fox and the Drum",
    language: "Pidgin",
    image: "/images/fox.jpg",
  },
  {
    id: 13,
    title: "The River Spirit’s Gift",
    language: "Efik",
    image: "/images/river.jpg",
  },
  {
    id: 14,
    title: "The Talking Skull",
    language: "Igbo",
    image: "/images/skull.jpg",
  },
  {
    id: 15,
    title: "The Woman Who Refused to Share",
    language: "Tiv",
    image: "/images/woman.jpg",
  },
  {
    id: 16,
    title: "How the Sun and Moon Came to Be",
    language: "Yoruba",
    image: "/images/sunmoon.jpg",
  },
  {
    id: 17,

    title: "The Elephant and the Tortoise",
    language: "Yoruba",

    image: "/images/elephant.jpg",
  },
  {
    id: 18,
    title: "The Magic Pot",
    language: "Yoruba",
    image: "/images/pot.jpg",
  },
  {
    id: 19,
    title: "The Wise Crab",
    language: "Yoruba",
    image: "/images/crab.jpg",
  },
  {
    id: 20,
    title: "The Singing Stone",
    language: "Yoruba",
    image: "/images/stone.jpg",
  },
  {
    id: 21,
    title: "The Enchanted Fish",
    language: "Hausa",
    image: "/images/fish.jpg",
  },
  {
    id: 22,
    title: "The Gaint's Secret",
    language: "Yoruba",
    image: "/images/giant.jpg",
  },
  {
    id: 23,
    title: "The Moonlit Dance",
    language: "igbo",
    image: "/images/dance.jpg",
  },
  {
    id: 24,
    title: "The Talking Drum",
    language: "Yoruba",
    image: "/images/drum.jpg",
  },
  {
    id: 25,
    title: "The Clever Tortoise",
    language: "igbo",
    image: "/images/tortoise.jpg",
  },
  {
    id: 26,
    title: "The King’s Lost Crown",
    language: "Yoruba",
    image: "/images/crown.jpg",
  },
  {
    id: 27,
    title: "The River's Spirit's Gift",
    language: "Yoruba",
    image: "/images/river.jpg",
  },
  {
    id: 28,
    title: "The Enchanted Flute",
    language: "Igbo",
    image: "/images/flute.jpg",
  },
  {
    id: 29,
    title: "The Firefly’s Secret",
    language: "Yoruba",
    image: "/images/firefly.jpg",
  },
  {
    id: 30,
    title: "The Kind Leaopard",
    language: "Igbo",
    image: "/images/leopard.jpg",
  },
  {
    id: 31,
    title: "The Farmer and the Talking Yam",
    language: "Yoruba",
    image: "/images/yam.jpg",
  },
  {
    id: 32,
    title: "The Fisherman’s Fortune",
    language: "Yoruba",
    image: "/images/fisherman.jpg",
  },
];

const languages = ["All", ...new Set(stories.map((story) => story.language))];

export default function Stories() {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredStories =
    selectedLanguage === "All"
      ? stories
      : stories.filter((story) => story.language === selectedLanguage);

  return (
    <div className="bg-gradient-to-b from-purple-600 to-teal-500 min-h-screen p-8">
      <div className="mb-7 flex justify-between items-center">
        <Link
          href="/"
          className="bg-white text-purple-600 font-bold px-4 py-2 rounded-md shadow-md hover:bg-purple-100 transition"
        >
          Back
        </Link>
        <select
          className="px-4 py-2 rounded-md bg-white text-gray-700 shadow-md cursor-pointer"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
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
        {filteredStories.map((story) => (
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
