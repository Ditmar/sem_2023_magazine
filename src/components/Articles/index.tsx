'use client'
import './styles.scss';
import image from "./imagen/Image.jpg";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../app/apiconection/api';
import { FaRegFilePdf } from "react-icons/fa6";
import { GoPaperclip } from "react-icons/go";
import { FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import { TbPointFilled } from "react-icons/tb";

const SliderComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      setArticles(data);
    };

    fetchDataAndSetState();
  }, []);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + articles.length) % articles.length);
  };

  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('es-ES', options);
    return currentDate;
  };

  return (
    <div className="flex min-h-screen items-top justify-between p-24">
      <div className="w-3/4 mr-16 relative">
        {articles.length > 0 && (
          <>

            <div className="slider-content">
              <p className="article-recent">ARTÍCULOS MAS RECIENTES</p>
              <p className="article-date">{getCurrentDate()}</p>
              <p className="article-title">{articles[currentSlide].name}</p>
              <p className="article-content">{articles[currentSlide].body}</p>
              <h3 className="article-author">{articles[currentSlide].email}</h3>
              <div className="buttons flex justify-end ">
                <div className="pdf">
                  <button className="sharebutton" >
                    <span className="iconbutton">
                      <a href="#" className="btn" type="button">
                        <FaRegFilePdf color="#178435" size={30} />
                      </a>
                    </span>
                    <span className="touchriplee"></span>
                  </button>
                </div>
                <div className="share">
                  <button className="sharebutton" onClick={toggleMenu}>
                    <span className="iconbutton">
                      <GoPaperclip color="#178435" size={30} />
                    </span>
                    <span className="touchriplee"></span>
                  </button>
                  <div className={`share-menu ${menuVisible ? 'visible' : ''}`}>
                    <div className="menu">
                      <a href="#" className="icon">
                        <FaWhatsapp color="#ffffff" size={30} />
                      </a>
                      <a href="#" className="icon">
                        <FaFacebook color="#ffffff" size={30} />
                      </a>
                      <a href="#" className="icon">
                        <FaTelegram color="#ffffff" size={30} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-auto mb-4 border-t-4 border-green-700" />

              <div className='flex justify-center items-center'>
                <div className=" left-0 top-0 bottom-0 flex items-center">
                  <button onClick={prevSlide} className=" p-2">
                    <TbPointFilled color='#178435' />
                  </button>
                </div>
                <TbPointFilled color='#178435' />
                <div className=" right-0 top-0 bottom-0 flex items-center">
                  <button onClick={nextSlide} className=" p-2">
                    <TbPointFilled color='178435' />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="image">
        <div className="grid">
          <Image className="image-article" src={image} alt="imagen de footer" />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
