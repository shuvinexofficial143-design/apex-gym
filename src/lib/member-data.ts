export const memberOverview={
  metrics:[
    {label:"Current streak",value:"8 days",meta:"Strong consistency",accent:true},
    {label:"Visits this month",value:"17",meta:"Goal: 22 visits"},
    {label:"Training status",value:"On track",meta:"4 sessions this week"},
    {label:"Membership",value:"Active",meta:"Performance plan",accent:true}
  ],
  todayWorkout:{title:"Upper Strength",copy:"Pressing strength, controlled pulling volume and accessory work.",exercises:["Bench Press","Lat Pulldown","Incline DB Press","Cable Row","Lateral Raise"]},
  weeklyGoals:[{label:"Workouts",value:80},{label:"Protein target",value:72},{label:"Water intake",value:88}]
};

export const memberProfile={
  name:"APEX Member",
  memberId:"Member ID: APX-20481",
  details:[
    {label:"Primary goal",value:"Muscle gain"},
    {label:"Experience",value:"Intermediate"},
    {label:"Preferred time",value:"Evening"},
    {label:"Training days",value:"4 days / week"},
    {label:"Membership",value:"Performance"},
    {label:"Home club",value:"APEX Performance Club"}
  ]
};

export const membershipStatus={
  plan:"Performance",
  validity:"Active membership",
  daysLeft:72,
  autoRenew:"Manage renewal preferences from membership settings",
  features:["Full gym access","Group classes","Coach reviews","Progress dashboard"]
};

export const attendanceHistory=[
  {date:"This week",time:"6:14 PM",duration:"1h 18m",status:"Completed"},
  {date:"This week",time:"6:02 PM",duration:"1h 11m",status:"Completed"},
  {date:"Last week",time:"6:25 PM",duration:"58m",status:"Completed"},
  {date:"Last week",time:"7:03 AM",duration:"1h 06m",status:"Completed"}
];

export const paymentHistory=[
  {invoice:"INV-10841",date:"Recent",description:"Performance membership",amount:"—",status:"Paid"},
  {invoice:"INV-10402",date:"Previous cycle",description:"Performance membership",amount:"—",status:"Paid"},
  {invoice:"INV-09971",date:"Earlier cycle",description:"Performance membership",amount:"—",status:"Paid"}
];

export const progressData={metrics:[
  {label:"Training consistency",value:"82%",meta:"Up this month"},
  {label:"Strength index",value:"+14%",meta:"Current block"},
  {label:"Session completion",value:"17",meta:"This month"},
  {label:"Recovery score",value:"Good",meta:"Based on check-ins"}
],goals:[
  {label:"Monthly attendance goal",value:77},
  {label:"Strength target progress",value:81},
  {label:"Weekly recovery target",value:74}
]};

export const workoutSummary=[
  {day:"Monday",focus:"Upper Strength",duration:"65 min",exercises:["Bench Press","Pulldown","Row","Shoulder Press"]},
  {day:"Tuesday",focus:"Lower Strength",duration:"70 min",exercises:["Squat","RDL","Leg Press","Calf Raise"]},
  {day:"Thursday",focus:"Upper Hypertrophy",duration:"60 min",exercises:["Incline Press","Cable Row","Fly","Arms"]},
  {day:"Saturday",focus:"Lower + Conditioning",duration:"70 min",exercises:["Deadlift","Split Squat","Ham Curl","Bike"]}
];

export const dietPlan={calories:2450,protein:150,carbs:310,fats:68,meals:[
  {name:"Breakfast",food:"Oats, milk, banana, peanut butter"},
  {name:"Lunch",food:"Rice, dal, paneer, vegetables, curd"},
  {name:"Pre-workout",food:"Banana + coffee"},
  {name:"Dinner",food:"Roti, protein source, vegetables, salad"}
]};

export const notifications=[
  {title:"Workout scheduled",copy:"Upper Strength is planned for your preferred training window.",time:"2h",unread:true},
  {title:"Membership active",copy:"Your Performance membership is active.",time:"1d",unread:true},
  {title:"Attendance milestone",copy:"Your monthly gym consistency is trending upward.",time:"2d",unread:false},
  {title:"Progress review",copy:"Your next coaching review is ready to schedule.",time:"3d",unread:false}
];

export const memberDashboard = {
  metrics: [
    { label: "Current Streak", value: "8 days", meta: "Consistency on track" },
    { label: "Visits This Month", value: "17", meta: "Goal: 22 visits" },
    { label: "Training Status", value: "On track", meta: "4 sessions this week" },
    { label: "Membership", value: "Active", meta: "Performance plan" },
  ],
  today: {
    title: "Upper Strength",
    copy: "Pressing strength, controlled pulling volume and accessory work.",
    exercises: ["Bench Press","Lat Pulldown","Incline DB Press","Cable Row"],
  },
  progress: [
    { label: "Workouts", value: 80, meta: "4 of 5 weekly sessions" },
    { label: "Protein Target", value: 72, meta: "Daily target progress" },
    { label: "Water Intake", value: 88, meta: "Hydration target progress" },
  ],
};
