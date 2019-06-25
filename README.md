## Read Only 
A chrome extension that reads emails in order to look for rejections patterns that comes from jobs, grants and projects applications and takes over the emails with happy gifs and encouragements expressions. 
This project's goal is to make a dread process to a happy one :)

[install plugin](https://chrome.google.com/webstore/detail/read-only/oojhhdobnhhjidcdbdjkfmfafdnddgij?hl=en-US&gl=US&authuser=1)

![image3](https://i.imgur.com/xSf9PL6.png)

# Technology 
JavaScript, Chrome Extension, ReGex, WebPack, Giphy API.

# Code Snippet
the entire code is based on DOM manipulation - we are not storing, keeping or looking for any personal data, just tracking windows activities inside the Gmail inbox within unread emails, and then matching text patterns using ReGex.
```
for(let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        emailTitles.forEach(title => {
          if (titleNode.innerText.includes(title)) {
            const body = document.body.innerText
            patterns.forEach(pattern => {
              if(!!body.match(pattern)) {
                console.log("ha ha you got rejected");
  ```
# Credits
made by [shirin anlen](https://shirin.works/) and [Robert Morrissey](https://robertmorrissey.dev/)

![image4](https://i.imgur.com/OyXyTtb.png)

<3

