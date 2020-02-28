import React from "react";
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/style.css';


const Nav = () => {
    return (
        <div className="row">
            <div className="four columns">
                <h1><a href="/">McCabe Northup</a></h1>
            </div>
            <div className="four columns">
                <h4 className="hNav"><a href="/portfolio">Portfolio</a></h4>
            </div>
            <div className="four columns">
                <h4 className="hNav"><a href="/contact">Contact Me</a></h4>
            </div>
        </div>
    );
};

export default Nav;