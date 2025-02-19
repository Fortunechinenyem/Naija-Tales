import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "The Tortoise and the Birds",
    language: "English",
    audio: "/audio/tortoise.mp3",
    text: "Once upon a time, the tortoise wanted to fly with the birds. The birds agreed to help him, but the tortoise had a trick up his sleeve...",
    image: "/images/tortoise.jpg",
    choices: [
      { text: "Fly with the birds", next: 2 },
      { text: "Stay on the ground", next: 3 },
    ],
  },
  {
    id: 2,
    title: "Anansi the Spider",
    language: "Pidgin",
    audio: "/audio/anansi.mp3",
    text: "Anansi the spider was known for his cunning and trickery. One day, he decided to outsmart the entire village...",
    image: "/images/anansi.jpg",
    choices: [
      { text: "Trick the villagers", next: 4 },
      { text: "Help the villagers", next: 5 },
    ],
  },
  {
    id: 3,
    title: "The Lion and the Mouse",
    language: "Yoruba",
    audio: "/audio/lion.mp3",
    text: "A tiny mouse once saved a mighty lion from a hunter's trap. The lion learned that even the smallest creatures can be of great help...",
    image: "/images/lion.jpg",
    choices: [
      { text: "Help the lion", next: 6 },
      { text: "Ignore the lion", next: 7 },
    ],
  },
  {
    id: 4,
    title: "The King's Drum",
    language: "Igbo",
    audio: "/audio/drum.mp3",
    text: "The king's drum was a magical instrument that could summon rain. One day, it was stolen by a jealous rival...",
    image: "/images/drum.jpg",
    choices: [
      { text: "Search for the drum", next: 8 },
      { text: "Ask the gods for help", next: 9 },
    ],
  },
  {
    id: 5,
    title: "The Magic Calabash",
    language: "Hausa",
    audio: "/audio/calabash.mp3",
    text: "A young girl found a magic calabash that could produce endless food. But she had to be careful not to misuse its power...",
    image: "/images/calabash.jpg",
    choices: [
      { text: "Share the food", next: 10 },
      { text: "Keep it a secret", next: 11 },
    ],
  },
  {
    id: 6,
    title: "The Brave Hunter",
    language: "Yoruba",
    audio: "/audio/hunter.mp3",
    text: "A brave hunter once saved his village from a ferocious lion. But the lion had a secret that changed everything...",
    image: "/images/hunter.jpg",
    choices: [
      { text: "Fight the lion", next: 12 },
      { text: "Befriend the lion", next: 13 },
    ],
  },
  {
    id: 7,
    title: "The Clever Hare",
    language: "Pidgin",
    audio: "/audio/hare.mp3",
    text: "The hare was small but very clever. He found a way to trick the greedy hyena and teach him a lesson...",
    image: "/images/hare.jpg",
    choices: [
      { text: "Trick the hyena", next: 14 },
      { text: "Run away", next: 15 },
    ],
  },
  {
    id: 8,
    title: "The Talking Drum",
    language: "Igbo",
    audio: "/audio/talking_drum.mp3",
    text: "A young boy discovered a drum that could talk. It led him on an adventure he never expected...",
    image: "/images/drum2.jpg",
    choices: [
      { text: "Follow the drum's voice", next: 16 },
      { text: "Ignore the drum", next: 17 },
    ],
  },
];

const StoryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [story, setStory] = useState(null);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchedStory = stories.find((story) => story.id === parseInt(id));
      if (fetchedStory) {
        setStory(fetchedStory);

        const sound = new Howl({ src: [fetchedStory.audio] });
        setAudio(sound);
        sound.play();
      }
    }
  }, [id]);

  const handleChoice = (next) => {
    router.push(`/story/${next}`);
  };

  if (!story) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-green-400 to-yellow-400 min-h-screen p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
      >
        {story.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 w-full md:h-96 mb-8"
      >
        <Image
          src={story.image}
          alt={story.title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-xl"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-lora text-lg text-white mb-8 text-center"
      >
        {story.text}
      </motion.p>

      <div className="space-y-4">
        {story.choices.map((choice) => (
          <motion.button
            key={choice.next}
            onClick={() => handleChoice(choice.next)}
            className="bg-white text-green-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-100 transition-colors w-full md:w-auto"
          >
            {choice.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StoryPage;
