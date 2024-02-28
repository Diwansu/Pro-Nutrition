import { useState } from "react";
import Total from "./Total";


const FoodBox = ({ food }) => {
  const [counter, setCounter] = useState(0);
  const [totalCal, setTotalCal] = useState(0);

  const handleChange = (e) => setCounter(Number(e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalCal(food.cal * counter);
  };
  const handleReset = () => {
    setCounter(0);
    setTotalCal(0);
  };

  return (
    <div className="flex">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="imageis-64x64">
              <img src={food.img} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="fieldhas-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter a number here"
                  onChange={handleChange}
                />
              </div>
              <div className="control">
                <button onClick={handleSubmit} className="buttonis-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Total name={food.name} totalCal={totalCal} count={counter} />
      <button className="button-reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default FoodBox;
