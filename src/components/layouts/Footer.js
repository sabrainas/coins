import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


import styles from './Footer.module.css';

function Footer(){
    return(
        <Footer>
            <ul>
                <li>
                    <FaFacebookF/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedinIn/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Coins</span> &copy; 2023
            </p>
        </Footer>
    );
}

export default Footer;