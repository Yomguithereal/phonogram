import React, {Component} from 'react';
import {render} from 'react-dom';

import meSpeak from 'mespeak';
import enVoice from 'mespeak/voices/en/en-us.json';
import frVoice from 'mespeak/voices/fr.json';
import esVoice from 'mespeak/voices/es.json';
import meSpeakConfig from 'mespeak/src/mespeak_config';

import phonogram from './src';

meSpeak.loadConfig(meSpeakConfig);

const TITLE = {
  french: 'French',
  english: 'English',
  spanish: 'Spanish'
}

/**
 * Phonetic notation to meSpeak-compatible notation
 * Courtesy of itinerarium phoneme-synthesis project (https://github.com/itinerarium/phoneme-synthesis/)
 */
const meSpeakMappings = [
  { 'src': /^\s*\//g, 'dest': '' },
  { 'src': /\/\s*$/g, 'dest': '' },
  { 'src': /(\.)/g, 'dest': '%' },
  { 'src': /(\u02c8)/g, 'dest': '\'' },
  { 'src': /(\u02cc)/g, 'dest': ',' },
  { 'src': /(\u0251)/g, 'dest': 'A:' },
  { 'src': /(\u02d0)/g, 'dest': ':' },
  { 'src': /(\u0251\u02d0)/g, 'dest': 'A' },
  { 'src': /(\u0251\u0279)/g, 'dest': 'A' },
  { 'src': /(a\u02d0)/g, 'dest': 'A' },
  // feedback from formantzero via r/linguistics
  { 'src': /(\u0329)/g, 'dest': 'r' },  
  
  // feedback from scharfes_s via r/linguistics
  { 'src': /(\u027e)/g, 'dest': 't' },  
  { 'src': /(\xe6)/g, 'dest': 'a' },
  { 'src': /(a)/g, 'dest': 'a' },
  { 'src': /(\u028c)/g, 'dest': 'V' },
  { 'src': /(\u0252)/g, 'dest': '0' },
  { 'src': /(\u0254)/g, 'dest': '0' },
  { 'src': /(a\u028a)/g, 'dest': 'aU' },
  { 'src': /(\xe6\u0254)/g, 'dest': 'aU' },
  { 'src': /(\u0259)/g, 'dest': '@' },
  { 'src': /(\u025a)/g, 'dest': '3' },
  { 'src': /(\u0259\u02d0)/g, 'dest': '3:' },
  { 'src': /(a\u026a)/g, 'dest': 'aI' },
  { 'src': /(\u028c\u026a)/g, 'dest': 'aI' },
  { 'src': /(\u0251e)/g, 'dest': 'aI' },
  { 'src': /(b)/g, 'dest': 'b' },
  { 'src': /(t\u0283)/g, 'dest': 'tS' },
  { 'src': /(\u02a7)/g, 'dest': 'tS' },
  { 'src': /(d)/g, 'dest': 'd' },
  { 'src': /(\xf0)/g, 'dest': 'D' },
  { 'src': /(\u025b)/g, 'dest': 'E' },
  { 'src': /(e)/g, 'dest': 'E' },
  { 'src': /(\u025d)/g, 'dest': '3:' },
  { 'src': /(\u025c\u02d0)/g, 'dest': '3:' },
  { 'src': /(\u025b\u0259)/g, 'dest': 'e@' },
  { 'src': /(e)/g, 'dest': 'E' },
  { 'src': /(\u025d)/g, 'dest': '3:' },
  { 'src': /(\u025c\u02d0)/g, 'dest': '3:' },
  { 'src': /(e\u026a)/g, 'dest': 'eI' },
  { 'src': /(\xe6\u026a)/g, 'dest': 'eI' },
  { 'src': /(f)/g, 'dest': 'f' },
  { 'src': /(\u0261)/g, 'dest': 'g' },
  { 'src': /(g)/g, 'dest': 'g' },
  { 'src': /(h)/g, 'dest': 'h' },
  { 'src': /(\u026a)/g, 'dest': 'I' },
  { 'src': /(\u0268)/g, 'dest': 'I' },
  { 'src': /(\u026a\u0259)/g, 'dest': 'i@' },
  { 'src': /(\u026a\u0279)/g, 'dest': 'i@' },
  { 'src': /(\u026a\u0279\u0259)/g, 'dest': 'i@3' },
  { 'src': /(i)/g, 'dest': 'i:' },
  { 'src': /(i\u02d0)/g, 'dest': 'i:' },
  { 'src': /(d\u0292)/g, 'dest': 'dZ' },
  { 'src': /(\u02a4)/g, 'dest': 'dZ' },
  { 'src': /(k)/g, 'dest': 'k' },
  { 'src': /(x)/g, 'dest': 'x' },
  { 'src': /(l)/g, 'dest': 'l' },
  { 'src': /(d\u026b)/g, 'dest': 'l' }, 
  { 'src': /(m)/g, 'dest': 'm' },
  { 'src': /(n)/g, 'dest': 'n' },
  { 'src': /(\u014b)/g, 'dest': 'N' },
  { 'src': /(\u0259\u028a)/g, 'dest': 'oU' },
  { 'src': /(o)/g, 'dest': 'oU' },
  { 'src': /(o\u028a)/g, 'dest': 'oU' },
  { 'src': /(\u0259\u0289)/g, 'dest': 'V' },
  { 'src': /(\u0254\u026a)/g, 'dest': 'OI' },
  { 'src': /(o\u026a)/g, 'dest': 'OI' },
  { 'src': /(p)/g, 'dest': 'p' },
  { 'src': /(\u0279)/g, 'dest': 'r' },
  { 'src': /(s)/g, 'dest': 's' },
  { 'src': /(\u0283)/g, 'dest': 'S' },
  { 'src': /(t)/g, 'dest': 't' },
  { 'src': /(\u027e)/g, 'dest': 't' },
  { 'src': /(\u03b8)/g, 'dest': 'T' },
  { 'src': /(\u028a\u0259)/g, 'dest': 'U@' },
  { 'src': /(\u028a\u0279)/g, 'dest': 'U@' },
  { 'src': /(\u028a)/g, 'dest': 'U' },
  { 'src': /(\u0289\u02d0)/g, 'dest': 'u:' },
  { 'src': /(u\u02d0)/g, 'dest': 'u:' },
  { 'src': /(u)/g, 'dest': 'u:' },
  { 'src': /(\u0254\u02d0)/g, 'dest': 'O:' },
  { 'src': /(o\u02d0)/g, 'dest': 'O:' },
  { 'src': /(v)/g, 'dest': 'v' },
  { 'src': /(w)/g, 'dest': 'w' },
  { 'src': /(\u028d)/g, 'dest': 'w' },
  { 'src': /(j)/g, 'dest': 'j' },
  { 'src': /(z)/g, 'dest': 'z' },
  { 'src': /(\u0292)/g, 'dest': 'Z' },
  { 'src': /(\u0294)/g, 'dest': '?' },
  
  // special edits
  { 'src': /(k\'a2n)/g, 'dest': 'k\'@n' },
  { 'src': /(ka2n)/g, 'dest': 'k@n' },
  { 'src': /(gg)/g, 'dest': 'g' },
  { 'src': /(@U)/g, 'dest': 'oU' },
  { 'src': /rr$/g, 'dest': 'r' },
  { 'src': /3r$/g, 'dest': '3:' },
  { 'src': /([iU]|([AO]:))@r$/g, 'dest': '$1@' },
  { 'src': /([^e])@r/g, 'dest': '$1:3' },
  { 'src': /e@r$/g, 'dest': 'e@' },
  { 'src': /e@r([bdDfghklmnNprsStTvwjzZ])/g, 'dest': 'e@$1' },
  // edits arising from testing
  { 'src': /(\'k)+/g, 'dest': 'k\'' },  
  { 'src': /(\ː)+/g, 'dest': ':' },
  { 'src': /(\:)+/g, 'dest': ':' },      
  { 'src': /(ᵻ)/g, 'dest': 'I' },
  { 'src': /(ɜ)/g, 'dest': '3' },  
  { 'src': /(ɔ)/g, 'dest': 'O' },  
  // feedback from formantzero via r/linguistics
  { 'src': /\u0361(.)/g, 'dest': '$1\'' },  
  { 'src': /3$/g, 'dest': 'R' }
];

const vocalize = (uipa, language) => {
  switch (language) {
    case 'french':
      meSpeak.loadVoice(frVoice);
      break;
    case 'spanish':
      meSpeak.loadVoice(esVoice);
      break;
    case 'english':
    default:
      meSpeak.loadVoice(enVoice);
      break;
  }
  const translatedToMeSpeak = meSpeakMappings.reduce((result, mapping) =>
    result.replace(mapping.src, mapping.dest)
  , uipa);
  const spoken = meSpeak.speak('[['+translatedToMeSpeak+']]', { 'rawdata': 'mime' });
  meSpeak.play(spoken);
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

    const vocalizeStyle = {border: 'none', background: 'inherit', cursor:'pointer'};
    const onClickVocalize = () => vocalize(fn(this.state.value), title.toLowerCase());

    return (
      <div>
        <h2>{title}</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        &nbsp;->&nbsp;<code>{fn(this.state.value)}</code> 
        {this.state.value.length > 0 ? <button style={vocalizeStyle} onClick={onClickVocalize}>🔊</button> : null}
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