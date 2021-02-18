// import React, {Component, useState,useEffect} from "react";
// import '../styles/App.css';
// import Slide from "./Slide";

// const App = ({slides}) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(slides[0]);
//   const handleNext=()=>{
    
//     setCurrentSlideIndex(currentSlideIndex+1);
//     // setCurrentSlide(slides[currentSlideIndex]);
//   }
//   const handlePrev=()=>{
//     setCurrentSlideIndex(currentSlideIndex-1);
//     // setCurrentSlide(slides[currentSlideIndex]);
//   }
//   const handleRestart=()=>{
//     setCurrentSlideIndex(0);
//     // setCurrentSlide(slides[0]);
//   }
//   useEffect(() => {
//     setCurrentSlide(slides[currentSlideIndex]);
    
//   }, [currentSlideIndex])

//   return (
//     <>
//       <Slide currentSlide={currentSlide}/>
//       {(currentSlideIndex == 0) && <button data-testid="button-prev" onClick={handlePrev} disabled>Prev</button>}
//       {!(currentSlideIndex == 0) && <button data-testid="button-prev" onClick={handlePrev} >Prev</button>}
//       {(currentSlideIndex == (slides.length-1)) && <button data-testid="button-next" onClick={handleNext} disabled>Next</button>}
//       {!(currentSlideIndex == (slides.length-1)) && <button data-testid="button-next" onClick={handleNext}>Next</button>}
//       {(currentSlideIndex == 0) && <button data-testid="button-restart" onClick={handleRestart} disabled>Restart</button>}
//       {!(currentSlideIndex == 0) && <button data-testid="button-restart" onClick={handleRestart} >Restart</button>}

//     </>
//   )
// }


// export default App;
import React, {Component, useState,  useEffect} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  const [i,setI]=useState(0);
  const [preDesable,setPreDesable]=useState(false)
  const [nextDesable,setnextDesable]=useState(false);

  function handleNext(){
    if(i<slides.length-1){
      setI(i+1)
    }

  }
  function handlePre(){
    if(i>0){
      setI(i-1)
    }

  }
  useEffect(function(){
    if(i<=0){
      setPreDesable(true)
    }
    else{
      setPreDesable(false)
    }
    if(i===slides.length-1){
      setnextDesable(true)
    }
    else{
      setnextDesable(false)
    }
  },[i,slides])
  function handelReset(){
    setI(0);
  }
  return (
    <div id="main">
      <h1 data-testid="title" id="title">{slides[i].title}</h1>
      <p data-testid="text" id="text">{slides[i].text}</p>
      <button onClick={handlePre} data-testid="button-prev" id="button-prev" disabled={preDesable}>Prev</button>
      <button onClick={handleNext} data-testid="button-next" id="button-next" disabled={nextDesable}>Next</button>
      <button onClick={handelReset} data-testid="button-restart" id="button-restart" disabled={preDesable}>Restart</button>
    </div>
  );
}
export default App;
