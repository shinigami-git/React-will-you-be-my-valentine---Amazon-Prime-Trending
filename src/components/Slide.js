import React from 'react'

const Slide = ({currentSlide}) => {
    
    return (
        <>
            <h1 data-testid="title">{currentSlide.title}</h1>
            <p data-testid="text">{currentSlide.text}</p>
        </>
    )
}

export default Slide
