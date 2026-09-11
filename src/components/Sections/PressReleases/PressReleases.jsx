import './PressReleases.css'
import { useState, useEffect } from 'react';
import TitleDescription from '../../UI/TitleDescription/TitleDescription'
import PressReleasesData from '../../../data/PressReleasesData.json'; 
import Card from '../../UI/Card/Card';

const PressReleases = () => {

        const [newsCards, setNewsCards] = useState([]);

    useEffect(() => {
        const PressReleasesStorageChange = (event) => {
            if (event.key === "PressReleasesData") {
                const savedData = localStorage.getItem("PressReleasesData");
                if (savedData) {
                    setNewsCards(JSON.parse(savedData));
                }
            }
    };
        let news = localStorage.getItem('PressReleasesData');
        if (!news) {
            localStorage.setItem('PressReleasesData', JSON.stringify(PressReleasesData));
            news = JSON.stringify(PressReleasesData);
        }
        setNewsCards(JSON.parse(news));

        window.addEventListener("storage", PressReleasesStorageChange);
            return () => {
                window.removeEventListener("storage", PressReleasesStorageChange);
            };
        }, []);
    return (
        <div className='DS_PressReleases'>
            <TitleDescription 
                className="DS_TitleDescPress"
                titleParts={[    
                    {
                        text: "Press Releases",
                        className: "DS_ColorLimeGreen"
                    }
                ]}
                description="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
            /> 
            <div className="DS_ContainerCardNews">
                {newsCards.map((item, index) => (
                    <Card
                        key={index}
                        image={{
                                path:item.image.path,
                                altImg: item.image.altImg
                            }}
                        title={item.title}
                        titleIcon={
                            <>
                                <span className="DS_LocationNewsCard">Location: {item.location}</span>
                                <span className="DS_DateNewsCard">Date: {item.date}</span>
                            </>
                        }
                        desc={item.desc}
                        classNames={{
                            card: "DS_NewsCard",
                            imageDiv: "DS_ImgBox",
                            image: "DS_NewsCardImg",
                            imgTitleDiv: "DS_NewsTitleBox",
                            title: "DS_NewsCardTitle",
                            titleIcon: "DS_LocationDate",
                            desc: "DS_NewsCardDesc"
                        }}
                    />
                ))}
            </div>
        </div>
    )
    }

export default PressReleases
