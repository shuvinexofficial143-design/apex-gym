export const rewardsCatalog = [
  { id: "R1", name: "Guest Pass", cost: 500, copy: "Use points toward a guest training visit." },
  { id: "R2", name: "APEX Shaker", cost: 800, copy: "Redeem a branded training shaker." },
  { id: "R3", name: "Coaching Session Credit", cost: 1600, copy: "Use points toward an additional coaching session." },
  { id: "R4", name: "Membership Credit", cost: 2000, copy: "Apply reward credit toward a future membership cycle." },
];

export const challenges = [
  { id: "CH1", title: "20 Visits in 30 Days", copy: "Build attendance consistency without missing recovery.", progress: 65, reward: "600 pts", daysLeft: 12 },
  { id: "CH2", title: "Training Volume Week", copy: "Accumulate quality resistance-training volume across the week.", progress: 48, reward: "800 pts", daysLeft: 5 },
  { id: "CH3", title: "Hydration Streak", copy: "Hit your hydration target for 14 consecutive days.", progress: 78, reward: "450 pts", daysLeft: 4 },
  { id: "CH4", title: "Morning Consistency", copy: "Complete 8 check-ins before 9 AM this month.", progress: 50, reward: "500 pts", daysLeft: 10 },
  { id: "CH5", title: "Class Explorer", copy: "Attend four different group class formats.", progress: 75, reward: "700 pts", daysLeft: 9 },
  { id: "CH6", title: "PR Builder", copy: "Record three personal records this month.", progress: 67, reward: "900 pts", daysLeft: 8 },
];

export const leaderboard = [
  { id: "L1", name: "Member A", branch: "Performance Club", score: 7820, streak: 19, me: false },
  { id: "L2", name: "Member B", branch: "Performance Club", score: 7440, streak: 16, me: false },
  { id: "L3", name: "Member C", branch: "Performance Club", score: 7195, streak: 14, me: false },
  { id: "L4", name: "You", branch: "Performance Club", score: 6840, streak: 8, me: true },
  { id: "L5", name: "Member D", branch: "Performance Club", score: 6610, streak: 11, me: false },
  { id: "L6", name: "Member E", branch: "Performance Club", score: 6390, streak: 7, me: false },
];

export const occupancy = {
  current: 62,
  capacity: 100,
  bestTime: "2:00–4:00 PM",
  hours: [
    { time: "6 AM", level: 36 },
    { time: "8 AM", level: 52 },
    { time: "12 PM", level: 30 },
    { time: "4 PM", level: 57 },
    { time: "6 PM", level: 82 },
    { time: "7 PM", level: 94 },
    { time: "9 PM", level: 59 },
  ],
};

export const storeProducts = [
  { id: "P1", name: "APEX Training Tee", price: 899, category: "Apparel", stock: 24 },
  { id: "P2", name: "APEX Shaker", price: 449, category: "Accessory", stock: 38 },
  { id: "P3", name: "Lifting Straps", price: 599, category: "Training Gear", stock: 17 },
  { id: "P4", name: "Gym Towel", price: 349, category: "Accessory", stock: 31 },
  { id: "P5", name: "Resistance Band Set", price: 999, category: "Training Gear", stock: 14 },
  { id: "P6", name: "APEX Hoodie", price: 1699, category: "Apparel", stock: 12 },
];

export const cartSeed = [
  { id: "P1", name: "APEX Training Tee", price: 899, qty: 1 },
  { id: "P5", name: "Resistance Band Set", price: 999, qty: 1 },
  { id: "P2", name: "APEX Shaker", price: 449, qty: 1 },
];

export const orders = [
  { id: "ORD-1041", date: "Recent", items: "Training Tee + Shaker", amount: 1348, status: "Ready for pickup" },
  { id: "ORD-1008", date: "Earlier", items: "Lifting Straps", amount: 599, status: "Completed" },
  { id: "ORD-0972", date: "Earlier", items: "APEX Hoodie", amount: 1699, status: "Completed" },
];

export const reviews = [
  { id: "RV1", name: "Member feedback", type: "Training", copy: "The workout tracking and coach support make it easier to stay consistent." },
  { id: "RV2", name: "Member feedback", type: "Classes", copy: "Class planning and progress reviews keep the experience organized." },
  { id: "RV3", name: "Member feedback", type: "Member tools", copy: "Occupancy and workout tools help make training sessions easier to plan." },
];

export const renewalOptions = [
  { id: "1m", label: "Monthly", price: 0, note: "Flexible renewal option" },
  { id: "3m", label: "Quarterly", price: 0, note: "Longer commitment option" },
  { id: "6m", label: "Half-year", price: 0, note: "Extended membership option" },
  { id: "12m", label: "Annual", price: 0, note: "Long-term membership option" },
];
