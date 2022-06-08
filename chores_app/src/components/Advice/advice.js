import React, { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState('');
  useEffect(() => {
    const adviceGen = async () => {
      await fetch("https://api.adviceslip.com/advice")
        .then((data) => {
          return data.json();
        })
        .then((advice) => {
          setAdvice(advice.slip.advice);
        });
    };
    adviceGen();
  }, [advice]);

  return (
    <div className="d-flex">
      <div>
      <img src="http://www.clker.com/cliparts/f/T/z/3/Y/b/brightidea-th.png" alt='Brightidea clip art' />
      </div>
      <div>
      <h3 style={{marginTop:"30px", marginLeft:"10px"}}>{advice}</h3>
      </div>
      </div>
  )
};

export default Advice;
