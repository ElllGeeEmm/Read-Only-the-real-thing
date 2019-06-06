import { emailPattern, patterns } from './words'
import { fetchGif } from './fun'
import "../css/gif.css"

window.onload = function() {
  alert('fuck off')

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };
  const titleNode = document.querySelector('title');
  console.log(titleNode, titleNode.innerText.match(emailPattern)[0]);
  // Callback function to execute when mutations are observed
  const main = function(mutationsList, observer) {
    const titlesHTML = document.querySelectorAll('span.bqe')
    const emailTitles = new Set(Array.from(titlesHTML).map(title => title.innerText))
    for(let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        emailTitles.forEach(title => {
          if (titleNode.innerText.includes(title)) {
            const gif = fetchGif().then(gif => {
              //const popupDiv = document.createElement('div');
              const popupDiv = document.createElement('img');
              console.log(gif.data.data);
              const url = gif.data.data.fixed_width_small_url;
              console.log(url);
              const formatted_url = url.split('//')[1]
              popupDiv.classList.add('gif');
              //popupDiv.style.backgroundImage = `url('https://cors-anywhere.herokuapp.com/${gif.data.data.embed_url}')`;
              popupDiv.src = url
              document.body.appendChild(popupDiv);
            });
            console.log('sup', gif);
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
  const observer = new MutationObserver(main);

  // Start observing the target node for configured mutations
  observer.observe(titleNode, config);
};
