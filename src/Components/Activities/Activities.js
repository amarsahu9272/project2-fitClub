import React from "react";
// import { useRecoilValue } from "recoil";
// import { loginAtom } from "../../atom/Atom";
// import { atom, useRecoilState, useRecoilValue } from "recoil";
// import { loginAtom } from "../../atom/Atom";
// import { selectorValue } from "../../selector/selector";
// import "./Activities.css";
// import { useRecoilState } from "recoil";
// import { loginAtom } from "../../atom/Atom";

function Activities(atomData) {
  // const [logValue, setLogValue] = useRecoilState(loginAtom);
  // const planData =useRecoilValue(loginAtom)
  let cards = [
    "activity1",
    "activity1",
    "activity1",
    "activity1",
    "activity1",
    "activity1",
  ];
  // const planData = useRecoilValue(selectorValue);
  // console.log(planData)
  
  return (
    <>
      <div className="activity">
        {cards.map((value) => (
          <div className="activity-c">{value}</div>
        ))}
      </div>
    </>
  );
}

export default Activities;
