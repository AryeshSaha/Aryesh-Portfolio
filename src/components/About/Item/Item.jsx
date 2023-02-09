import React from "react";

const a1 = [
  <div>HTML</div>,
  <div>CSS</div>,
  <div>React JS</div>,
  <div>Node JS</div>,
  <div>React-Native</div>,
  <div>MySQL</div>,
];
const a2 = [
  <div>Raevex Internet(Wix Website)</div>,
  <div>Snackeroos</div>,
  <div>MoviesInf.</div>,

];
const a3 = [
  <div><span>10th</span> <br /> Percentage : 78 </div>,
  <div><span>12th</span> <br /> Percentage : 65.75 </div>,
  <div><span>BCA 3rd Year(ongoing)</span> <br /> CGPA : 8.8 </div>,
];

export const Item = ({ clicked }) => {
  return (
    <div>
      <div>
        {clicked === 1
          ? a1.map((it, index) => {
              return (<li key={index}>{it}</li>);
            })
          : clicked === 2
          ? a2.map((it, index) => {
              return (<li key={index}>{it}</li>);
            })
          : clicked === 3
          ? a3.map((it, index) => {
              return (<li key={index}>{it}</li>);
            })
          : ""}
      </div>
    </div>
  );
};
