export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  schedule = "schedule",
  ContactUs = "contactus",
}

export enum ClassName {
  AbCore = "Ab Core",
  Adventure = "Adventure",
  Fitness = "Fitness",
  WeightTraining = "Weight Training",
  Yoga = "Yoga",
}

export enum ClassInstructor {
  Gavin = "Gavin",
  Becky = "Becky",
  David = "David",
  Ryan = "Ryan",
  Xena = "Xena"
}

export enum ClassDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

export enum ClassTime {
  Morning = "10am - 11am",
  Lunch = "12pm - 1pm",
  Afternoon = "2pm - 3.30pm",
  Evening = "7pm - 9pm"
}


export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: ClassName;
  description?: string;
  image: string;
}

export interface ScheduledClass {
  name: ClassName,
  day: ClassDay,
  time: ClassTime,
  instructor: ClassInstructor
}
