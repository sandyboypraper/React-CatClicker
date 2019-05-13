import React from "react";

import MiniCatDetails from './MiniCatDetails.js';

import {Row , Col} from 'reactstrap';

const CatGallery = props => {

  const {cats} = props;

  const listi = cats.map(cat => {

        return(
        <Col sm = "6" key = {cat.CatImage} xs = "12" md = "4" lg = "3">
          <MiniCatDetails cat = {cat} fun = {props.fun} fun2 = {props.fun2} Activecat = {props.Activecat} />
        </Col>
          );
        
  });

  return (
   
    <div>
     <Row>
       {listi}
    </Row>
    </div> 
  );
};

export default CatGallery;

