import React from "react";
import Title from "../General/Title";
// import navbar from "../General/Navbar";
import Heading from "../General/Heading";

function Venue() {

    const location = "SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY, KUNIAMUTHUR, COIMBATORE - 641008 AN AUTONOMOUS INSTITUTION, AFFILIATED TO ANNA UNVERSITY, ACCREDITED BY NAAC WITH ‘A’ GRADE";

    return (<div className="flex flex-col px-[3rem] font-poppins">
        <Heading />
        <Title title="Venue" />
        <br></br>
    
        <div>
            <p className="box-border block text-left">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY, <br></br>KUNIAMUTHUR, <br></br>COIMBATORE - 641008 <br></br>COIMBATORE,<br></br>TAMILNADU</p>
            <br></br>
        
            <div className="relative text-right w-[818px] h-[512px]"><div className="overflow-hidden w-[818px] h-[512px]"><iframe className="w-[818px] h-[512px]" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=818&amp;height=512&amp;hl=en&amp;q=skcet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">FNF Mods</a></div>
            <style></style></div>
                   </div>
    </div>);
}

export default Venue;


// {position:relative;text-align:right;width:818px;height:512px;}
// .gmap_canvas {overflow:hidden;background:none!important;width:818px;height:512px;}
// gmap_iframe {width:818px!important;height:512px!important;}

// box-sizing border-box
// color rgb(51, 51, 51)
// display block
// font-family "Source Sans Pro"

// font-size 16px
// font-weight 400
// height 120px
// line-height 24px
// margin-block-end 16px
// margin-block-start 0px
// margin-bottom 16px
// margin-inline-end 0px
// margin-inline-start 0px
// margin-top 0px
// text-align justify
// text-size-adjust 100%
// width 690px
// -webkit-tap-highlight-color rgba(0, 0, 0, 0)

