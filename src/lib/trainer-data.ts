export const trainerOverview={
  metrics:[
    {label:"Active clients",value:"18",meta:"Current coaching roster",accent:true},
    {label:"Sessions this week",value:"24",meta:"6 remaining"},
    {label:"Program updates",value:"7",meta:"This week",accent:true},
    {label:"Client adherence",value:"84%",meta:"Weekly average"}
  ],
  todayTitle:"6 coaching sessions",
  today:["7:00 AM · Member A · Upper Strength","9:00 AM · Member B · Progress Review","4:00 PM · Member C · Conditioning","5:30 PM · Member D · Lower Strength"],
  priorities:["Review squat progression","Update nutrition target","Check conditioning adherence"]
};

export const trainerClients=[
  {id:"APX-20101",name:"Member A",goal:"Fat Loss",plan:"Performance",progress:"72%",lastSession:"Recent"},
  {id:"APX-20124",name:"Member B",goal:"Muscle Gain",plan:"Elite",progress:"81%",lastSession:"Recent"},
  {id:"APX-20211",name:"Member C",goal:"Performance",plan:"Elite",progress:"67%",lastSession:"This week"},
  {id:"APX-20264",name:"Member D",goal:"Strength",plan:"Performance",progress:"74%",lastSession:"This week"},
  {id:"APX-20302",name:"Member E",goal:"General Fitness",plan:"Performance",progress:"88%",lastSession:"This week"},
  {id:"APX-20388",name:"Member F",goal:"Fat Loss",plan:"Essential",progress:"61%",lastSession:"Last week"}
];

export const trainerSessions=[
  {id:"S1",time:"7:00 AM",client:"Member A",focus:"Upper Strength",duration:"60 min",status:"Completed"},
  {id:"S2",time:"9:00 AM",client:"Member B",focus:"Progress Review",duration:"30 min",status:"Completed"},
  {id:"S3",time:"4:00 PM",client:"Member C",focus:"Conditioning",duration:"60 min",status:"Upcoming"},
  {id:"S4",time:"5:30 PM",client:"Member D",focus:"Lower Strength",duration:"60 min",status:"Upcoming"}
];

export const trainerSchedule=[
  {day:"Monday",total:4,items:["7:00 Member A","9:00 Member B","4:00 Member C","5:30 Member D"]},
  {day:"Tuesday",total:3,items:["8:00 Member E","4:30 Member F","6:00 Member A"]},
  {day:"Wednesday",total:5,items:["7:00 Member A","9:00 Review","3:30 Member C","5:00 Member D","6:30 Member B"]},
  {day:"Thursday",total:3,items:["8:00 Member E","4:00 Member F","6:00 Member A"]},
  {day:"Friday",total:4,items:["7:00 Member A","10:00 Review","4:30 Member C","6:00 Member D"]},
  {day:"Saturday",total:5,items:["8:00 Open Gym","10:00 Member B","12:00 Member E","4:00 Member F","6:00 Review"]}
];

export const clientProgress=[
  {name:"Member A",goal:"Fat Loss",progress:72},
  {name:"Member B",goal:"Muscle Gain",progress:81},
  {name:"Member C",goal:"Performance",progress:67},
  {name:"Member D",goal:"Strength",progress:74},
  {name:"Member E",goal:"General Fitness",progress:88},
  {name:"Member F",goal:"Fat Loss",progress:61}
];

export const earningsData=[
  {label:"Coaching activity",value:"24",meta:"Sessions this week",accent:true},
  {label:"PT sessions",value:"38",meta:"Current cycle"},
  {label:"Retention",value:"86%",meta:"Client continuity"},
  {label:"Reviews due",value:"6",meta:"Next coaching cycle"}
];

export const classOptions=[
  {id:"C1",name:"HIIT Engine",coach:"Group Coach",time:"Mon · 7:00 AM",focus:"Conditioning",seats:5},
  {id:"C2",name:"Strength Lab",coach:"Strength Coach",time:"Mon · 6:30 PM",focus:"Strength",seats:8},
  {id:"C3",name:"Mobility Flow",coach:"Mobility Coach",time:"Tue · 7:30 AM",focus:"Mobility",seats:11},
  {id:"C4",name:"Power Circuit",coach:"Performance Coach",time:"Wed · 6:30 PM",focus:"Performance",seats:4},
  {id:"C5",name:"Core & Control",coach:"Transformation Coach",time:"Thu · 7:00 AM",focus:"Core",seats:9},
  {id:"C6",name:"Weekend Lift",coach:"Strength Coach",time:"Sat · 9:00 AM",focus:"Strength",seats:6}
];

export const bookingHistory=[
  {id:"B1",name:"Strength Lab",coach:"Strength Coach",date:"Recent",time:"6:30 PM",status:"Booked"},
  {id:"B2",name:"Mobility Flow",coach:"Mobility Coach",date:"Recent",time:"7:30 AM",status:"Completed"},
  {id:"B3",name:"HIIT Engine",coach:"Group Coach",date:"Earlier",time:"7:00 AM",status:"Completed"},
  {id:"B4",name:"Power Circuit",coach:"Performance Coach",date:"Earlier",time:"6:30 PM",status:"Completed"}
];
