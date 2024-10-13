import React, { useEffect, useState } from "react";


export default function Counter() {
    const targetDate = '2024-10-21T00:00:00';
    const Countdown = ({ targetDate }: { targetDate: string }) => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft: { [key: string]: number } = {};
            if (difference > 0) {
                timeLeft = {
                    jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    secondes: Math.floor((difference / 1000) % 60)
                };
            }
            return timeLeft;
        };
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearTimeout(timer);
        });
        const timerComponents: React.ReactNode[] = [];
        Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[interval]) {
                return;
            }
            timerComponents.push(
                <span key={interval}>
                    {timeLeft[interval]} {interval}{" "}
                </span>
            );
        });
        return (
            <div>
                {timerComponents.length ? timerComponents : <span>Lancement en cours!</span>}
            </div>
        );
    };

    return (
        <div className="h-screen px-8 mx-auto grid place-items-center text-center">
            <div>
                <Countdown targetDate={targetDate} />
            </div>
        </div>
    );
}
