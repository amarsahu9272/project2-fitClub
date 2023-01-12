// import React from "react";
// import "./About.css";
// import ReactPlayer from "react-player";
// function About() {
//   return (
//     <div className="about">
//       <div className="about-l">
//         <div className="player">
//           <ReactPlayer
//             controls
//             url="https://youtu.be/BR0jT6JxH-o"
//             height="12rem"
//             width="12rem"
//           />
//         </div>
//         <div className="para-u">
//           <p>Random paragraph because there is no sentence coming in my mind</p>
//         </div>
//       </div>
//       <div className="about-r">
//         <div className="player">
//           <p>Random paragraph because there is no sentence coming in my mind</p>
//         </div>
//         <div className="para-d">
//         <ReactPlayer
//             controls
//             url="https://youtu.be/BR0jT6JxH-o"
//             height="12rem"
//             width="12rem"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import "./About.css";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="abt-video" id="About">
          <ReactPlayer
            width="80vw"
            controls
            url="https://youtu.be/BR0jT6JxH-o"
          />
          <div className="text">
            <h1>About us</h1>
            <div className="text-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              veritatis hic neque corporis eos nobis quibusdam et, adipisci,
              debitis obcaecati odit iste accusantium placeat quaerat eligendi
              dolorem architecto libero necessitatibus?Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Optio qui nostrum fuga
              repudiandae minima accusantium quasi, at fugiat velit sed eum
              voluptatum corrupti expedita sequi natus beatae quis possimus
              quibusdam.
              <div className="btn-warn">
                <button style={{color:"white", backgroundColor:"red"}}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us">
          <h1>Why Choose US?</h1>
          <div className="text-2">
            <li>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor illum laborum, saepe architecto vero earum libero dolores
                modi? Et soluta eum aut facilis, quis nemo deserunt dignissimos
                adipisci ea.
              </span>
            </li>
            <div>
              <li>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ut facilis at ipsa! Mollitia aut, consequuntur
                  eligendi aliquid eum accusamus quos facere. Deleniti, impedit
                  provident laboriosam ipsam in aliquam minus.
                </span>
              </li>
            </div>
          </div>
        </div>
        <div className="right-v" id="About">
          <span>
            <ReactPlayer
              width="20vw"
              controls
              url="https://youtu.be/BR0jT6JxH-o"
            />
          </span>
        </div>
        <hr />
      </div>{" "}
    </>
  );
};

export default About;
