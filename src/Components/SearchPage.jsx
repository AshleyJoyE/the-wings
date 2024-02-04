import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import flyingpig from '../images/flyingpig.png'
import '../css/HomePage.css';
import '../css/SearchPage.css';
import Provider from './SubComponents/Provider';

function SearchPage () {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('service');

    const navigate = useNavigate();
    // go to Home
    const handleClickHome = () => navigate(`/`);

    // Scroll to About section after handling Home click
    const handleScrollToAbout = () => {
        handleClickHome(); // Call handleClickHome first
        // Scroll to About section after handling Home click
        setTimeout(() => { // Delay the scroll to About section for a smoother transition
            const aboutSection = document.getElementById('about-section');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (message === "Tax") {
                    const response = await fetch("http://localhost:3010/api/getTax");
                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    setData(data);
                } else if (message === "Budget") {
                    const response = await fetch("http://localhost:3010/api/getSaving");
                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    setData(data);
                } else {
                    const response = await fetch("http://localhost:3010/api/getInvestment");
                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    setData(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData(); 
    }, [message]); 


    return (
        <div>
            {/* {message}*/}

            <div className="title-container">
                <div className="title-image" onClick={handleClickHome}>
                    <img src={flyingpig} alt="flying pig"/>
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

            <div className='container'>
                <div className="list-container">
                    <div className="list-title">Here is a list of professionals offering help:</div>
                    <div className="help-list">
                        <ul>
                            <li>Professional personnel</li>
                                <ul>
                                <li>Company</li>
                                <li>Address</li>
                                </ul>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                            <li>Professional personnel</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="results-container">
          {data.map((x) => (
            <Provider key={x.id} data={x} />
          ))}
        </div>
            </div>
          

            
        </div>
    );
};
export default SearchPage;