import "./App.css";
import { AiFillStar, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import Socialicons from "./components/Socialicons";
function App() {
  return (
    <>
      <div className="px-10 py-5 border-b-2 border-black">
        <header className="flex justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-5xl ">Kshitij Dutt</h2>
            <h3 className="text-2xl">Software Developer</h3>
            <h4 className="">Experience - 1.5 years</h4>
          </div>
          <div className="flex flex-col gap-y-2 my-5">
            <Socialicons
              Icon={<AiOutlineMail />}
              text="kshtjdutt07@gmail.com"
            />
            <Socialicons Icon={<BsTelephoneFill />} text="+91 8368415893" />
            <Socialicons Icon={<GoLocation />} text="New Delhi, India" />
            <Socialicons
              Icon={<FaLinkedin />}
              text="linkedin.com/in/kshitij-dutt-70663916b/"
            />
          </div>
        </header>
      </div>
      <div className="mx-5 flex flex-col gap-y-5 my-5">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between">
            <div className="w-1/2 flex flex-col gap-y-4">
              <div>
                <h4 className="text-2xl font-bold uppercase">
                  professional Summary
                </h4>
                <p className="font-medium">
                  I am full stack javascript developer. I have got good
                  knowledge of Data Structures and Algorithms, JavaScript
                  development and competitive programming. I have made open
                  source contributions on github as well. I also have a YouTube
                  channel where I post technology tutorials.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase">
                  Work Experience
                </h4>
                <ul className="flex flex-col">
                  <li className="flex flex-col gap-y-2">
                    <div className="flex gap-x-2 items-center justify-between">
                      <h5 className="text-xl font-medium">
                        Parangat Technologies
                      </h5>
                      <p className="text-xs">April 2022 - present</p>
                    </div>
                    <ul className="list-disc px-5">
                      <li>
                        Worked on integration of projects with Leeway-hertz
                        client
                      </li>
                      <li>
                        Worked on React Auroscholar web application, with a user
                        database of 1000000
                      </li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-y-2">
                    <div className="flex gap-x-2 items-center justify-between">
                      <h5 className="text-xl font-medium">
                        CoralMango Solutions
                      </h5>
                      <p className="text-xs">October 2021 - March 2022</p>
                    </div>
                    <ul className="list-disc px-5">
                      <li>
                        Worked on developing frontend components for the project
                      </li>
                      <li>
                        Worked on the full stack framework blitz.js integrating
                        file saving methods
                      </li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-y-2">
                    <div className="flex gap-x-2 items-center justify-between">
                      <h5 className="text-xl font-medium">CRMNext</h5>
                      <p className="text-xs">April 2021 - October 2021</p>
                    </div>
                    <ul className="list-disc px-5">
                      <li>
                        Worked as a graduate engineer trainee, giving frontend
                        solutions for the product
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold uppercase">Education </h4>
                <h6 className="text-lg font-medium">
                  Delhi Technological Univeristy
                </h6>
                <div className="flex justify-between">
                  <p>Bachelor of Technology</p>
                  <p className="text-xs">2017-2021</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 mx-5 flex flex-col gap-y-5">
              <div>
                <h4 className="text-2xl font-bold uppercase">skills</h4>
                <ul className="grid grid-cols-3 list-disc mx-5">
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>React js</li>
                  <li>Node js</li>
                  <li>MongoDB</li>
                  <li>Data Structures</li>
                  <li>Competitive Programming</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold uppercase">projects</h4>
                <div>
                  <div className="flex justify-between">
                    <h6 className="text-lg font-medium">
                      React Auroscholar Web App
                    </h6>
                    <p className="text-xs">August 2022 - Present</p>
                  </div>

                  <ul className="list-disc mx-5">
                    <li>
                      <p>Technologies: Javascript, React, Node, Bootstrap</p>
                    </li>
                    <li>
                      <p>
                        Developing a Scholar website for client side in Sri
                        Aurobindo society for Arts and Communication. This web
                        application has a database of more than 10,00,000 users
                        for which same website has been created.
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h6 className="text-lg font-medium">SmartSwap</h6>
                    <p className="text-xs">April 2022 - August 2022</p>
                  </div>

                  <ul className="list-disc mx-5">
                    <li>
                      <p>
                        Technologies: Javascript, React, Node, Bootstrap,
                        Ethereum Wallet
                      </p>
                    </li>
                    <li>
                      <p>
                        A cryptocurrency based project which allows users to
                        swap between 2 digital modes of currencies. Developed
                        modules on that and integrated APIs as well.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold uppercase">Achievements</h4>
                <ul className="list-disc">
                  <li className="mx-5">
                    <span className="flex items-center">
                      4 <AiFillStar /> on Codechef
                    </span>
                  </li>
                  <li className="mx-5">
                    <span className="flex items-center">
                      200+ problems on leetcode
                    </span>
                  </li>
                  <li className="mx-5">
                    <span className="flex items-center">
                      Open source contributions on github
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
