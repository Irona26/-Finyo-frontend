import "./style.css";

function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-contacts" id="footer">
                <h4>For questions<br/>and suggestions</h4>
                <a className="contacts" href="mailto:email@contact.com" title="email">email@shelter.com</a>
                <a className="contacts" href="tel:+13 6745677554" title="phone number">+13 674 567 75 54</a>
            </div>
            <div className="footer-newsletter">
                <h4>Newsletter</h4>
                <p>Email address:</p>
                <input type="newsletter" value="Enter your email adress"></input>
            </div>
            <div className="links">
                <h4>Quick Links</h4>
                <ul className="nav-links">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#blog" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul> 
            </div>
        </div>
        <div className="footer-socials">
            <p>Instagram</p>
            <p>Telegram</p>
            <p>VK</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Viber</p>
        </div>
    </footer>
    )
}
export default Footer;
