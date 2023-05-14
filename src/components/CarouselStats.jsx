import React, { useState } from "react";
import StatistiqueNumBox from "./CarouselBoxStats";
import SlideFlecheDroite from '../assets/images/SlideFlecheDroite.svg';
import SlideFlecheGauche from '../assets/images/SlideFlecheGauche.svg';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselStats = ({ data }) => {
    const items = [
        { id: 1, title: "Total", number: data.totalDoctorants, },
        { id: 2, title: "Nouveaux inscrits", number: data.nouveauInscrit, },
        { id: 3, title: "LMD", number: data.LMDtotal, },
        { id: 4, title: "Classique", number: data.totalClassique, },
        { id: 5, title: "Femmes", number: data.totalF, },
        { id: 6, title: "Hommes", number: data.totalM, },
        { id: 7, title: "LCSI", number: data.totalLCSI, },
        { id: 8, title: "LMCS", number: data.totalLMCS, },
        { id: 9, title: "Autre", number: data.totalAutre, },
        { id: 10, title: "Directeurs de thése", number: data.totalDirecteurs, },
        { id: 11, title: "Inscrits", number: data.inscrit, },
        { id: 12, title: "Différés", number: data.differe, },
        { id: 13, title: "Radiés", number: data.radie, },
        { id: 14, title: "Soutenu", number: data.soutenu, },
    ];

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