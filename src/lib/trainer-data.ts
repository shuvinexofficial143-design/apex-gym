export const trainerOverview={
  metrics:[
    {label:"Active clients",value:"18",meta:"+3 this month",accent:true},
    {label:"Sessions this week",value:"24",meta:"6 remaining"},
    {label:"Monthly earnings",value:"₹48.6K",meta:"+12% vs last month",accent:true},
    {label:"Client adherence",value:"84%",meta:"Target: 90%"}
  ],
  todayTitle:"6 coaching sessions",
  today:["7:00 AM · Rahul · Upper Strength","9:00 AM · Ananya · Progress Review","4:00 PM · Dev · Conditioning","5:30 PM · Karan · Lower Strength"],
  priorities:["Review Rahul's squat progression","Update Ananya's nutrition target","Check Dev's conditioning adherence"]
};

export const trainerClients=[
  {id:"APX-20101",name:"Rahul Mehta",goal:"Fat Loss",plan:"Performance",progress:"72%",lastSession:"20 Aug"},
  {id:"APX-20124",name:"Ananya Singh",goal:"Muscle Gain",plan:"Elite",progress:"81%",lastSession:"19 Aug"},
  {id:"APX-20211",name:"Dev Patel",goal:"Performance",plan:"Elite",progress:"67%",lastSession:"18 Aug"},
  {id:"APX-20264",name:"Karan Shah",goal:"Strength",plan:"Performance",progress:"74%",lastSession:"20 Aug"},
  {id:"APX-20302",name:"Meera Joshi",goal:"General Fitness",plan:"Performance",progress:"88%",lastSession:"17 Aug"},
  {id:"APX-20388",name:"Aditi Rao",goal:"Fat Loss",plan:"Essential",progress:"61%",lastSession:"16 Aug"}
];

export const trainerSessions=[
  {id:"S1",time:"7:00 AM",client:"Rahul Mehta",focus:"Upper Strength",duration:"60 min",status:"Completed"},
  {id:"S2",time:"9:00 AM",client:"Ananya Singh",focus:"Progress Review",duration:"30 min",status:"Completed"},
  {id:"S3",time:"4:00 PM",client:"Dev Patel",focus:"Conditioning",duration:"60 min",status:"Upcoming"},
  {id:"S4",time:"5:30 PM",client:"Karan Shah",focus:"Lower Strength",duration:"60 min",status:"Upcoming"}
];

export const trainerSchedule=[
  {day:"Monday",total:4,items:["7:00 Rahul","9:00 Ananya","4:00 Dev","5:30 Karan"]},
  {day:"Tuesday",total:3,items:["8:00 Meera","4:30 Aditi","6:00 Rahul"]},
  {day:"Wednesday",total:5,items:["7:00 Rahul","9:00 Review","3:30 Dev","5:00 Karan","6:30 Ananya"]},
  {day:"Thursday",total:3,items:["8:00 Meera","4:00 Aditi","6:00 Rahul"]},
  {day:"Friday",total:4,items:["7:00 Rahul","10:00 Review","4:30 Dev","6:00 Karan"]},
  {day:"Saturday",total:5,items:["8:00 Open Gym","10:00 Ananya","12:00 Meera","4:00 Aditi","6:00 Review"]}
];

export const clientProgress=[
  {name:"Rahul Mehta",goal:"Fat Loss",progress:72},
  {name:"Ananya Singh",goal:"Muscle Gain",progress:81},
  {name:"Dev Patel",goal:"Performance",progress:67},
  {name:"Karan Shah",goal:"Strength",progress:74},
  {name:"Meera Joshi",goal:"General Fitness",progress:88},
  {name:"Aditi Rao",goal:"Fat Loss",progress:61}
];

export const earningsData=[
  {label:"This month",value:"₹48.6K",meta:"18 days tracked",accent:true},
  {label:"PT sessions",value:"₹34.2K",meta:"38 completed"},
  {label:"Bonuses",value:"₹6.4K",meta:"Retention + sales"},
  {label:"Pending payout",value:"₹8.0K",meta:"Next payout cycle"}
];

export const classOptions=[
  {id:"C1",name:"HIIT Engine",coach:"Kavya",time:"Mon · 7:00 AM",focus:"Conditioning",seats:5},
  {id:"C2",name:"Strength Lab",coach:"Arjun",time:"Mon · 6:30 PM",focus:"Strength",seats:8},
  {id:"C3",name:"Mobility Flow",coach:"Meera",time:"Tue · 7:30 AM",focus:"Mobility",seats:11},
  {id:"C4",name:"Power Circuit",coach:"Rohit",time:"Wed · 6:30 PM",focus:"Performance",seats:4},
  {id:"C5",name:"Core & Control",coach:"Neha",time:"Thu · 7:00 AM",focus:"Core",seats:9},
  {id:"C6",name:"Weekend Lift",coach:"Aman",time:"Sat · 9:00 AM",focus:"Strength",seats:6}
];

export const bookingHistory=[
  {id:"B1",name:"Strength Lab",coach:"Arjun",date:"20 Aug 2026",time:"6:30 PM",status:"Booked"},
  {id:"B2",name:"Mobility Flow",coach:"Meera",date:"18 Aug 2026",time:"7:30 AM",status:"Completed"},
  {id:"B3",name:"HIIT Engine",coach:"Kavya",date:"15 Aug 2026",time:"7:00 AM",status:"Completed"},
  {id:"B4",name:"Power Circuit",coach:"Rohit",date:"13 Aug 2026",time:"6:30 PM",status:"Completed"}
];
