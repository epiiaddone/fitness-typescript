import { ClassDay, ClassInstructor, ClassName, ClassTime, ScheduledClass } from "@/shared/types";


export const ScheduledClasses: Array<ScheduledClass> = [
    {
        name: ClassName.AbCore,
        day: ClassDay.Monday,
        time: ClassTime.Morning,
        instructor: ClassInstructor.Becky
    },
    {
        name: ClassName.Adventure,
        day: ClassDay.Monday,
        time: ClassTime.Lunch,
        instructor: ClassInstructor.Becky
    },
    {
        name: ClassName.Yoga,
        day: ClassDay.Monday,
        time: ClassTime.Afternoon,
        instructor: ClassInstructor.Gavin
    },
    {
        name: ClassName.WeightTraining,
        day: ClassDay.Monday,
        time: ClassTime.Evening,
        instructor: ClassInstructor.Gavin
    },
    {
        name: ClassName.WeightTraining,
        day: ClassDay.Tuesday,
        time: ClassTime.Morning,
        instructor: ClassInstructor.Ryan
    },
    {
        name: ClassName.Fitness,
        day: ClassDay.Tuesday,
        time: ClassTime.Evening,
        instructor: ClassInstructor.Xena
    },
]