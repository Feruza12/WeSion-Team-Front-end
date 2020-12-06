import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid';

import style from './Cards.module.css';
import CardDetected from './CardDetected/CardDetected';
import CardAccept from './CardAccept/CardAccept';
import Button from '../UI/Buttons/Buttons';

import { motion } from "framer-motion"
// import FormData from 'form-data';
import back from '../../assets/icons/back.svg';
import next from '../../assets/icons/next.svg';

// import { postLogs } from '../../services/Logs.js'

import img from './test.png';
import axios from '../../api';

import { data } from '../../services/LogsDb.json'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Cards() {
  const [imgAccepted, setimgAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
 

  // const postImg = () => {
  //   setBinaryImg(
  //     btoa(img)
  //   )
  //   axios.post(`/detect_plates`, {
  //     name: 'test.png', image: binaryImg
  //   },
  //   ).then(res => {
  //     console.log(res.data);
  //   }).catch(err => { console.log(err) })

  // }

  const imgAcceptHandler = (id) => {
    const accepted = data.accepted;
    setimgAccepted(true);
  }

  const LogRejectHandler = () => {
    setRejected(true);
  }
  const backToImgApprove = () => {
    setimgAccepted(false);
  }


  return (
    <React.Fragment>
      {data.map((d, id) => {
        return (
          <motion.div key={id} className={classNames(style.Card, "container")}
            variants={container}
            initial="hidden"
            animate="visible">
            <motion.div className={classNames(style.author_info, "item")} variants={item} key={id}>
              <div>
                <b> Author: </b>
                <span>{d.author}</span>
              </div>
              <div>
                <b> Time: </b>
                <span>{d.time}</span> &emsp;
                <b> Contacts: </b>
                <span>{d.contacts}</span>
              </div>
            </motion.div>

            <div className={style.body}>
              <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
                <div>
                  <Button btnType="Navigator" disabled={!imgAccepted} clicked={backToImgApprove}> <img src={back} className={style.side_icons} /></Button>
                </div>
                {!imgAccepted ?
                  <CardAccept imgAcceptHandler={imgAcceptHandler(d.id)} LogRejectHandler={LogRejectHandler} d={d} />
                  : <CardDetected backToImgApprove={backToImgApprove} LogRejectHandler={LogRejectHandler} d={d} />
                }
                <div>
                  <Button btnType="Navigator" disabled={imgAccepted} clicked={imgAcceptHandler}>  <img src={next} className={style.side_icons} /></Button>
                </div>
              </Grid>
            </div>

          </motion.div>
        );
      })}

    </React.Fragment>
  );
}