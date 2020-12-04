import React from "react";
import styles from './Buttons.module.css';
import { motion } from "framer-motion"

const button = (props) => {
  //   const { classes } = props;
  return (

    <motion.button
      disabled={props.disabled}
      className={[styles.Button, styles[props.btnType]].join(' ')}
      onClick={props.clicked}
      checked={props.checked}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >{props.children}
    </motion.button>
  );
};

export default (button);