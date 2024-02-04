import '../css/HomePage.css';
import { useNavigate} from 'react-router-dom';
import flyingpig from '../images/flyingpig.png'
// import budget from '../images/budget.png'
import budget2 from '../images/budget2.png'
import invest from '../images/invest.png'
import taxes from '../images/taxes.png'

function LandingPage() {
    const navigate = useNavigate();
    const handleClickBudget = () => navigate(`/search?service=Budget`);
    const handleClickInvesting = () => navigate(`/search?service=Invest`);
    const handleClickTax = () => navigate(`/search?service=Tax`);

    //scroll down to the About section
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickHome = () => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="main">
            <div className="title-container">
                <div className="title-image" onClick={handleClickHome}>
                    <img src={flyingpig} alt="flying pig" />
                </div>

                <div className="page-title" onClick={handleClickHome}>
                    <h1>Oink</h1>
                </div>
            </div>

            <div className="sub-container">
                <div className="sub-title" onClick={handleClickHome}>
                    <h2>Finance Simplified</h2>
                </div>

                <div className="page-nav">
                    <h2 className="nav-item" onClick={handleClickHome}>Home</h2>

                    {/* add event listener when About is clicked */}
                    <h2 className="nav-item" onClick={handleScrollToAbout}>About</h2>
                </div>
            </div>


            <div className="service-container">
                <h1 className="body-title">Services</h1>

                <div className="icon-container">
                    <button className="icon" onClick={handleClickBudget}>
                        <img src={budget2} alt="paper with a calculator" />
                        <label>Budget & Saving</label>
                    </button>

                    <button className="icon" onClick={handleClickInvesting}>
                        <img src={invest} alt="bar graph with lines and dollar signs" />
                        <label>Investing</label>
                    </button>

                    <button className="icon" onClick={handleClickTax}>
                        <img src={taxes} alt="paper with a check mark" />
                        <label>Filing Taxes</label>
                    </button>
                </div>

            </div>

            <div className="seminar-container">
                <h1 className="body-title">Virtual Seminars</h1>
                <div className="seminar-list">
                    <ul>
                        <li>Learn how to budget like a pro!</li>
                        <li>Investing 101</li>
                        <li>Filing Taxes for Beginners</li>
                    </ul>
                </div>
            </div>

            <div id="about-section" className="about-container">
                <h1 className="body-title">About Us</h1>
                <div className="about-us">
                Generating random paragraphs can be an excellent way for writers to 
                get their creative flow going at the beginning of the day.
                The writer has no idea what topic the random paragraph will be about when it appears. 
                This forces the writer to use creativity to complete one of three common writing challenges. 
                The writer can use the paragraph as the first one of a short story and build upon it. 
                A second option is to use the random paragraph somewhere in a short story they create. 
                The third option is to have the random paragraph be the ending paragraph in a short story. 
                No matter which of these challenges is undertaken, the writer is forced to use creativity to 
                incorporate the paragraph into their writing.
                </div>
            </div>

        </div>
    );
};

export default LandingPage;

// function LandingPage() {
//     return (
//         <div className="main">
//             <div className="title-container">
//                 <div className="page-title">
//                     <h1>Oink</h1>
//                 </div>

//                 <div className="title-image">
//                     <img src={flyingpig} alt="flying pig" />
//                 </div>

//                 <div className="sub-title">
//                     <h2>Finance Simplies</h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LandingPage;