export const adminOverview = {
  metrics: [
    { label: "Active members", value: "2,418", meta: "+94 this month", accent: true },
    { label: "Monthly revenue", value: "₹3.46L", meta: "+11.8% vs last month", accent: true },
    { label: "Today check-ins", value: "386", meta: "Peak: 6–8 PM" },
    { label: "Renewal risk", value: "74", meta: "Needs follow-up" },
  ],
  alerts: [
    "31 memberships expire within 7 days.",
    "9 failed or pending payments need review.",
    "Evening occupancy crossed 85% yesterday.",
    "14 leads have no follow-up scheduled.",
  ],
};

export const members = [
  { id: "M101", name: "Rahul Mehta", plan: "Performance", branch: "Central", expiry: "31 Aug 2026", status: "Active" },
  { id: "M102", name: "Ananya Singh", plan: "Elite", branch: "Central", expiry: "15 Sep 2026", status: "Active" },
  { id: "M103", name: "Dev Patel", plan: "Elite", branch: "North", expiry: "24 Aug 2026", status: "Active" },
  { id: "M104", name: "Karan Shah", plan: "Performance", branch: "Central", expiry: "20 Aug 2026", status: "Renew" },
  { id: "M105", name: "Meera Joshi", plan: "Essential", branch: "North", expiry: "30 Sep 2026", status: "Active" },
];

export const adminTrainers = [
  { id: "T1", name: "Arjun Kapoor", speciality: "Strength", clients: 18, sessions: 38, rating: "4.9" },
  { id: "T2", name: "Neha Sharma", speciality: "Transformation", clients: 21, sessions: 42, rating: "4.9" },
  { id: "T3", name: "Rohit Verma", speciality: "Performance", clients: 16, sessions: 34, rating: "4.8" },
  { id: "T4", name: "Meera Patel", speciality: "Mobility", clients: 14, sessions: 29, rating: "4.8" },
];

export const staff = [
  { id: "S1", name: "Aman Tiwari", role: "Manager", shift: "9 AM–6 PM", attendance: "96%", status: "Active" },
  { id: "S2", name: "Riya Verma", role: "Reception", shift: "6 AM–2 PM", attendance: "94%", status: "Active" },
  { id: "S3", name: "Pooja Shah", role: "Reception", shift: "2 PM–10 PM", attendance: "98%", status: "Active" },
  { id: "S4", name: "Kunal Rao", role: "Accountant", shift: "10 AM–7 PM", attendance: "92%", status: "Active" },
];

export const membershipAdmin = [
  { id: "P1", name: "Essential", price: "₹1,499", active: 812, renewals: "71%", revenue: "₹12.2L" },
  { id: "P2", name: "Performance", price: "₹2,499", active: 1240, renewals: "82%", revenue: "₹31.0L" },
  { id: "P3", name: "Elite", price: "₹4,999", active: 366, renewals: "87%", revenue: "₹18.3L" },
];

export const adminPayments = [
  { id: "TX1", invoice: "INV-11021", member: "Rahul Mehta", amount: "₹2,499", method: "UPI", status: "Paid" },
  { id: "TX2", invoice: "INV-11022", member: "Ananya Singh", amount: "₹4,999", method: "Card", status: "Paid" },
  { id: "TX3", invoice: "INV-11023", member: "Karan Shah", amount: "₹2,499", method: "UPI", status: "Pending" },
  { id: "TX4", invoice: "INV-11024", member: "Dev Patel", amount: "₹4,999", method: "Card", status: "Paid" },
];

export const attendanceAdmin = {
  metrics: [
    { label: "Today", value: "386", meta: "Unique check-ins", accent: true },
    { label: "Current inside", value: "148", meta: "61% capacity" },
    { label: "Peak hour", value: "7 PM", meta: "Avg 226 members" },
  ],
  hours: [
    { time: "6 AM", count: 88, percent: 36 },
    { time: "8 AM", count: 126, percent: 52 },
    { time: "12 PM", count: 74, percent: 30 },
    { time: "4 PM", count: 138, percent: 57 },
    { time: "6 PM", count: 198, percent: 82 },
    { time: "7 PM", count: 226, percent: 94 },
    { time: "9 PM", count: 142, percent: 59 },
  ],
};

