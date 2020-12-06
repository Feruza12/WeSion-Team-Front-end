import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import style from './CardAccept.module.css';
import Button from '../../UI/Buttons/Buttons';
import accept from '../../../assets/icons/check.svg';
import reject from '../../../assets/icons/cancel.svg';
import test from '../test.png'


import { motion } from "framer-motion"
import classNames from 'classnames'


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Cards(props) {

  const [data, setData] = useState(props.d);
  console.log(props.d)


  return (
    <React.Fragment>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <motion.img variants={item} src={test} className={classNames(style.image_src, "item")} alt="ChitChat Logo" />
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
        <motion.div variants={item} className={classNames(style.violationBlock, "item")}>
          <h3> Violation type:</h3>
          <div className={style.violationType}>
            <p>    {data.violation_type} </p>
          </div>
        </motion.div>
        <motion.div variants={item} className={classNames(style.violationBlock, "item")}>
          <h3> Comment:</h3>
          <div className={style.CommentViolation}>
            <p>    {data.comment}</p>
          </div>
        </motion.div>
        <motion.div variants={item} className={classNames(style.btns, " item")}>
          <Button btnType="Yellow" clicked={props.imgAcceptHandler}>
            <img src={accept} alt="icons" />              Accept
            </Button>
          <Button btnType="Grey" clicked={props.LogRejectHandler}>
            <img src={reject} alt="icons" />              Reject
            </Button>
        </motion.div>
      </Grid>
    </React.Fragment>


  );
}