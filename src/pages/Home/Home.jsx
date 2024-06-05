import styles from './Home.scss';
import React from "react";
import Banner from '../../components/Banner/banner'
import homeBanner from '../../assets/homeBanner.svg';
import CardsHome from '../../components/CardsHome/cardshome';

function Home() {
  return (
    <main>
      <div className="home">
        <div className="home__banner">
           <Banner className={styles.banner} img={homeBanner} text="Chez vous partout et ailleurs"/>
        </div>
        <CardsHome />
      </div>
    </main>
  )
};

export default Home;