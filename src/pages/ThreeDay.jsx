import React from 'react'
import Days_page_inner from '../components/Days_page_inner'

function ThreeDay() {
    return (
        <div className="home_view">
            <Days_page_inner amountOfDays={3} />
        </div>
    )
}

export default ThreeDay