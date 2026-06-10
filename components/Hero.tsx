"use client";

import { motion, type Variants } from "framer-motion";
import { profile, stats } from "@/lib/data";

const PHOTO = "/image/Chamreun%20Odompanha.png";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-content px-6 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
        {/* Left — intro */}
        <motion.div variants={container} initial="hidden" animate="show">
          {profile.availableForWork && (
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="label">Available for work</span>
            </motion.div>
          )}

          <motion.p variants={item} className="text-xl text-muted">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            I&apos;m a{" "}
            <span className="font-medium text-accent">{profile.role}</span>.{" "}
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gradient rounded-xl px-6 py-3 text-sm"
            >
              Say Hello!
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              View work
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </motion.a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-violet-400/40 via-fuchsia-300/30 to-transparent blur-2xl" />
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-surface to-bg shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
