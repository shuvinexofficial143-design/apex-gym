export const memberOverview={
  metrics:[
    {label:"Current streak",value:"8 days",meta:"+2 vs last week",accent:true},
    {label:"Visits this month",value:"17",meta:"Goal: 22 visits"},
    {label:"Current weight",value:"68.4 kg",meta:"−1.8 kg this month"},
    {label:"Membership",value:"Active",meta:"72 days remaining",accent:true}
  ],
  todayWorkout:{title:"Upper Strength",copy:"Pressing strength, controlled pulling volume and accessory work.",exercises:["Bench Press","Lat Pulldown","Incline DB Press","Cable Row","Lateral Raise"]},
  weeklyGoals:[{label:"Workouts",value:80},{label:"Protein target",value:72},{label:"Water intake",value:88}]
};
export const memberProfile={name:"Vishal Parmar",memberId:"Member ID: APX-20481",details:[
  {label:"Email",value:"vishal@example.com"},{label:"Mobile",value:"+91 98765 43210"},{label:"Date of birth",value:"12 May 2007"},{label:"Primary goal",value:"Muscle gain"},{label:"Preferred time",value:"Evening"},{label:"Home branch",value:"APEX Central"}
]};
export const membershipStatus={plan:"Performance",validity:"20 Aug 2026 → 31 Oct 2026",daysLeft:72,autoRenew:"Off · Enable later from payment settings",features:["Full gym access","Group classes","Monthly coach review","Progress dashboard"]};
export const attendanceHistory=[
  {date:"20 Aug 2026",time:"6:14 PM",duration:"1h 18m",status:"Checked in"},{date:"19 Aug 2026",time:"6:02 PM",duration:"1h 11m",status:"Completed"},{date:"18 Aug 2026",time:"6:25 PM",duration:"58m",status:"Completed"},{date:"16 Aug 2026",time:"7:03 AM",duration:"1h 06m",status:"Completed"}
];
export const paymentHistory=[
  {invoice:"INV-10841",date:"01 Aug 2026",description:"Performance membership",amount:"2,499",status:"Paid"},{invoice:"INV-10402",date:"01 Jul 2026",description:"Performance membership",amount:"2,499",status:"Paid"},{invoice:"INV-09971",date:"01 Jun 2026",description:"Performance membership",amount:"2,499",status:"Paid"}
];
export const progressData={metrics:[
  {label:"Weight",value:"68.4 kg",meta:"Start: 72.1 kg"},{label:"Body fat",value:"17.8%",meta:"Start: 21.4%"},{label:"Waist",value:"81 cm",meta:"−7 cm"},{label:"Bench press",value:"72.5 kg",meta:"+17.5 kg"}
],goals:[{label:"Target weight progress",value:68},{label:"Monthly attendance goal",value:77},{label:"Strength target progress",value:81}]};
export const workoutSummary=[
  {day:"Monday",focus:"Upper Strength",duration:"65 min",exercises:["Bench Press","Pulldown","Row","Shoulder Press"]},{day:"Tuesday",focus:"Lower Strength",duration:"70 min",exercises:["Squat","RDL","Leg Press","Calf Raise"]},{day:"Thursday",focus:"Upper Hypertrophy",duration:"60 min",exercises:["Incline Press","Cable Row","Fly","Arms"]},{day:"Saturday",focus:"Lower + Conditioning",duration:"70 min",exercises:["Deadlift","Split Squat","Ham Curl","Bike"]}
];
export const dietPlan={calories:2450,protein:150,carbs:310,fats:68,meals:[
  {name:"Breakfast",food:"Oats, milk, banana, peanut butter"},{name:"Lunch",food:"Rice, dal, paneer, vegetables, curd"},{name:"Pre-workout",food:"Banana + coffee"},{name:"Dinner",food:"Roti, paneer/chicken, vegetables, salad"}
]};
export const notifications=[
  {title:"Workout scheduled",copy:"Upper Strength is planned for today at your preferred training time.",time:"2h",unread:true},{title:"Membership active",copy:"Your Performance membership is active with 72 days remaining.",time:"1d",unread:true},{title:"Attendance milestone",copy:"You completed 17 gym visits this month.",time:"2d",unread:false},{title:"Progress review",copy:"Your next monthly coach review is due this week.",time:"3d",unread:false}
];

export const memberDashboard = {
  metrics: [
    {
      label: "Current Streak",
      value: "8 days",
      meta: "+2 vs last week",
    },
    {
      label: "Visits This Month",
      value: "17",
      meta: "Goal: 22 visits",
    },
    {
      label: "Current Weight",
      value: "68.4 kg",
      meta: "-1.8 kg this month",
    },
    {
      label: "Membership",
      value: "Active",
      meta: "72 days remaining",
    },
  ],
  today: {
    title: "Upper Strength",
    copy: "Pressing strength, controlled pulling volume and accessory work.",
    exercises: [
      "Bench Press",
      "Lat Pulldown",
      "Incline DB Press",
      "Cable Row",
    ],
  },
  progress: [
    {
      label: "Workouts",
      value: 80,
      meta: "4 of 5 weekly sessions",
    },
    {
      label: "Protein Target",
      value: 72,
      meta: "108g of 150g",
    },
    {
      label: "Water Intake",
      value: 88,
      meta: "2.2L of 2.5L",
    },
  ],
};
