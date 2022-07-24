import AboutConference from "../About/AboutConference"
import AboutSkcet from "../About/AboutSkcet";
import CallForPaper from "../Call for Paper/CallForPaper";
import Committe from "../Committee/Committee";
import Contact from "../Contact/Contact";
//Hari
import Venue from "../Venue/Venue";

function Content(props){

    const tab = props.currentTab;
    const pagestyle = "w-[85%] float-right bg-[#FFFBFB]"
    if(tab === "Home")
    {
        return(
            <div className={pagestyle+"h-screen"}>
                <AboutConference />
            </div>
        );
    }
    else if(tab === "About SKCET")
    {
        return(
            <div className={pagestyle}>
                <AboutSkcet />
            </div>
        );
    }
    else if(tab === "Call for Paper")
    {
        return(
            <div className={pagestyle}>
                <CallForPaper />
            </div>
        );
    }
    else if(tab === "Committee")
    {
        return(
            <div className={pagestyle}>
                <Committe />
            </div>
        );
    }
    else if(tab === "Contact")
    {
        return(
            <div className={pagestyle}>
                <Contact />
            </div>
        );
    }
    else if(tab === "Keynote")
    {
        return(
            <div className={pagestyle}>
                <Contact />
            </div>
        );
    }
      //Hari
    else if(tab === "Venue")
    {
        return(
            <div className={pagestyle}>
                <Venue />
            </div>
          );
    }


}

export default Content;