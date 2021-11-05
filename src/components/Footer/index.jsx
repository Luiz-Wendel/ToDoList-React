import React from 'react';
import style from './style.module.css';

const gitHubLink = 'https://github.com/Luiz-Wendel';

const Footer = () => {
  const gitHubAnchor = <a className={style.link} href={gitHubLink}>Luiz Wendel</a>;

  return (
    <footer className={style.footer}>
      <p>
        {`Copyright 2021-${new Date().getFullYear()} by `}
        {gitHubAnchor}
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
