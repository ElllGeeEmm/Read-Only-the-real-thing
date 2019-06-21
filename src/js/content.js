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
    const divsToDelete = document.querySelectorAll('.gif')
    divsToDelete.forEach((node) => {
      node.parentNode.removeChild(node);
    })
    console.log(divsToDelete);
    for(let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        emailTitles.forEach(title => {
          if (titleNode.innerText.includes(title)) {
            const body = document.body.innerText
            patterns.forEach(pattern => {
              if(!!body.match(pattern)) {
                console.log("ha ha you got rejected");
                const gif = fetchGif().then(gif => {
                  const popupDiv = document.createElement('img');
                  const index = Math.floor(Math.random() * 24)
                  const url = gif.data.data[index].images.original.url === '' ? (
                    'https://media.giphy.com/media/3ov9k0Ziq50EoOuWRi/giphy.gif'
                  ) : (
                    gif.data.data[index].images.original.url
                  );
                  console.log(url);
                  popupDiv.classList.add('gif');
                  popupDiv.src = url
                  popupDiv.style.bottom= Math.ceil(Math.random() * 650) + 'px';
                  popupDiv.style.left= Math.ceil(Math.random() * 680) + 'px';
                  document.body.appendChild(popupDiv);
                });
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
