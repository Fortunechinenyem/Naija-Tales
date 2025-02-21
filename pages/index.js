import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import QuizGame from "@/app/components/QuizGame";
import naijaTalesQuestions from "@/app/components/NaijaTalesQuestions";
import Footer from "@/app/components/Footer";
import ColoringCanvas from "@/app/components/ColoringCanvas";

const funFacts = [
  "Did you know? The tortoise is one of the most famous trickster characters in African folklore!",
  "Anansi the Spider originates from Ghana but is widely known across West Africa!",
  "Drums play a significant role in Nigerian storytelling, signaling events in folktales!",
  "Many Nigerian folktales teach morals and values through animal characters!",
];
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
    title: "The Clever Rabbit",
    language: "Hausa",
    image: "/images/rabbit.jpg",
  },
  {
    id: 8,
    title: "The Talking Drum",
    language: "Igbo",
    image: "/images/drum2.jpg",
  },
];

const characters = [
  {
    name: "Anansi the Spider",
    image: "/images/anansi.jpg",
    description:
      "A cunning trickster who uses intelligence to outwit stronger foes.",
  },
  {
    name: "Tortoise (Ijapa)",
    image: "/images/tortoise.jpg",
    description:
      "A famous character known for his wisdom and occasional mischief.",
  },
  {
    name: "The Talking Drum",
    image: "/images/drum2.jpg",
    description:
      "A magical drum that speaks and plays an important role in folklore.",
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [language, setLanguage] = useState("English");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const toggleMusic = () => {
    const audio = document.querySelector("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-500 to-teal-400 min-h-screen p-8">
      <audio autoPlay loop>
        <source src="/audio/folklore.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-white drop-shadow-lg mb-4"
        >
          Naija Tales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-white drop-shadow-md mb-8"
        >
          Discover magical stories from Nigeria!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link href="/stories">
            <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
              Explore Stories
            </button>
          </Link>
        </motion.div>
      </div>
      {/* <div className="flex justify-center mb-12">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white text-gray-800 font-semibold p-3 rounded-full shadow-xl"
        >
          <option value="English">🇬🇧 English</option>
          <option value="Pidgin">🇳🇬 Pidgin</option>
          <option value="Yoruba">🇳🇬 Yoruba</option>
          <option value="Igbo">🇳🇬 Igbo</option>
          <option value="Hausa">🇳🇬 Hausa</option>
        </select>
      </div> */}
      <div className="text-center mb-7">
        <button
          onClick={toggleMusic}
          className="mt-6 p-3 text-purple-600 bg-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">
            About Naija Tales
          </h2>
          <p className="text-gray-700 text-lg">
            Naija Tales brings Nigerian folktales, myths, and legends to life
            through interactive stories, animations, and games!
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/images/folklore.jpg"
            alt="Naija Tales Mascot"
            width={400}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/drum2.jpg"
            alt="Naija Tales Quiz"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Quiz Game!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Test your knowledge of Nigerian folklore with our fun quiz!
          </p>
          <QuizGame questions={naijaTalesQuestions} />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Featured Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.slice(0, 4).map((story) => (
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
      <section>
        <ColoringCanvas />
      </section>
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-600 text-center mb-6">
          Live Storytelling
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/80ktnPKSCI4"
              title="Live Storytelling"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg text-center mb-12">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">
          Did You Know?
        </h2>
        <p className="text-lg text-gray-700">{funFacts[factIndex]}</p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Character Spotlight
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center"
            >
              <Image
                src={char.image}
                alt={char.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                {char.name}
              </h3>
              <p className="text-gray-600 mt-2">{char.description}</p>
            </motion.div>
          ))}
        </div>
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
              <p className="text-purple-600 font-semibold">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mb-6">
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="mt-4 px-5 py-3 text-base md:text-lg bg-purple-600 text-white rounded-lg cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-md"
        >
          {showReviewForm ? "Close Review Form" : "Leave a Review"}
        </button>
      </div>

      {showReviewForm && (
        <motion.div
          className="mt-6 w-full max-w-sm md:max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ReviewForm />
        </motion.div>
      )}
      <Footer />
    </div>
  );
}

function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message: review }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          "Thank you for your review, really appreciate your feedback."
        );
        setName("");
        setEmail("");
        setReview("");
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg max-w-lg mx-auto w-full"
    >
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-3 md:p-4 text-base md:text-lg border-none rounded-lg bg-white/80 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 md:p-4 text-base md:text-lg border-none rounded-lg bg-white/80 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        className="w-full p-3 md:p-4 text-base md:text-lg border-none rounded-lg bg-white/80 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
        rows={4}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-3 md:p-4 text-base md:text-lg bg-purple-600 text-white rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>

      {message && (
        <p className="mt-4 text-base md:text-lg text-gray-700 font-semibold text-center">
          {message}
        </p>
      )}
    </form>
  );
}
