import React, { Component } from 'react';
import { SelectField, MenuItem, TextField, DatePicker } from 'material-ui';

export const CreateRepertoire = props => {
  return (
    <div>
      <TextField
        hintText='Set title'
        value={ props.title }
        style={ { display: 'block' } }
        onChange={ props.onEditText('title') }
        floatingLabelText='Set title'
      />
      <DatePicker
        hintText='Choose date'
        value={ props.date }
        onChange={ props.onHandleDatePicker('date') }
      />
      <SelectField
        floatingLabelText='Type'
        value={ props.type }
        onChange={ props.onHandleSelectField('type') }
      >
        <MenuItem value={ '舞蹈' } primaryText='舞蹈' />
        <MenuItem value={ '戲劇' } primaryText='戲劇' />
        <MenuItem value={ '音乐' } primaryText='音乐' />
        <MenuItem value={ '駐場演出' } primaryText='駐場演出' />
        <MenuItem value={ '兒童劇' } primaryText='兒童劇' />
        <MenuItem value={ '旅遊演出' } primaryText='旅遊演出' />
        <MenuItem value={ '戲曲' } primaryText='戲曲' />
        <MenuItem value={ '雜技' } primaryText='雜技' />
        <MenuItem value={ '魔術' } primaryText='魔術' />
        <MenuItem value={ '其他' } primaryText='其他' />

      </SelectField>
      <SelectField
        floatingLabelText='Cities'
        value={ props.city }
        style={ { marginLeft: '20px' } }
        onChange={ props.onHandleSelectField('city') }
      >
        <MenuItem value={ '北京' } primaryText='北京' />
        <MenuItem value={ '上海' } primaryText='上海' />
        <MenuItem value={ '廣州' } primaryText='廣州' />
        <MenuItem value={ '天津' } primaryText='天津' />
        <MenuItem value={ '深圳' } primaryText='深圳' />
        <MenuItem value={ '南京' } primaryText='南京' />
        <MenuItem value={ '成都' } primaryText='成都' />
        <MenuItem value={ '重慶' } primaryText='重慶' />
        <MenuItem value={ '西安' } primaryText='西安' />
        <MenuItem value={ '武漢' } primaryText='武漢' />
        <MenuItem value={ '長沙' } primaryText='長沙' />
        <MenuItem value={ '合肥' } primaryText='合肥' />
        <MenuItem value={ '其他' } primaryText='其他' />
      </SelectField>

      <div style={ { width: '90%', border: '1px solid #eee' } }>
        <TextField
          hintText='for example # Title'
          floatingLabelText='Write your Repertoire discription in Markdown'
          multiLine={ true }
          rows={ 10 }
          value={ props.discription }
          onChange={ props.onEditText('discription') }
          fullWidth={ true }
        />
      </div>
    </div>
  );
};
