import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";
import Image from "next/image";
import stories from "@/app/components/Stories";
import Link from "next/link";

const StoryPage = () => {
  const router = useRouter();
  const { id, lang } = router.query;
  const [story, setStory] = useState(null);
  const [audio, setAudio] = useState(null);
  const [availableLanguages, setAvailableLanguages] = useState([]);

  useEffect(() => {
    if (id) {
      // Get all stories with the same ID but different languages
      const storyVariants = stories.filter((s) => s.id === parseInt(id));
      setAvailableLanguages(storyVariants.map((s) => s.language));

      // Find the correct story in the selected language (default to English if lang is missing)
      const fetchedStory = storyVariants.find(
        (s) => s.language === (lang || "English")
      );

      if (fetchedStory) {
        setStory(fetchedStory);
        const sound = new Howl({ src: [fetchedStory.audio] });
        setAudio(sound);
        sound.play();
      }
    }
  }, [id, lang]);

  const handleChoice = (next) => {
    router.push(`/story/${next}?lang=${lang || "English"}`);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    router.push(`/story/${id}?lang=${selectedLanguage}`);
  };

  if (!story) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-purple-600 to-teal-500 min-h-screen p-8">
      <div className=" mb-9 flex flex-wrap justify-between items-center mb-4 gap-2">
        <select
          onChange={handleLanguageChange}
          value={lang || "English"}
          className="bg-white text-black px-4 py-2 rounded-md shadow-md w-full sm:w-auto"
        >
          {availableLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <Link
          href="/stories"
          className="bg-white text-purple-600 font-bold px-4 py-2 rounded-md shadow-md hover:bg-purple-100 transition w-full sm:w-auto text-center"
        >
          Back
        </Link>
      </div>

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
