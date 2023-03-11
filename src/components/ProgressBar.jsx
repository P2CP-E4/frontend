import { motion } from 'framer-motion'
const ProgressBar = ({ progressValue }) => {
    return (
        <div className="w-full h-3 flex-row justify-start items-stretch rounded-md bg-gray-300 shadow-inner overflow-hidden">
            <motion.div
                className="w-0 h-3 bg-gradient-to-r from-[#00337C] to-[#03C988] rounded-r-md"
                animate={{ width: progressValue }}
                transition={{
                    duration: 3
                }}
            ></motion.div>
        </div>
    );
}
export default ProgressBar;