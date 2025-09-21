let seconds = 5;
const countdownDisplay = document.getElementById('countdown');

function countdown() {
    countdownDisplay.textContent = seconds;
    if (seconds <= 0) {
        window.location.href = 'https://madebymonte.com/tv/network?pl=PLBBJAlV7wxvW8q7huPfExb2sz5U7gfvMT';
        return;
    }
    seconds--;
    setTimeout(countdown, 0);
}

countdown();

var clipboardUrl = new Clipboard('[data-clipboard-url]');

clipboardUrl.on('success', function (e) {
    e.clearSelection();

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    showTooltip(e.trigger, 'Copied!');
});

clipboardUrl.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);

    showTooltip(e.trigger, fallbackMessage(e.action));
});

// tooltips.js

var btns = document.querySelectorAll('.btn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseleave', clearTooltip);
    btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
    e.currentTarget.setAttribute('class', 'btn');
    e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'btn tooltipped tooltipped-s');
    elem.setAttribute('aria-label', msg);
}