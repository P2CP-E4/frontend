import React, { useState } from "react";
import StatistiqueNumBox from "./CarouselBoxStats";
import SlideFlecheDroite from '../assets/images/SlideFlecheDroite.svg';
import SlideFlecheGauche from '../assets/images/SlideFlecheGauche.svg';
import { motion, AnimatePresence } from 'framer-motion';
const items = [
    { id: 1, title: "Item 1", number: "1", pourcentage: "10" },
    { id: 2, title: "Item 2", number: "2", pourcentage: "-5" },
    { id: 3, title: "Item 3", number: "3", pourcentage: "0" },
    { id: 4, title: "Item 4", number: "4", pourcentage: "15" },
    { id: 5, title: "Item 5", number: "5", pourcentage: "-10" },
    { id: 6, title: "Item 6", number: "6", pourcentage: "20" },
    { id: 7, title: "Item 7", number: "7", pourcentage: "5" },
    { id: 8, title: "Item 8", number: "8", pourcentage: "0" },
    { id: 9, title: "Item 9", number: "9", pourcentage: "-15" },
    { id: 10, title: "Item 10", number: "10", pourcentage: "10" },
    { id: 11, title: "Item 11", number: "11", pourcentage: "5" },
    { id: 12, title: "Item 12", number: "12", pourcentage: "-5" },
    { id: 13, title: "Item 13", number: "13", pourcentage: "0" },
    { id: 14, title: "Item 14", number: "14", pourcentage: "15" },
];

const CarouselStats = () => {
    const { visibleItems, handlePrevClick, handleNextClick } = useInfiniteCarousel(items);
    return (
        <div className="flex justify-center gap-4">
            <button
                onClick={handlePrevClick}
                className="absolute left-0 z-10 w-10 h-10 transition-colors duration-300 bg-gray-200 rounded-full mt-7 hover:bg-gray-300"
            >
                <img src={SlideFlecheGauche} alt="Slide fleche gauche" className="w-full h-full" />
            </button>
            {visibleItems}
            <button
                onClick={handleNextClick}
                className="absolute right-0 z-10 w-10 h-10 transition-colors duration-300 bg-gray-200 rounded-full mt-7 hover:bg-gray-300"
            >
                <img src={SlideFlecheDroite} alt="Slide fleche droite" className="w-full h-full" />
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
        .slice(0, 7)
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