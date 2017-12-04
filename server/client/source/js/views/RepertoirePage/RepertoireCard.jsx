import React, { Component } from 'react';
import { SelectField, MenuItem, TextField, DatePicker } from 'material-ui';

export const RepertoireCard = props => {
  return (
    <div>
      <article className='jumu-cards'>
       <a className='link-wrap2' href='' target='_blank'>
         <div className='img-box2'>
           <p className='type'>{props.type}</p>
           <p className='time' />
           <img src={props.imgSrc} alt='images' width='370' height='200' />
         </div>
         <div className='height-limiter'>
           <h4 />
         </div>
       </a>
     </article>
    </div>
  );
};
