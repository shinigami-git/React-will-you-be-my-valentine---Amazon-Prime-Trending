import React from 'react'

const Slide = ({currentSlide}) => {
    
    return (
        <div>
            <h1 data-testid="title">{currentSlide.title}</h1>
            <p data-testid="text">{currentSlide.text}</p>
        </div>
    )
}

export default Slide
