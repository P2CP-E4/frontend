import { motion } from 'framer-motion'
const ProgressBar = ({ progressValue }) => {
    return (
        <div className="flex-row items-stretch justify-start w-2/3 h-2 overflow-hidden bg-gray-300 rounded-md shadow-inner">
            <motion.div
                className="w-0 h-2 bg-gradient-to-r from-[#00337C] to-[#03C988] shadow-inner"
                animate={{ width: progressValue }}
                transition={{
                    duration: 1
                }}
            />
        </div >
    );
}
export default ProgressBar;