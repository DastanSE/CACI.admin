import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

export const RepertoireCard = props => {
  return (
    <div className='cards'>
      <div className='box2'>
        <span className='type'>{props.data.repertoire_type}</span>
        <p className='time'>{props.data.repertoire_date}</p>
        <img src={ props.data.repertoire_imgSrc } alt='images' />
      </div>
      <div className='height-limiter'>
        <h4>{props.data.repertoire_title}</h4>
      </div>
      <FlatButton label='Edit' primary icon={ <EditIcon /> } />
      <FlatButton label='Delete' secondary icon={ <DeleteIcon /> } />
    </div>
  );
};
