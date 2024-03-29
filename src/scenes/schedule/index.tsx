import { ClassDay, ClassTime, ScheduledClass, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ScheduledClasses } from "./scheduledata";
import { useState } from "react";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Schedule = ({ setSelectedPage }: Props) => {
    const [selectedDay, setSelectedDay] = useState<ClassDay>(ClassDay.Monday);

    const todaysMorningScheduledClasses =
        ScheduledClasses.find((scheduledClass) => {
            return scheduledClass.day === selectedDay && scheduledClass.time === ClassTime.Morning
        });
    const todaysLunchScheduledClasses =
        ScheduledClasses.find((scheduledClass) => {
            return scheduledClass.day === selectedDay && scheduledClass.time === ClassTime.Lunch
        })
    const todaysAfternoonScheduledClasses =
        ScheduledClasses.find((scheduledClass) => {
            return scheduledClass.day === selectedDay && scheduledClass.time === ClassTime.Afternoon
        })
    const todaysEveningScheduledClasses =
        ScheduledClasses.find((scheduledClass) => {
            return scheduledClass.day === selectedDay && scheduledClass.time === ClassTime.Evening
        })

    const buttonClasses = `
                        capitalize
                        bg-white
                        text-primary-500
                        border-primary-500
                        border
                        rounded-lg
                        w-16
                        h-10
                        cursor-pointer
                        `;

    const buttonSelectedClasses = `
                        capitalize
                        bg-primary-500
                        text-white
                        border-primary-500
                        border
                        rounded-lg
                        w-16
                        h-10
                        cursor-pointer
                        `;

    const tableCellClasses = `
                            border
                            border-primary-500
                            text-center
                            p-2
                            w-32
                            sm:w-40
                            bg-gray-20`;

    return (
        <section id="schedule" className="w-full bg-primary-100 py-40" >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Schedule)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }
                    }
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5" >
                        <HText>Schedule</HText>
                    </div>
                </motion.div>
                <div className="my-5 w-72 flex flex-wrap justify-center gap-2 mx-auto">
                    {Object.keys(ClassDay).map((day: string) => (
                        <button
                            key={/* ts noImplicitAny  will throw error without this casting*/
                                ClassDay[day as keyof typeof ClassDay]
                            }
                            className={ClassDay[day as keyof typeof ClassDay] === selectedDay ? buttonSelectedClasses : buttonClasses}
                            onClick={() => {
                                setSelectedDay(ClassDay[day as keyof typeof ClassDay])
                            }}
                        >{ClassDay[day as keyof typeof ClassDay].substring(0, 3)}
                        </button>
                    ))}
                </div>
                <table className="mx-auto my-5 border-collapse border border-primary-500">
                    <thead>
                        <tr>
                            <th className={tableCellClasses}>Time</th>
                            <th className={tableCellClasses}>Class</th>
                            <th className={tableCellClasses}>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={tableCellClasses}>{ClassTime.Morning}</td>
                            <td className={tableCellClasses}>{todaysMorningScheduledClasses?.name}</td>
                            <td className={tableCellClasses}>{todaysMorningScheduledClasses?.instructor}</td>
                        </tr>
                        <tr>
                            <td className={tableCellClasses}>{ClassTime.Lunch}</td>
                            <td className={tableCellClasses}>{todaysLunchScheduledClasses?.name}</td>
                            <td className={tableCellClasses}>{todaysLunchScheduledClasses?.instructor}</td>
                        </tr>
                        <tr>
                            <td className={tableCellClasses}>{ClassTime.Afternoon}</td>
                            <td className={tableCellClasses}>{todaysAfternoonScheduledClasses?.name}</td>
                            <td className={tableCellClasses}>{todaysAfternoonScheduledClasses?.instructor}</td>
                        </tr>
                        <tr>
                            <td className={tableCellClasses}>{ClassTime.Evening}</td>
                            <td className={tableCellClasses}>{todaysEveningScheduledClasses?.name}</td>
                            <td className={tableCellClasses}>{todaysEveningScheduledClasses?.instructor}</td>
                        </tr>
                    </tbody>

                </table>
            </motion.div>
        </section >
    );
};

export default Schedule;