import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer(){
    return(
        <Footer>
            <ul>
                <li>
                    <a href="https://www.facebook.com/Costs-100909090/" target="_blank" rel="noreferrer">
                        <FaFacebook className={styles.icon}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/costs_/" target="_blank" rel="noreferrer">
                        <FaInstagram className={styles.icon}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/costs/" target="_blank" rel="noreferrer">
                        <FaLinkedin className={styles.icon}/>
                    </a>
                </li>
            </ul>
        </Footer>
    );
}

export default Footer;