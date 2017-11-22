import React from 'react';
import marked from 'marked';
import githubCss from 'github-markdown-css/github-markdown.css';
import hlJsCss from 'highlight.js/styles/github.css';


export default class MarkdownElement extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: code => require('highlight.js').highlightAuto(code).value,
    });
  }
  render() {
    const { text } = this.props,
      html = marked(text || '');

    return (
      <div className='markdown-test'>
        <span dangerouslySetInnerHTML={ { __html: html } } />
      </div>
    );
  }
}
