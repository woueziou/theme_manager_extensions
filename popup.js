document.addEventListener('DOMContentLoaded', () => {


    /* `const toggleBtn = document.getElementById('toggle-btn');` is assigning the DOM element with the
    id 'toggle-btn' to the variable `toggleBtn`. */
    const toggleBtn = document.getElementById('toggle-btn');
    const italicBtn = document.getElementById('italic-btn');

    /* The code `toggleBtn.onclick = () => {}` is assigning an event handler function to the `onclick`
    event of the `toggleBtn` element. When the `toggleBtn` element is clicked, the function inside the
    curly braces will be executed. However, since the function is empty in this case, nothing will
    happen when the button is clicked. */
    toggleBtn.onclick = () => {
       /* The line `console.log('Toggle button clicked');` is logging the message "Toggle button
       clicked" to the console. This is a way to output information or debug messages during the
       execution of the code. */
       console.log('Toggle button clicked');


  /* The code `chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) { ... })` is
  using the Chrome extension API to query for the currently active tab in the current window. */
       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

       /* The code `chrome.tabs.sendMessage(tabs[0].id, { message: 'theme_toggle_dark' }, function
       (response) { console.log(response); window.close() })` is using the Chrome extension API to
       send a message to the content script running in the currently active tab. */
        chrome.tabs.sendMessage(tabs[0].id, { message: 'theme_toggle_dark' },
            function (response) {
                console.log(response); // response is data sent back from the website 
                window.close() // close the popup window after the message the action on the web site is done
            })
    });

    }
    italicBtn.onclick = () => {
       /* The line `console.log('Toggle button clicked');` is logging the message "Toggle button
       clicked" to the console. This is a way to output information or debug messages during the
       execution of the code. */
       console.log('Toggle button clicked');


  /* The code `chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) { ... })` is
  using the Chrome extension API to query for the currently active tab in the current window. */
       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

       /* The code `chrome.tabs.sendMessage(tabs[0].id, { message: 'theme_toggle_dark' }, function
       (response) { console.log(response); window.close() })` is using the Chrome extension API to
       send a message to the content script running in the currently active tab. */
        chrome.tabs.sendMessage(tabs[0].id, { message: 'italic_toggle' },
            function (response) {
                console.log(response); // response is data sent back from the website 
                window.close() // close the popup window after the message the action on the web site is done
            })
    });

    }
});