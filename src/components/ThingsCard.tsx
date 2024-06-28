import React from 'react'
import Menu from '../assets/Menu';

interface IProps {
    category: string,
    current: number,
    previous: number,
    frequency: string,
}

const ThingsCard = ({category, current, previous, frequency}: IProps) => {
    const textPrevious = frequency==="daily" ? "Yesterday" 
                        : 
                        frequency==="weekly" ? "Last Week"
                        : "Last Month"

    return (
        <div className={`things-card ${category}`}>
            <img src={`/${category}.svg`} alt={category} />
            <div className="info-card">
                <div className="top">
                    <div className="category">{category}</div>
                    <Menu />
                </div>
                <div className="middle">
                    <span className="number">{current}</span>
                    <span className="completed">Completed</span>
                </div>
                <div className="bottom">
                    {textPrevious}: {previous} Completed
                </div>
            </div>
        </div>
    )
}

export default ThingsCard