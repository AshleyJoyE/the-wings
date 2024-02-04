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
                    <h2>Brighter Financial Future for All</h2>
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
                Welcome to Oink, where financial empowerment meets accessibility. We believe that everyone deserves the tools and knowledge to manage their finances effectively, regardless of their background or income level.
                Our mission is to provide individuals with free access to essential financial services because we understand the importance of financial stability and independence in achieving personal goals and building a secure future.
                <br></br>
                <br></br>
                Moreover, we're also about education and empowerment. We recognize the value of early financial education, which is why Oink serves as a learning ground for high school students and individuals of all ages to start their journey towards financial literacy.
                <br></br>
                <br></br>
                Whether you're a recent graduate navigating your first paycheck, a family striving to make ends meet, or someone planning for retirement, Oink is here to support you every step of the way. Our user-friendly platform and expert resources are designed to demystify finance and empower you to take control of your financial well-being.
                <br></br>
                <br></br>
                Lastly, we believe that financial freedom is within reach for everyone. Join us on this journey towards financial stability and independence, and together, let's build a brighter financial future for all.
                <br></br>
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