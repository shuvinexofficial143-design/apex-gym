export const calculateBMI=(w:number,h:number)=>w/Math.pow(Math.max(h,1)/100,2);
export function bmiLabel(b:number){if(b<18.5)return"Below reference range";if(b<25)return"Reference range";if(b<30)return"Above reference range";return"High BMI range"}
export function calculateBMR(w:number,h:number,a:number,sex:"male"|"female"){const base=10*w+6.25*h-5*a;return sex==="male"?base+5:base-161}
export const calculateTDEE=(bmr:number,activity:number)=>bmr*activity;
export const calculateProtein=(w:number,factor:number)=>w*factor;
export function calculateMacros(cal:number,p:number,c:number,f:number){return{protein:Math.round(cal*(p/100)/4),carbs:Math.round(cal*(c/100)/4),fats:Math.round(cal*(f/100)/9)}}
export const calculateWater=(w:number,minutes:number)=>w*.035+(minutes/30)*.35;
export function estimateBodyFat(waist:number,neck:number,height:number){const wi=Math.max(waist,1)/2.54,ni=Math.max(neck,1)/2.54,hi=Math.max(height,1)/2.54,d=Math.max(wi-ni,.1);const r=86.010*Math.log10(d)-70.041*Math.log10(hi)+36.76;return Math.max(2,Math.min(r,60))}
export function idealWeightRange(h:number){const m=Math.max(h,1)/100;return{min:18.5*m*m,max:24.9*m*m}}
export function estimateOneRepMax(w:number,reps:number){const r=Math.max(1,Math.min(reps,15));return w*(1+r/30)}
