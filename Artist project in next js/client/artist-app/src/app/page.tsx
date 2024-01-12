'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';
import { Artist } from './types/artists';

const Home = () => {
  const [artists, setArtists] = useState<Artist>([]);

  useEffect(() => {
    const fetchArtists = async () => {
        const response = await fetch('http://localhost:4040/artists');
        const data = await response.json();
        setArtists(data);
    };

    fetchArtists();
  }, []);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {artists.map((artist) => (
          <SwiperSlide key={artist._id}>
            <img src={artist.image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
