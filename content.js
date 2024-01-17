/* The code snippet is adding an event listener to the `chrome.runtime.onMessage` event. This event is
triggered when a message is sent from another part of the extension or from a content script. */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    /* The code snippet is checking if the `message` property of the `request` object is equal to the
    string `'theme_toggle_dark'`. If it is, it logs the value of `request.message` to the console
    and sends a response back to the sender with a success message. */
    if (request.message === 'theme_toggle_dark') {
        console.log(request.message);
        document.body.style="background-color: #222222 !important; font-weight: 900 !important;";

        /* The `sendResponse({ message: { "theme_toggle_dark": "success" } });` line of code is sending
        a response back to the sender of the message. It creates an object with a `message`
        property, which itself is an object with a key-value pair of `"theme_toggle_dark":
        "success"`. This response indicates that the message was successfully received and
        processed. */
        sendResponse({ message: { "theme_toggle_dark": "success" } });
    }
    if (request.message === 'italic_toggle') {
        console.log(request.message);
        document.body.style="background-color: #222222 !important; font-weight: 900 !important; font-style: italic !important;";

        /* The `sendResponse({ message: { "theme_toggle_dark": "success" } });` line of code is sending
        a response back to the sender of the message. It creates an object with a `message`
        property, which itself is an object with a key-value pair of `"theme_toggle_dark":
        "success"`. This response indicates that the message was successfully received and
        processed. */
        sendResponse({ message: { "theme_toggle_dark": "success" } });
    }
})