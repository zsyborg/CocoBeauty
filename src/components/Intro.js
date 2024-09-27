import {animations, animate, anticipate, animationControls, useCycle, motion, delay} from "framer-motion";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="container-fluid h-100 min-vh-100 flex-row align-items-center">

        <div className="row flex-row justify-content-center align-items-center min-vh-100">
            
                <div className="col-12 col-lg-6 col-md-6 col-xl-8 col-xxl-10 h-100 align-items-center justify-content-center text-center">
                  {/* <motion.img                 
                  initial={{scale:0.5, opacity: 0}}
                  animate={{scale:1, opacity: 1}}
                  transition={{duration:3, ease:"easeInOut"}}
                  src="/emblem.png" width={333} /> */}
                  
                  <motion.h1 className="m-0 p-0">
                    {Array.from('Coconut Beauty').map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.h3 className="m-0 p-0 mt-sm-2">
                    {Array.from('Hair, Skin & You').map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay:0.4 + index * 0.3 }}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.h3>
                  <motion.h5 className="mt-4">
                    {Array.from('Enter Website').map((char, index) => (
                      <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 3 + index * 0.3 }}>
                    <Link href="/home">
                        {char}
                    </Link>
                    </motion.span>
                    ))}
                    </motion.h5>

                </div>
        </div>
      
    </div>
  );
};
export default Intro;
