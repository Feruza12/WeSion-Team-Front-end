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
import accept from '../../assets/icons/check.svg';
import reject from '../../assets/icons/cancel.svg';
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
  const [img, setImg] = useState(null);
  const [dataSet, setDataSet] = useState(null);


  useEffect(() => {
    getImg();
    return () => console.log('unmounting...');
  }, [])

  const getImg = () => {
    axios.get('/get_image').then(
      res => {
        res = res.data;
        setDataSet(res);
        const imgFile = res.image;
        setImg(imgFile);
      }
    ).catch(err => { console.log(err) })
  }


  const imgAcceptHandler = (id) => {
    // const accepted = data.accepted;
    // data.filter((id == data["id"]) => {
    //   return(
    //    data.accepted = true
    //   );
    // })
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
      {dataSet ?
        <div>
          {
            Object.entries(dataSet).map((item, id)=>{
              return(
                <div key={id}>
                <motion.div className={classNames(style.Card, "container")}
                  variants={container}
                  initial="hidden"
                  animate="visible">
                  <motion.div className={classNames(style.author_info, "item")} variants={item} >
                    <div>
                      <b> Author: </b>
                      <span>{item[1].author}</span>
                    </div>
                    <div>
                      <b> Time: </b>
                      <span>{item[1].time}</span> &emsp;
                  <b> Contacts: </b>
                      <span>{item[1].author}</span>
                    </div>
                  </motion.div>
  
  
                  <div className={style.body}>
                    <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
                      <div>
                        <Button btnType="Navigator" disabled={!imgAccepted} clicked={backToImgApprove}> <img src={back} className={style.side_icons} /></Button>
                      </div>
                      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <motion.img variants={item} src={`data:image/jpg;base64,${item[1].image}`} className={classNames(style.image_src, "item")} alt="ChitChat Logo" />
                      </Grid>
                      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <motion.div variants={item} className={classNames(style.violationBlock, "item")}>
                          <h3> Violation type:</h3>
                          <div className={style.violationType}>
                            <p>    {item[1].violation} </p>
                          </div>
                        </motion.div>
                        <motion.div variants={item} className={classNames(style.violationBlock, "item")}>
                          <h3> Description:</h3>
                          <div className={style.CommentViolation}>
                            <p> {item[1].violation}</p>
                          </div>
                        </motion.div>
                        <motion.div variants={item} className={classNames(style.btns, " item")}>
                          <Button btnType="Yellow">
                            <img src={accept} alt="icons" /> Accept
              </Button>
                          <Button btnType="Grey" >
                            <img src={reject} alt="icons" /> Reject
              </Button>
                        </motion.div>
                      </Grid>
                      <div>
                        <Button btnType="Navigator" disabled={imgAccepted} clicked={imgAcceptHandler}>  <img src={next} className={style.side_icons} /></Button>
                      </div>
                    </Grid>
                  </div>
  
                </motion.div>
              </div>
              );
            })
           

          }
        </div> : ' '
      }

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
                  <CardAccept imgAcceptHandler={() => imgAcceptHandler(id)} LogRejectHandler={LogRejectHandler} d={d} />
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