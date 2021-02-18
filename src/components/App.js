import React, {Component, useState,useEffect} from "react";
import '../styles/App.css';
import Slide from "./Slide";

const App = ({slides}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const handleNext=()=>{
    
    setCurrentSlideIndex(currentSlideIndex+1);
    // setCurrentSlide(slides[currentSlideIndex]);
  }
  const handlePrev=()=>{
    setCurrentSlideIndex(currentSlideIndex-1);
    // setCurrentSlide(slides[currentSlideIndex]);
  }
  const handleRestart=()=>{
    setCurrentSlideIndex(0);
    // setCurrentSlide(slides[0]);
  }
  useEffect(() => {
    setCurrentSlide(slides[currentSlideIndex]);
    
  }, [currentSlideIndex])

  return (
    <>
      <Slide currentSlide={currentSlide}/>
      {(currentSlideIndex == 0) && <button data-testid="button-prev" onClick={handlePrev} disabled>Prev</button>}
      {!(currentSlideIndex == 0) && <button data-testid="button-prev" onClick={handlePrev} >Prev</button>}
      {(currentSlideIndex == (slides.length-1)) && <button data-testid="button-next" onClick={handleNext} disabled>Next</button>}
      {!(currentSlideIndex == (slides.length-1)) && <button data-testid="button-next" onClick={handleNext}>Next</button>}
      {(currentSlideIndex == 0) && <button data-testid="button-restart" onClick={handleRestart} disabled>Restart</button>}
      {!(currentSlideIndex == 0) && <button data-testid="button-restart" onClick={handleRestart} >Restart</button>}

    </>
  )
}


export default App;
