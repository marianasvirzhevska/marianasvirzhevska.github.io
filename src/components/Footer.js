import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <p className="footer__cotyright">&copy;2020 Hyperion Mission, All Rights Reserved.</p>
                <ul className="footer__nav">
                    <li className="footer__nav-item">
                        <Link to="/main" className="footer__nav-link">Home</Link>
                    </li>
                    <li className="footer__nav-item">
                        <Link to="/about" className="footer__nav-link">About</Link>
                    </li>
                    <li className="footer__nav-item">
                        <a href="https://www.figma.com/file/GYckFgBjbuJWbPUBDg0sUA/Hyperion?node-id=0%3A1" target="_blank" className="footer__nav-link">Workflow</a>
                    </li>
                    <li className="footer__nav-item">
                        <a href="https://github.com/marianasvirzhevska/hyperion/commits/develop" target="_blank" className="footer__nav-link">Source</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;