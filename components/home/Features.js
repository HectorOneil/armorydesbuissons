import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from '../../styles/Home.module.css';
import screenLogo from '../../public/svgs/screen-logo.svg';
import shape from '../../public/svgs/shapes/shape1.svg';

function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className={styles['full-page-section']}>
      <div className={styles['section-content']}>
        <div className="container h-100 d-flex align-items-center py-5">
          <div>
            <div className="row mb-5">
              <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                <div className="pb-4 pb-mb-0 pr-md-5 pr-0">
                  <img className="img-fluid" src={screenLogo} alt="Screen with the armory des buissons logo" width="350" height="350" />
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div>
                  <h1 className="text-center text-md-left text-accent">
                    {t('home:features.title')}
                  </h1>
                  <p>
                    {t('home:features.p1')}
                  </p>
                  <p className="mb-4">
                    {t('home:features.p2')}
                  </p>
                  <div className="text-center text-md-left">
                    <a className="btn btn-accent mr-2 my-1" href="steam://run/107410//-connect=164.132.203.207%20-port=2302">
                      <i className="fas fa-gamepad mr-3" />
                      {t('home:features.btnConnect')}
                    </a>
                    <a className="btn btn-discord my-1" href="https://discord.gg/RUh4QUV" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-discord mr-3" />
                      {t('home:features.btnDiscord')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center position-relative">
                <img className="img-fluid" src={shape} alt="Style shape" width="550" height="550" />
                <div style={{ maxWidth: '90%' }} className={`card shadow pb-0 ${styles['card-on-shape-1']}`}>
                  <div className="text-center">
                    <h2 className="text-accent mb-0">
                      {t('home:features.discover')}
                    </h2>
                    <a className="fp-caret-down opacity-interaction mb-0" aria-label="Discover the features" style={{ fontSize: '50px' }} href="#tp-into-fight"><i className="fa fa-caret-down" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
