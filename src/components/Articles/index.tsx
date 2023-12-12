'use client'
import './styles.scss';
import image from "./imagen/Image.jpg";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { getJsonData } from '../../app/Async/servicerequest';
import BtnComponent from "@/components/Articles/components/buttoncomponent";
import SlideNavigation from "@/components/Articles/components/slidecomponent";
import ButtonComponent from '@/components/Articles/components/buttoncomponent';
import Slide from '@/components/Articles/components/slidecomponent';

interface UserData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const SliderComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const data = await getJsonData<UserData[]>(url);
        setUserData(data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % userData.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + userData.length) % userData.length);
  };
  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('es-ES', options);
    return currentDate;
  };
  return (
    <div className="flex mx-auto  min-h-screen items-top justify-between p-24">
      <div className='grid justify-items-center'>
        <div className="w-3/4 relative">
          {userData.length > 0 && (
            <>
              <div className="slider-content">
                <p className={`article-recent`}>ARTÍCULOS MAS RECIENTES</p>
                <p className={`article-date`}>{getCurrentDate()}</p>
                <p className={`article-title`}>{userData[currentSlide].name}</p>
                <p className={`article-content`}>{userData[currentSlide].body}</p>
                <h3 className={`article-author`}>{userData[currentSlide].email}</h3>
                <ButtonComponent />
                <hr className="my-auto mb-4 border-t-4 border-green-700" />
                <Slide onPrevSlide={prevSlide} onNextSlide={nextSlide} />
              </div>
            </>
          )}
        </div>

      </div>
      <div className="w-1/4">
        <div>
          <Image src={image} className='img_content' alt="imagen de footer" width={400} height={627} />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
