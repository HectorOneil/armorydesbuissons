import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Navbar from '../components/common/navbar/Navbar';
import Footer from '../components/common/footer/Footer';

import InfoCards from '../components/live/InfoCards';
import LiveInfo from '../components/live/LiveInfo';
import NewsGraphs from '../components/live/NewsGraphs';
import RankingChampions from '../components/live/RankingChampions';
import Statistics from '../components/live/Statistics';
import { PlayerPopper } from '../components/live/PlayerPopper';

function Live() {
  const socket = io('ws://localhost:3005');

  useEffect(() => () => { socket.close(); });

  return (
    <div>
      <Navbar />
      <div className="container-fluid p-4">
        <InfoCards socket={socket} />
        <LiveInfo socket={socket} />
        <NewsGraphs />
        <RankingChampions />
        <Statistics />
      </div>
      <PlayerPopper />
      <Footer />
    </div>
  );
}

Live.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Live;