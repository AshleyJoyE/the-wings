import '../../css/NavBar.css';
import React from "react";
function NavBar(){
    return (
        <div>
             <div className="page-nav">
                    <h2 className="nav-item" onClick={handleClickHome}>Home</h2>

                    {/* add event listener when About is clicked */}
                    <h2 className="nav-item" onClick={handleScrollToAbout}>About</h2>
                </div>
        </div>
    )
}
export default NavBar;