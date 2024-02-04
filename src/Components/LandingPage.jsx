import '../css/HomePage.css';
import { useNavigate } from 'react-router-dom';
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
    return (
        <div className="main">
            <div className="title-container">
                <div className="title-image">
                    <img src={flyingpig} alt="flying pig" />
                </div>

                <div className="page-title">
                    <h1>Oink</h1>
                </div>
            </div>

            <div className="sub-container">
                <div className="sub-title">
                    <h2>Finance Simplified</h2>
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
                <div className="list-container">
                    <ul>
                        <li>Learn how to budget like a pro!</li>
                        <li>Investing 101</li>
                        <li>Filing Taxes for Beginners</li>
                    </ul>
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