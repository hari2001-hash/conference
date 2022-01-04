import skcetLogo from '../../Resources/skcetLogo.png';
function navbar(props) {

    const onTabSelected = (event) => {
        props.onTabClicked(event.target.innerText);
    }

    const tabs = ["Home", "About SKCET", "Call for Paper", "Committee", "Contact"];

    return (
        <div className="font-poppins bg-[#272727] w-[15%] h-screen flex items-center justify-center fixed top-0 left-0">
            <div className="absolute top-10">
                <img className="w-15 h-10" src={skcetLogo}  alt="logo" />
            </div>
            <div className="text-white flex flex-col text-center space-y-6">

                {tabs.map((tab) => props.Underline===tab ? <a className="p-[2px] transition-all underline underline-offset-8" key={tab} href="#" onClick={onTabSelected}>{tab}</a> : <a className="p-[2px] transition-all" key={tab}href="#" onClick={onTabSelected}>{tab}</a>)}

            </div>
        </div>  
    );
}

export default navbar;