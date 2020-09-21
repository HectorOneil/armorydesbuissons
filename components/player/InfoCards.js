/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFetch from '../../helpers/useFetch';
import styles from '../../styles/Player.module.css';
import DynamicInput from '../common/DynamicInput';

function InfoCard(props) {
  const {
    title, logo, children, bg,
  } = props;
  return (
    <div className="col-lg-4">
      <div className={`card ${bg} shadow my-2 ${styles['card-height']} text-white`}>
        <h3 className="mb-4">{title}</h3>
        <div className="d-flex flex-column flex-sm-row justify-content-between justify-content-lg-around align-items-center">
          <i className={`fas fa-${logo} fa-5x mb-3 mb-sm-0 mr-3`} />
          <div className={`text-center text-sm-left ${styles['card-width']}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InfoCards({ profileInfo }) {
  const [searchInput, setSearchInput] = useState('');
  const players = useFetch('/api/playersByName', undefined, { name: searchInput });

  // TODO Fnir de mettre des Link à la place des href pour les redirections internes
  // TODO Vérifier que le contraste est ok

  const SearchResult = () => {
    if (players === undefined) return 'Waiting for search...';
    if (players.length === 0) return 'No player found';
    return players.map(
      (p) => <Link href={`/p/${p.playerId}`}><a className={styles.link}>{p.lastName}</a></Link>,
    ).reduce((prev, curr) => [prev, ', ', curr]);
  };

  const ProfileInformation = () => {
    if (!profileInfo) return <Spinner animation="border" variant="white" />;
    if (profileInfo.isItsProfile) {
      return (
        <div>
          This is your profile. You have access to all the information about you.
          {' '}
          Only you can see the information with a lock
          {' '}
          <i className="fas fa-lock" />
          .
        </div>
      );
    }
    return (
      'This is not your profile or you are not connected.In order to protect player privacy, you do not have access to all the profile information.'
    );
  };

  return (
    <section id="info-card" className="mt-3">
      <div className="row">
        <InfoCard logo="user" title="Profile of" bg="card-primary">
          <div style={{ fontSize: 36, fontWeight: 600, fontFamily: '"Montserrat", sans-serif' }}>
            { profileInfo ? profileInfo.lastName : <Spinner animation="border" variant="white" />}
          </div>
        </InfoCard>
        <InfoCard title="Profile information" logo="lock" bg="card-accent">
          <ProfileInformation />
        </InfoCard>
        <InfoCard title="Search another player" logo="search" bg="card-primary">
          <DynamicInput className="mb-2" style={{ background: 'rgba(255,255,255,.8)' }} setFilter={setSearchInput} />
          <div style={{ whiteSpace: 'nowrap', overflowX: 'auto' }} className="text-center">
            <SearchResult />
          </div>
        </InfoCard>
      </div>
    </section>
  );
}