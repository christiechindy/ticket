import React, { useState } from 'react';
import PersonCard from './components/PersonCard';
import { timeframes } from './data/timeframes';
import ThingsCard from './components/ThingsCard';

export type TFreq = "daily" | "weekly" | "monthly";
export const frequencies:TFreq[] = ["daily", "weekly", "monthly"];

function App() {
    const [chosenFreq, setChosenFreq] = useState<TFreq>("weekly");

    return (
        <div className="App">
            <div className="container">
                <PersonCard name='Stacey Castillo' freq={chosenFreq} setFreq={setChosenFreq} />

                {timeframes.map((d,i) => (
                    <ThingsCard category={d.title} current={d.timeframes[chosenFreq].current} frequency={chosenFreq} previous={d.timeframes[chosenFreq].previous} key={i} />
                ))}
            </div>
        </div>
    );
}

export default App;
