import React, { useState } from "react";
import StatistiqueNumBox from "./CarouselBoxStats";
import carouselData from "../data/carousel_stats_data.json"
import SlideFlecheDroite from '../assets/images/SlideFlecheDroite.svg';
import SlideFlecheGauche from '../assets/images/SlideFlecheGauche.svg';
import { motion, AnimatePresence } from 'framer-motion';
const items = [
    { id: 1, title: "Total", number: carouselData.totalDoctorants, pourcentage: "10" },
    { id: 2, title: "Nouveaux inscrits", number: carouselData.nouveauInscrit, pourcentage: "-5" },
    { id: 3, title: "LMD", number: carouselData.LMD, pourcentage: "0" },
    { id: 4, title: "Classique", number: carouselData.Classique, pourcentage: "15" },
    { id: 5, title: "Femmes", number: carouselData.F, pourcentage: "-10" },
    { id: 6, title: "Hommes", number: carouselData.M, pourcentage: "20" },
    { id: 7, title: "LCSI", number: carouselData.LCSI, pourcentage: "5" },
    { id: 8, title: "LMCS", number: carouselData.LMCS, pourcentage: "0" },
    { id: 9, title: "Autre", number: carouselData.Autre, pourcentage: "-15" },
    { id: 10, title: "Directeurs de thése", number: carouselData.totalDirecteurs, pourcentage: "10" },
    { id: 11, title: "Inscrits", number: carouselData.inscrit, pourcentage: "5" },
    { id: 12, title: "Différés", number: carouselData.differe, pourcentage: "-5" },
    { id: 13, title: "Radiés", number: carouselData.radie, pourcentage: "0" },
    { id: 14, title: "Soutenu", number: carouselData.soutenu, pourcentage: "15" },
];

const CarouselStats = () => {
    const { visibleItems, handlePrevClick, handleNextClick } = useInfiniteCarousel(items);
    return (
        <div className="flex items-center justify-center gap-5 ">
            <button
                onClick={handlePrevClick}
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full"
            >
                <img src={SlideFlecheGauche} alt="Slide fleche gauche" className="w-5 h-5" />
            </button>
            <div className="flex gap-6">
                {visibleItems}
            </div>
            <button
                onClick={handleNextClick}
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full "
            >
                <img src={SlideFlecheDroite} alt="Slide fleche droite" className="w-5 h-5" />
            </button>
        </div>
    );

};

export default CarouselStats;

function useInfiniteCarousel(items) {
    const [startIndex, setStartIndex] = useState(0);
    const handlePrevClick = () => {
        setStartIndex((startIndex - 1 + items.length) % items.length);
    };

    const handleNextClick = () => {
        setStartIndex((startIndex + 1) % items.length);
    };

    const visibleItems = [...items.slice(startIndex), ...items.slice(0, startIndex)]
        .slice(0, 6)
        .map((item) => (
            <AnimatePresence key={item?.id}>
                <motion.div
                    initial={{ opacity: 0, scale: 0, }}
                    animate={{ opacity: 1, scale: 1, }}
                    exit={{ opacity: 0, scale: 0, }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <StatistiqueNumBox title={item.title} number={item.number} pourcentage={item.pourcentage} />
                </motion.div >
            </AnimatePresence>
        ));
    return {
        handlePrevClick,
        handleNextClick,
        visibleItems,
    }
}