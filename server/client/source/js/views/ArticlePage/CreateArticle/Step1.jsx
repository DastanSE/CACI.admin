import React, { Component } from 'react';
import { TextField, DatePicker, SelectField, MenuItem } from 'material-ui';

export const Step1 = props => {
  return (
    <div>
      <TextField
        hintText='Set title'
        value={ props.article_title }
        onChange={ props.onEditText('article_title') }
      />
      <TextField
        style={{marginLeft: '2em'}}
        hintText='Set Subtitle'
        value={ props.article_subtitle }
        onChange={ props.onEditText('article_subtitle') }
      />
      <DatePicker
        hintText='Choose event date'
        value={ props.article_date }
        onChange={ props.onHandleDatePicker('article_date') }
      />

      <SelectField
        floatingLabelText='Article Type'
        value={ props.article_type }
        onChange={ props.onHandleSelectField('article_type') }
      >
        <MenuItem value={ '藝術評論' } primaryText='藝術評論' />
        <MenuItem value={ '科技新聞' } primaryText='科技新聞' />
        <MenuItem value={ '文藝推薦' } primaryText='文藝推薦' />
        <MenuItem value={ '世相百科' } primaryText='世相百科' />
      </SelectField>
    </div>
  );
};