export const adminClasses = [
  { id: "C1", name: "HIIT Engine", trainer: "Kavya", schedule: "Mon/Fri 7 AM", capacity: 20, booked: 18 },
  { id: "C2", name: "Strength Lab", trainer: "Arjun", schedule: "Mon/Wed 6:30 PM", capacity: 16, booked: 14 },
  { id: "C3", name: "Mobility Flow", trainer: "Meera", schedule: "Tue/Thu 7:30 AM", capacity: 24, booked: 13 },
  { id: "C4", name: "Power Circuit", trainer: "Rohit", schedule: "Wed/Fri 6:30 PM", capacity: 18, booked: 17 },
];

export const bookingsAdmin = [
  { id: "B1", member: "Rahul Mehta", type: "Class", service: "Strength Lab", time: "20 Aug · 6:30 PM", status: "Confirmed" },
  { id: "B2", member: "Ananya Singh", type: "PT", service: "Coach Review", time: "21 Aug · 9:00 AM", status: "Confirmed" },
  { id: "B3", member: "Dev Patel", type: "Class", service: "Power Circuit", time: "21 Aug · 6:30 PM", status: "Waitlist" },
  { id: "B4", member: "Karan Shah", type: "PT", service: "Lower Strength", time: "20 Aug · 5:30 PM", status: "Completed" },
];

export const expenses = [
  { id: "E1", category: "Payroll", description: "Staff & trainer payroll", amount: "₹1.18L", date: "01 Aug", status: "Paid" },
  { id: "E2", category: "Facility", description: "Electricity & maintenance", amount: "₹42K", date: "08 Aug", status: "Paid" },
  { id: "E3", category: "Marketing", description: "Local lead campaign", amount: "₹18K", date: "12 Aug", status: "Paid" },
  { id: "E4", category: "Equipment", description: "Cable attachments", amount: "₹26K", date: "18 Aug", status: "Pending" },
];

export const revenueMetrics = [
  { label: "Memberships", value: "₹2.54L", meta: "73% of monthly revenue", accent: true },
  { label: "Personal training", value: "₹61K", meta: "18% of revenue" },
  { label: "Classes / Add-ons", value: "₹19K", meta: "5% of revenue" },
  { label: "Retail / Other", value: "₹12K", meta: "4% of revenue" },
];

export const analyticsMetrics = [
  { label: "Retention", value: "82%", meta: "+4.2 pts QoQ", accent: true },
  { label: "Lead conversion", value: "31%", meta: "+6% this month" },
  { label: "Avg member value", value: "₹3,420", meta: "Monthly blended" },
  { label: "Class utilization", value: "74%", meta: "+8% this month" },
  { label: "Trial conversion", value: "44%", meta: "Target: 50%" },
  { label: "Inactive members", value: "126", meta: "10+ days absent" },
];

export const revenueByMonth = [
  { month: "Mar", value: 245000 },
  { month: "Apr", value: 268000 },
  { month: "May", value: 282000 },
  { month: "Jun", value: 301000 },
  { month: "Jul", value: 309000 },
  { month: "Aug", value: 346000 },
];

export const leadPipeline = [
  { stage: "New", count: 18, items: ["Rohan · Instagram", "Nisha · Google", "Amit · Referral"] },
  { stage: "Contacted", count: 13, items: ["Priya · Call done", "Harsh · WhatsApp", "Nitin · Follow-up"] },
  { stage: "Trial Booked", count: 9, items: ["Sahil · Fri 6 PM", "Mansi · Sat 9 AM"] },
  { stage: "Interested", count: 7, items: ["Kriti · Performance", "Yash · Elite"] },
  { stage: "Joined", count: 11, items: ["Rajat · Performance", "Tina · Essential", "Aarav · Elite"] },
];

export const roleDefaults = [
  { name: "Manager", permissions: [
    { name: "Members", enabled: true }, { name: "Payments", enabled: true }, { name: "Staff", enabled: true }, { name: "Analytics", enabled: true }, { name: "Roles", enabled: false },
  ]},
  { name: "Receptionist", permissions: [
    { name: "Members", enabled: true }, { name: "Attendance", enabled: true }, { name: "Bookings", enabled: true }, { name: "Payments", enabled: false }, { name: "Analytics", enabled: false },
  ]},
  { name: "Trainer", permissions: [
    { name: "Clients", enabled: true }, { name: "Workouts", enabled: true }, { name: "Diet", enabled: true }, { name: "Payments", enabled: false }, { name: "Staff", enabled: false },
  ]},
  { name: "Accountant", permissions: [
    { name: "Payments", enabled: true }, { name: "Expenses", enabled: true }, { name: "Revenue", enabled: true }, { name: "Members", enabled: false }, { name: "Roles", enabled: false },
  ]},
];
