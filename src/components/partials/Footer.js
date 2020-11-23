import React from "react";


function Footer() {

    const currentYear = new Date().getFullYear()
    return(
        <footer className="mb-2">
             <div className="container d-flex flex-column flex-lg-row justify-content-center align-item-center">
                <div className=" mr-2">&#169;Copyright {currentYear}
                </div>
                <div className="">EEU Software
                </div>
            </div>
        </footer>

    );
}

export default Footer;