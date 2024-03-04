import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
const AnimationWraper = ({ children, keyValue, initial = { opacity: 0 }, classname, animate = { opacity: 1 }, transition = { duration: 2 } }) => {
    return (
        <AnimatePresence>
            <motion.div initial={initial} animate={animate} transition={transition} key={keyValue} className={classname}>
                {children}
            </motion.div>
        </AnimatePresence>

    )
}

export default AnimationWraper
