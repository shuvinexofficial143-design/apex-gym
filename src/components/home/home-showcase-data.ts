export type ShowcaseSlide = {
  title: string;
  accent: string;
  copy: string;
  tagline: string;
  badge: string;
  stat: string;
  statLabel: string;
  chip: string;
};

export const appShowcaseSlides: ShowcaseSlide[] = [
  {
    title: "Train anywhere,\nanytime",
    accent: "Workout Studio",
    copy: "Browse HIIT, strength, yoga, recovery and custom programs in a phone-first training view.",
    tagline: "APEX WORKOUTS",
    badge: "24/7",
    stat: "180+",
    statLabel: "guided sessions",
    chip: "Cardio • Strength • Yoga",
  },
  {
    title: "Eat smart:\n1000+ recipes",
    accent: "Nutrition Hub",
    copy: "Build meal plans, track calories and snap meals for instant AI insights.",
    tagline: "APEX NUTRITION",
    badge: "AI",
    stat: "92%",
    statLabel: "weekly adherence",
    chip: "Macros • Recipes • Insights",
  },
  {
    title: "Recharge your\nmind & mood",
    accent: "Recovery Zone",
    copy: "Meditation, breathwork, mobility and sleep-support sessions keep recovery inside the same app.",
    tagline: "RECOVERY",
    badge: "ZEN",
    stat: "10m",
    statLabel: "daily reset",
    chip: "Breathwork • Sleep • Focus",
  },
];
