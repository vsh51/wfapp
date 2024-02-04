import React from 'react'
import Days_page_inner from '../components/Days_page_inner'

function SevenDays() {
    return (
        <div className="home_view">
            <Days_page_inner amountOfDays={7} />
        </div>
    )
}

export default SevenDays