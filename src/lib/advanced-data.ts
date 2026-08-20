export const rewardsCatalog = [
  { id: "R1", name: "Guest Pass", cost: 500, copy: "Bring one friend for a single gym visit." },
  { id: "R2", name: "APEX Shaker", cost: 800, copy: "Redeem a branded training shaker." },
  { id: "R3", name: "PT Session Credit", cost: 1600, copy: "Redeem one personal-training session credit." },
  { id: "R4", name: "₹500 Renewal Credit", cost: 2000, copy: "Apply a demo credit toward your next membership renewal." },
];

export const challenges = [
  { id: "CH1", title: "20 Visits in 30 Days", copy: "Build attendance consistency without missing recovery.", progress: 65, reward: "600 pts", daysLeft: 12 },
  { id: "CH2", title: "100K Volume Week", copy: "Accumulate training volume across tracked resistance sessions.", progress: 48, reward: "800 pts", daysLeft: 5 },
  { id: "CH3", title: "Hydration Streak", copy: "Hit your hydration target for 14 consecutive days.", progress: 78, reward: "450 pts", daysLeft: 4 },
  { id: "CH4", title: "Morning Warrior", copy: "Complete 8 check-ins before 9 AM this month.", progress: 50, reward: "500 pts", daysLeft: 10 },
  { id: "CH5", title: "Class Explorer", copy: "Attend four different group class formats.", progress: 75, reward: "700 pts", daysLeft: 9 },
  { id: "CH6", title: "PR Hunter", copy: "Record three verified personal records this month.", progress: 67, reward: "900 pts", daysLeft: 8 },
];

export const leaderboard = [
  { id: "L1", name: "Ananya Singh", branch: "Central", score: 7820, streak: 19, me: false },
  { id: "L2", name: "Rahul Mehta", branch: "Central", score: 7440, streak: 16, me: false },
  { id: "L3", name: "Dev Patel", branch: "North", score: 7195, streak: 14, me: false },
  { id: "L4", name: "Vishal Parmar", branch: "Central", score: 6840, streak: 8, me: true },
  { id: "L5", name: "Karan Shah", branch: "Central", score: 6610, streak: 11, me: false },
  { id: "L6", name: "Meera Joshi", branch: "North", score: 6390, streak: 7, me: false },
];

export const occupancy = {
  current: 148,
  capacity: 240,
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
  { id: "ORD-1041", date: "19 Aug 2026", items: "Training Tee + Shaker", amount: 1348, status: "Ready for pickup" },
  { id: "ORD-1008", date: "07 Aug 2026", items: "Lifting Straps", amount: 599, status: "Completed" },
  { id: "ORD-0972", date: "22 Jul 2026", items: "APEX Hoodie", amount: 1699, status: "Completed" },
];

export const reviews = [
  { id: "RV1", name: "Rahul Mehta", type: "Member", copy: "The workout tracking and coach support make it much easier to stay consistent." },
  { id: "RV2", name: "Ananya Singh", type: "Elite Member", copy: "Class booking and progress reviews feel organized and premium." },
  { id: "RV3", name: "Dev Patel", type: "Member", copy: "Occupancy information helps me avoid the busiest training window." },
];

export const renewalOptions = [
  { id: "1m", label: "1 Month", price: 2499, note: "Flexible monthly renewal" },
  { id: "3m", label: "3 Months", price: 6999, note: "Save compared with monthly" },
  { id: "6m", label: "6 Months", price: 12999, note: "Better long-term value" },
  { id: "12m", label: "12 Months", price: 22999, note: "Best annual value" },
];
