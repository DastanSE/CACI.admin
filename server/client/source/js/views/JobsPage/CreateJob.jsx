import React, { Component } from 'react';
import { SelectField, MenuItem, TextField } from 'material-ui';

export const CreateJob = props => {
  return (
    <div>
      <TextField
        hintText='Set title'
        value={ props.job_title }
        style={ { display: 'block' } }
        onChange={ props.onEditText('job_title') }
        floatingLabelText='Set title'
      />
      <SelectField
        floatingLabelText='Job Type'
        value={ props.job_type }
        onChange={ props.onHandleSelectField('job_type') }
      >
        <MenuItem value={ '实习' } primaryText='实习' />
        <MenuItem value={ '全职' } primaryText='全职' />
        <MenuItem value={ '兼职' } primaryText='兼职' />
        <MenuItem value={ '实习／全职' } primaryText='实习／全职' />
        <MenuItem value={ '兼职／全职' } primaryText='兼职／全职' />
      </SelectField>
      <SelectField
        floatingLabelText='选择工作经验'
        value={ props.job_experience }
        style={ { marginLeft: '20px' } }
        onChange={ props.onHandleSelectField('job_experience') }
      >
        <MenuItem value={ '不限经验' } primaryText='不限经验' />
        <MenuItem value={ '有经验' } primaryText='有经验' />
        <MenuItem value={ '1-3年经验' } primaryText='1-3年经验' />
        <MenuItem value={ '3-5年经验' } primaryText='3-5年经验' />
        <MenuItem value={ '5年以上经验' } primaryText='5年以上经验' />
      </SelectField>

      <div style={ { width: '90%', border: '1px solid #eee' } }>
        <TextField
          hintText='for example # Title'
          floatingLabelText='Write your jobs discription in Markdown'
          multiLine={ true }
          rows={ 10 }
          value={ props.job_discription }
          onChange={ props.onEditText('job_discription') }
          fullWidth={ true }
        />
      </div>
    </div>
  );
};
