import React from 'react';
import styles from '../styles/Footer.module.css';

import Footerimg from '../assets/Footerimg.png';

function Footer() {
  return (
    <div className={styles.Footer}>
      <div>
        <span>
          <p>Made with</p>
          <p>love by</p>
        </span>
        <p>@cuvette</p>
      </div>

      <div>
        <span>
          <p>Status</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>Documentation</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>Roadmap</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>Pricing</p>
          <img src={Footerimg} alt='Img' />
        </span>
      </div>

      <div>
        <span>
          <p>Discord</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>Github repository</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>Twitter</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>LinkedIn</p>
          <img src={Footerimg} alt='Img' />
        </span>
        <span>
          <p>OSS friends</p>
          <img src={Footerimg} alt='Img' />
        </span>
      </div>

      <div>
        <p>About</p>
        <p>Contact</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
