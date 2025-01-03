import React, { useState, useEffect } from 'react';
import './Footer.scss';
import data from '../../data';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/Aksoni07/')
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <a
      href="https://github.com/Aksoni07/"
      target="_blank"
      className="footer"
    >
      <p>Designed & Built with 💖 by Ashish Kumar Soni</p>
      {githubInfo.stars && githubInfo.forks && (
        <p>
          <span>
            <AiOutlineStar className="icon" />{' '}
            {githubInfo.stars.toLocaleString()}
          </span>
          <span>
            <AiOutlineFork className="icon" />{' '}
            {githubInfo.forks.toLocaleString()}
          </span>
        </p>
      )}
    </a>
  );
};

export default Footer;
