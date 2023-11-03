'use client'
import React from 'react';
import Script from "next/script";
import styles from './page.module.css';


export default function Home(): JSX.Element {


  return (
    <>
     <div className={styles.screen}>
      <div className={`${styles.container}`}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        id="google-analytics-script" 
      />

      <Script strategy="lazyOnload" 
       id="google-analytics-inline-script" >
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>


        <div className={styles.textTitle}>
          hi there.
        </div>
        <div className={styles.textBody}>
          My name is Jeffrey, or 鄧畟汷 (dèng cè zhōng) to some.
        </div>
        <div className={styles.textBody}>
          I am a product engineer and an undergraduate cs student studying ai, networks, and hpc at the&nbsp;  
          <a className={styles.underline} href="https://gatech.edu/" rel="noreferrer" target="_blank">
             Georgia Institute of Technology.
          </a>
        </div>
        <div className={styles.textBody}>
          In a personal capacity, I dabble in digital product design, algorithmic game theory, and all things <a className={styles.underline} href="https://hack4impact.org" rel="noreferrer" target="_blank">non-profit work</a>. In my free time, I enjoy Zen, backpacking, poker, and unpopular sports commentary.
        </div>
        <div className={styles.textBody}>
          Want to get in touch? Feel free to shoot me an&nbsp; 
          <a className={styles.underline} href="mailto:jeffreydcz@gatech.edu" rel="noreferrer" target="_blank">
            email
          </a> and check out my other online presences below! I&apos;d always love to chat.
        </div>

        <div className={styles.textLink}>
          <a className={styles.link} href="https://github.com/bat-kryptonyte" rel="noreferrer" target="_blank">
            GitHub
          </a>
          /
          <a className={styles.link} href="https://linkedin.com/in/bat-kryptonyte" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          /
          <a className={styles.link} href="https://instagram.com/jeffreydcz" rel="noreferrer" target="_blank">
            Instagram
          </a>
          /
          <a className={styles.link} href="https://www.zhihu.com/people/bat-kryptonyte" rel="noreferrer" target="_blank">
            知乎
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
