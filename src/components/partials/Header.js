import React from "react";

function Header() {
    return (
        <header>
            <div className="container d-flex flex-column flex-md-row justify-content-start justify-content-md-between align-item-start py-2 ">
            
                <div className="flex-item">
                    <img src="assets/LogoBkBlack.png" />
                </div>
                <div className="flex-item text-white text-md-center text-left py-2">
                    din 2000
                </div>
            </div>
        </header>
    );
}
export default Header;