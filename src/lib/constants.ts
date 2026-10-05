export const gymStats = [
  { value: "COACHED", label: "Structured training" },
  { value: "TRACKED", label: "Progress reviews" },
  { value: "FLEXIBLE", label: "Membership support" },
  { value: "CONNECTED", label: "Member experience" },
];

export const programs = [
  {
    title: "Strength",
    description:
      "Progressive barbell and machine-based training for measurable strength, control and confidence.",
    meta: "Power · Technique · Progression",
  },
  {
    title: "Transformation",
    description:
      "Structured fat-loss and muscle-building programs supported by coaching, tracking and accountability.",
    meta: "Body composition · Habit · Consistency",
  },
  {
    title: "Performance",
    description:
      "Athletic conditioning built around speed, mobility, work capacity and resilient movement.",
    meta: "Conditioning · Mobility · Athleticism",
  },
];

export const plans = [
  {
    name: "Essential",
    price: "",
    featured: false,
    features: ["Gym floor access", "Basic fitness assessment", "Member dashboard access"],
  },
  {
    name: "Performance",
    price: "",
    featured: true,
    features: ["Everything in Essential", "Coach reviews", "Classes + progress tracking"],
  },
  {
    name: "Elite",
    price: "",
    featured: false,
    features: ["Everything in Performance", "Personal training sessions", "Priority support"],
  },
];

export const trainers = [
  {
    initials: "SC",
    name: "Strength Coach",
    role: "Strength & Conditioning",
    bio: "Focused on barbell strength, movement quality and long-term athletic development.",
  },
  {
    initials: "TC",
    name: "Transformation Coach",
    role: "Body Composition",
    bio: "Combines sustainable training, accountability and measurable body-composition goals.",
  },
  {
    initials: "PC",
    name: "Performance Coach",
    role: "Athletic Performance",
    bio: "Builds high-output conditioning systems for athletes and ambitious everyday members.",
  },
];

export const testimonials = [
  {
    name: "Training clarity",
    result: "Structured sessions",
    quote:
      "Programs keep the next training step clear, measurable and connected to a specific goal.",
  },
  {
    name: "Coaching support",
    result: "Accountability",
    quote:
      "Coach reviews keep technique, progression and consistency visible throughout the training journey.",
  },
  {
    name: "Progress visibility",
    result: "Trackable habits",
    quote:
      "Attendance, workouts and progress tools make it easier to understand what is actually improving.",
  },
];
