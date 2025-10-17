"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Something went wrong
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 mb-8 max-w-md"
      >
        An unexpected error occurred while loading this page.
        Try refreshing or return home.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex gap-4"
      >
        <button
          onClick={() => reset()}
          className="rounded-lg bg-white text-black px-5 py-2 font-medium hover:bg-gray-200 transition"
        >
          Try Again
        </button>

        <a
          href="/"
          className="rounded-lg border border-white px-5 py-2 font-medium hover:bg-white hover:text-black transition"
        >
          Go Home
        </a>
      </motion.div>

      <footer className="absolute bottom-6 text-sm text-gray-600">
        Powered by <span className="font-semibold text-white">AG</span>
      </footer>
    </main>
  );
}
