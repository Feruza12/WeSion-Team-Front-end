import React from 'react';
import style from './CardDetect.module.css';
import test from '../test.png'
import Button from '../../UI/Buttons/Buttons';
import accept from '../../../assets/icons/check.svg';
import reject from '../../../assets/icons/cancel.svg';
import detected from '../Screenshot_1.png';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { motion } from "framer-motion"
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames'


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function CardDetected(props) {

  const [name, setName] = React.useState('01 A758 DB');
  const [data, setData] = React.useState(props.d);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <motion.img variants={item} src={test} className={classNames(style.image_src, "item")} alt=" Logo" />
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
        <motion.h3 variants={item} className="item">  Detected Number: </motion.h3>
        <motion.img src={detected} variants={item} className={classNames(style.image_src, "item")} alt=" Logo" />
        <motion.div variants={item} className={classNames(style.car_num, "item")} >
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Car</InputLabel>
            <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
          </FormControl>
        </motion.div>
        <motion.div variants={item} className={classNames(style.btns, " item")}>
          <Button btnType="Yellow" >
            <img src={accept} alt="icon" />
                  Accept
                </Button> <br />
          <Button btnType="Grey">
            <img src={reject} alt="icon" />
              Reject
            </Button>
        </motion.div>
      </Grid>
    </React.Fragment>
  );
}