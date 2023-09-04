import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [peoples, setPeoples] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let lastIndex = peoples.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, peoples]);

  useEffect(()=>{
    let slider= setInterval(()=>{
      setIndex(index+1);

    },3000);
   return ()=>{
    clearInterval(slider);
   };
  },[index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {peoples.map((people, peopleIndex) => {
          const { id, image, name, title, quote } = people;
          let position = "nextSlide";

          if (index === peopleIndex) {
            position = "activeSlide";
          }
          if (
            index === peopleIndex - 1 ||
            (index === 0 && peopleIndex === peoples.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>

        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
