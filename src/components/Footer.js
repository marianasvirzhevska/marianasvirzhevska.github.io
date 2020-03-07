import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer__cotyright">© 2020 Hyperion Mission, All Rights Reserved.</p>
                <ul className="footer__nav">
                    <li className="footer__nav-item">
                        <a href="#about" className="footer__nav-link">About</a>
                    </li>
                    <li className="footer__nav-item">
                        <a href="#workflow" className="footer__nav-link">Workflow</a>
                    </li>
                    <li className="footer__nav-item">
                        <a href="#source" className="footer__nav-link">Source</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;