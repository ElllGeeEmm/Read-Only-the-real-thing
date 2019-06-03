console.log('I am script 2');

const wordArray = [
  'regret to inform',
  'thank you for your interest',
  'I have the unpleasant duty',
  'you have not been selected',
  'we received a high volume of strong',
  'We received a high volume of applicants',
  'Thank you so much for taking the time',
  'writing with the disappointing news',
  'not to proceed',
  'I am really sorry to tell you that unfortunately',
  'We appreciate your interest',
  'After careful consideration',
  'we’ve decided it’s not quite the right match at this time',
  'We appreciate that you took the time to apply for the position',
  'We appreciate that you are interested in our company',
  'after carefully reviewing',
];

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const patterns = wordArray.map(word => new RegExp(word, 'gi'))
