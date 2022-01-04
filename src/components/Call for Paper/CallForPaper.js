import React from "react";
import Heading from "../General/Heading";
import Title from "../General/Title";
import StripTitle from "./StripTitle";
import List from "./List";

function CallForPaper() {
    const Contents1 = ["Robot Design","Mobile Industrial Robots","Multi Robot Systems","Mechatronics and Robotics","Rescue Robots","Robot Intelligence","Medical Robotics","Cloud Robotics","Cognitive Robotics","Tele Robotics","Underwater Robotics","Soft Robotics","Micro Robots","Field and Service Robots","Drone Technology"]
    const Contents2 = ["PLC and Microcontrollers","Automation Applications","Fluid Power Technology","Advanced Process Control","Intelligent Automation","Additive Manufacturing","Stochastic Control", "Advanced Control Algorithms","Sensor Technology","Artificial Intelligence","Internet of Things","Intelligent Systems & Algorithm","Machine Learning","Big Data and Data Analytics"]
    const dates = ["Conference date: 21.4.2022 & 22.4.2022","Paper submission: 11.02.2022","Acceptance date: 25.02.2022","Camera ready paper: 11.03.2022","Registration last date: 31.03.2022"]
    return(
        <div>
            <Heading />
            <div>
                <Title title="Call for Paper"/>
                <p className="text-center text-[1.1rem] mt-3">The contributing papers are invited to the following broad categories</p>
            </div>
            <div>
                <StripTitle title="Innovation in Robotics" />
                <div className="flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-[25rem] gap-3 list-disc">
                        {Contents1.map((content1) => <List content={content1} style = "w-[17rem] text-[1.1rem]" key={content1}/>)}
                    </ul>
                </div>
            </div>
            <div>
                <StripTitle title="Intelligent Automation and Control" />
                <div className="flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-[25rem] gap-3 list-disc">
                        {Contents2.map((content1) => <List content={content1} style = "w-[17rem] text-[1.1rem]" key={content1}/>)}
                    </ul>
                </div>
            </div>
            <div className="ml-[7rem] my-[4rem]">
                <h3 className="text-[1.2rem] mb-[.8rem] font-semibold">Important Dates</h3>
                <div className="pl-[4rem]">
                    <ul className="list-disc">
                        {dates.map((date) => <List content={date} style = "text-[1.1rem] mb-[.8rem]" key={date}/>)}
                    </ul>
                </div>
            </div>
            <div className="ml-[7rem] mb-[3rem]">
                <h3 className="text-[1.2rem] mb-[.8rem] font-semibold">Publication</h3>
                <p className="pl-[4rem] text-[1.1rem]">All the accepted and presented papers will be published in Scopus Indexed Journal.</p>
            </div>
        </div>
    );
}

export default CallForPaper;