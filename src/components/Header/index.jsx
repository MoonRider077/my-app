import React from "react";
import styles from "./Header.module.scss";
import { SearchIcon, SocialMediasIcon } from "../../assets/icons";
import { LogoImg } from "../../assets/images";
import { Link } from "react-router-dom";
import { HeaderMenu } from "../../constants";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo_card}>
        <img src={LogoImg} alt="" />
        <img src={SocialMediasIcon} alt="" />
      </div>
      <div className={styles.header_menu}>
        <ul>
          {Object.entries(HeaderMenu).map(([key, value]) => (
            <li key={key}>
              <Link to={`/${key}`}>{value}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btns}>
        <button className={styles.search_btn}>
          <img src={SearchIcon} alt="" />
        </button>
        <button className={styles.login_btn}>Войти</button>
      </div>
    </div>
  );
}

export default Header;
