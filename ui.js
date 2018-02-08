import React, {Component} from 'react';
import {render} from 'react-dom';
import phonogram from './src';

const TITLE = {
  french: 'French',
  english: 'English',
  spanish: 'Spanish'
}

class PhonogramTester extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    const {
      title,
      fn
    } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        &nbsp;->&nbsp;<code>{fn(this.state.value)}</code>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      {Object.keys(phonogram).map(lang => {
        return (
          <PhonogramTester
            key={lang}
            title={TITLE[lang]}
            fn={phonogram[lang].poetic} />
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById('app');
render(<App />, rootElement);
