import React, { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { getLanguage } from '../../Helpers/i18n';

export default function News({ news, fullWidth, setToggle }) {
  const [language, setLanguage] = useState(getLanguage());

  i18n.on('languageChanged', (newLanguage) => { setLanguage(newLanguage); });
  const { t } = useTranslation('common');

  return (
    <div
      className="card bg-darker"
      style={{
        position: fullWidth ? 'absolute' : 'initial',
        height: fullWidth ? 'calc(100% - 100px)' : '100%',
        width: fullWidth ? 'calc(100% - 50px)' : '100%',
      }}
    >
      <div className="h-100 d-flex flex-column justify-content-between">
        <div className="h-100">
          <h5 className="text-accent">{news ? news.title[language] : ''}</h5>
          <p className="truncateNews">{news ? news.content[language] : ''}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <small className="text-muted">{news ? news.date.toLocaleDateString() : ''}</small>
          {!fullWidth && (
            <button
              type="button"
              className="btn-link"
              onClick={() => { setToggle(news.id); }}
            >
              {t('live.news.more')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
