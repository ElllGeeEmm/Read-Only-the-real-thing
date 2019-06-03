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

window.onload = function(){
  alert('fuck off')

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };
  const titleNode = document.querySelector('title');
  console.log(titleNode, titleNode.innerText.match(emailPattern)[0]);
  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
    const titlesHTML = document.querySelectorAll('span.bqe')
    const emailTitles = new Set(Array.from(titlesHTML).map(title => title.innerText))
    for(let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        emailTitles.forEach(title => {
          if (titleNode.innerText.includes(title)) {
            console.log('new email opened');
            const body = document.body.innerText
            patterns.forEach(pattern =>{
              if(!!body.match(pattern)) {
                console.log("ha ha you got rejected");
              }
            })
          }
        })
        //console.log(body);
      } else if (mutation.type == 'attributes') {
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
      }
    }
  }
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(titleNode, config);
};
