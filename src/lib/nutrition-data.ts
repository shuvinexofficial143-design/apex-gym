export const dailyNutrition={calories:1760,calorieTarget:2450,protein:108,proteinTarget:150,carbs:214,carbTarget:310,water:1.75,waterTarget:2.5};

export const mealPlan=[
  {name:"Breakfast",time:"8:00 AM",calories:520,protein:24,foods:["Oats","Milk","Banana","Peanut Butter"]},
  {name:"Lunch",time:"1:30 PM",calories:720,protein:38,foods:["Rice","Dal","Paneer","Vegetables","Curd"]},
  {name:"Pre-Workout",time:"5:15 PM",calories:260,protein:8,foods:["Banana","Coffee","Toast"]},
  {name:"Dinner",time:"8:30 PM",calories:680,protein:45,foods:["Roti","Protein source","Vegetables","Salad"]},
  {name:"Evening Snack",time:"10:00 PM",calories:220,protein:18,foods:["Milk","Fruit","Nuts"]}
];

export const dietTemplates={
  "Muscle Gain":{meals:[{name:"Breakfast",food:"Oats, milk, banana and peanut butter"},{name:"Lunch",food:"Rice, dal, paneer/chicken, vegetables and curd"},{name:"Pre-workout",food:"Banana, toast and coffee"},{name:"Dinner",food:"Roti, protein source, vegetables and salad"}]},
  "Fat Loss":{meals:[{name:"Breakfast",food:"High-protein oats or eggs with fruit"},{name:"Lunch",food:"Dal/paneer/chicken, vegetables and controlled rice"},{name:"Snack",food:"Fruit, curd or protein snack"},{name:"Dinner",food:"Protein source, vegetables and a lighter carb serving"}]},
  "Maintenance":{meals:[{name:"Breakfast",food:"Balanced oats/eggs, fruit and dairy"},{name:"Lunch",food:"Rice/roti, dal, protein source and vegetables"},{name:"Snack",food:"Fruit, nuts and curd"},{name:"Dinner",food:"Balanced protein, vegetables and carbohydrate"}]}
};

export const fitnessTools=[
  {name:"BMI Calculator",href:"/member/tools/bmi",tag:"BODY",copy:"Estimate body mass index."},
  {name:"BMR Calculator",href:"/member/tools/bmr",tag:"ENERGY",copy:"Estimate resting calories."},
  {name:"TDEE Calculator",href:"/member/tools/tdee",tag:"ENERGY",copy:"Estimate maintenance calories."},
  {name:"Protein Calculator",href:"/member/tools/protein",tag:"NUTRITION",copy:"Estimate daily protein."},
  {name:"Macro Calculator",href:"/member/tools/macros",tag:"NUTRITION",copy:"Split calories into macros."},
  {name:"Water Calculator",href:"/member/tools/water",tag:"HYDRATION",copy:"Estimate daily fluid needs."},
  {name:"Body Fat Estimator",href:"/member/tools/body-fat",tag:"BODY",copy:"Rough circumference estimate."},
  {name:"Ideal Weight Range",href:"/member/tools/ideal-weight",tag:"BODY",copy:"Broad BMI-based reference."},
  {name:"One Rep Max",href:"/member/tools/one-rep-max",tag:"STRENGTH",copy:"Estimate 1RM from a set."}
];
