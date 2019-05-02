import React, { Component } from 'react'
import { products } from '../static/data/products'
import Item from './item'
import '../shopping_cart.scss'

import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from "prop-types";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};



class Shelf extends React.Component {
  state = {
    value1: 'ALL',


  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    

  }



  handleChange = event => {
    this.setState({ value1: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Size</FormLabel>
            <RadioGroup
              aria-label="Size"
              name="Size"
              className={classes.group}
              value={this.state.value1}
              onChange={this.handleChange}
            >
              <FormControlLabel value="ALL" control={<Radio />} label="ALL" />
              <FormControlLabel value="XS" control={<Radio />} label="XS" />
              <FormControlLabel value="S" control={<Radio />} label="S" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel value="ML" control={<Radio />} label="ML" />
              <FormControlLabel value="L" control={<Radio />} label="L" />
              <FormControlLabel value="XL" control={<Radio />} label="XL" />
              <FormControlLabel value="XXL" control={<Radio />} label="XXL" />

            </RadioGroup>
          </FormControl>

        </div>
      <div className='shelf-container'>
      {products.map(product =>
        <Item product={product}
              SelectProduct={this.props.SelectProduct} key={product.sku} />)}
  </div>
  </div>
    );
  }
}

Shelf.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shelf);

