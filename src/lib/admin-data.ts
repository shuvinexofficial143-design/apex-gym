export const adminOverview = {
  metrics: [
    { label: "Active members", value: "2,418", meta: "Membership overview", accent: true },
    { label: "Monthly revenue", value: "₹3.46L", meta: "Revenue overview", accent: true },
    { label: "Today check-ins", value: "386", meta: "Traffic overview" },
    { label: "Renewal risk", value: "74", meta: "Follow-up queue" },
  ],
  alerts: [
    "Membership renewals need follow-up this week.",
    "Pending payment cases need review.",
    "Evening occupancy is trending high.",
    "Several leads still need a follow-up action.",
  ],
};

export const members = [
  { id: "M101", name: "Member A", plan: "Performance", branch: "Main Club", expiry: "Upcoming", status: "Active" },
  { id: "M102", name: "Member B", plan: "Elite", branch: "Main Club", expiry: "Upcoming", status: "Active" },
  { id: "M103", name: "Member C", plan: "Elite", branch: "Main Club", expiry: "Upcoming", status: "Active" },
  { id: "M104", name: "Member D", plan: "Performance", branch: "Main Club", expiry: "Review", status: "Renew" },
  { id: "M105", name: "Member E", plan: "Essential", branch: "Main Club", expiry: "Upcoming", status: "Active" },
];

export const adminTrainers = [
  { id: "T1", name: "Strength Coach", speciality: "Strength", clients: 18, sessions: 38, rating: "4.9" },
  { id: "T2", name: "Transformation Coach", speciality: "Body Composition", clients: 21, sessions: 42, rating: "4.9" },
  { id: "T3", name: "Performance Coach", speciality: "Performance", clients: 16, sessions: 34, rating: "4.8" },
  { id: "T4", name: "Mobility Coach", speciality: "Mobility", clients: 14, sessions: 29, rating: "4.8" },
];

export const staff = [
  { id: "S1", name: "Club Manager", role: "Manager", shift: "Day", attendance: "96%", status: "Active" },
  { id: "S2", name: "Front Desk A", role: "Reception", shift: "Morning", attendance: "94%", status: "Active" },
  { id: "S3", name: "Front Desk B", role: "Reception", shift: "Evening", attendance: "98%", status: "Active" },
  { id: "S4", name: "Accounts", role: "Accountant", shift: "Day", attendance: "92%", status: "Active" },
];

export const membershipAdmin = [
  { id: "P1", name: "Essential", price: "On request", active: 812, renewals: "71%", revenue: "Overview" },
  { id: "P2", name: "Performance", price: "On request", active: 1240, renewals: "82%", revenue: "Overview" },
  { id: "P3", name: "Elite", price: "On request", active: 366, renewals: "87%", revenue: "Overview" },
];

export const adminPayments = [
  { id: "TX1", invoice: "INV-11021", member: "Member A", amount: "—", method: "UPI", status: "Paid" },
  { id: "TX2", invoice: "INV-11022", member: "Member B", amount: "—", method: "Card", status: "Paid" },
  { id: "TX3", invoice: "INV-11023", member: "Member D", amount: "—", method: "UPI", status: "Pending" },
  { id: "TX4", invoice: "INV-11024", member: "Member C", amount: "—", method: "Card", status: "Paid" },
];

export const attendanceAdmin = {
  metrics: [
    { label: "Today", value: "386", meta: "Unique check-ins", accent: true },
    { label: "Current inside", value: "148", meta: "Occupancy overview" },
    { label: "Peak hour", value: "7 PM", meta: "Busiest window" },
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
  { id: "C1", name: "HIIT Engine", trainer: "Group Coach", schedule: "Mon/Fri 7 AM", capacity: 20, booked: 18 },
  { id: "C2", name: "Strength Lab", trainer: "Strength Coach", schedule: "Mon/Wed 6:30 PM", capacity: 16, booked: 14 },
  { id: "C3", name: "Mobility Flow", trainer: "Mobility Coach", schedule: "Tue/Thu 7:30 AM", capacity: 24, booked: 13 },
  { id: "C4", name: "Power Circuit", trainer: "Performance Coach", schedule: "Wed/Fri 6:30 PM", capacity: 18, booked: 17 },
];

export const bookingsAdmin = [
  { id: "B1", member: "Member A", type: "Class", service: "Strength Lab", time: "Today · 6:30 PM", status: "Confirmed" },
  { id: "B2", member: "Member B", type: "PT", service: "Coach Review", time: "Tomorrow · 9:00 AM", status: "Confirmed" },
  { id: "B3", member: "Member C", type: "Class", service: "Power Circuit", time: "Tomorrow · 6:30 PM", status: "Waitlist" },
  { id: "B4", member: "Member D", type: "PT", service: "Lower Strength", time: "Today · 5:30 PM", status: "Completed" },
];

export const expenses = [
  { id: "E1", category: "Payroll", description: "Staff & trainer payroll", amount: "Overview", date: "Current cycle", status: "Paid" },
  { id: "E2", category: "Facility", description: "Electricity & maintenance", amount: "Overview", date: "Current cycle", status: "Paid" },
  { id: "E3", category: "Marketing", description: "Local lead campaign", amount: "Overview", date: "Current cycle", status: "Paid" },
  { id: "E4", category: "Equipment", description: "Equipment maintenance", amount: "Overview", date: "Current cycle", status: "Pending" },
];

export const revenueMetrics = [
  { label: "Memberships", value: "73%", meta: "Share of tracked revenue", accent: true },
  { label: "Personal training", value: "18%", meta: "Share of tracked revenue" },
  { label: "Classes / Add-ons", value: "5%", meta: "Share of tracked revenue" },
  { label: "Retail / Other", value: "4%", meta: "Share of tracked revenue" },
];

export const analyticsMetrics = [
  { label: "Retention", value: "82%", meta: "Member continuity", accent: true },
  { label: "Lead conversion", value: "31%", meta: "Pipeline indicator" },
  { label: "Avg member value", value: "Tracked", meta: "Blended value metric" },
  { label: "Class utilization", value: "74%", meta: "Capacity indicator" },
  { label: "Trial conversion", value: "44%", meta: "Conversion indicator" },
  { label: "Inactive members", value: "126", meta: "Follow-up segment" },
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
  { stage: "New", count: 18, items: ["Lead A · Instagram", "Lead B · Google", "Lead C · Referral"] },
  { stage: "Contacted", count: 13, items: ["Lead D · Call done", "Lead E · WhatsApp", "Lead F · Follow-up"] },
  { stage: "Trial Booked", count: 9, items: ["Lead G · Fri 6 PM", "Lead H · Sat 9 AM"] },
  { stage: "Interested", count: 7, items: ["Lead I · Performance", "Lead J · Elite"] },
  { stage: "Joined", count: 11, items: ["Member F · Performance", "Member G · Essential", "Member H · Elite"] },
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
