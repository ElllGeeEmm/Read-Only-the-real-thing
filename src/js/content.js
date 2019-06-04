import { emailPattern, patterns } from './words'
import { fetchGif } from './fun'

window.onload = function() {
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
            fetchGif();

            console.log('new email opened');
            const body = document.body.innerText
            patterns.forEach(pattern => {
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
