
// elements.addEventListener('click', function() {
//     console.log('clicked');

function addEventListeners() {
    const elements = document.querySelectorAll('.event-listener');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log('clicked');
        });
    });
}

//with an arrow function

function addEventListenersArrow() {
    const elements = document.querySelectorAll('.event-listener');
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            console.log('clicked');
        });
    });
}

//with an anonymous function

function addEventListenersAnonymous() {
    const elements = document.querySelectorAll('.event-listener');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log('clicked');
        });
    });
}

//with a named function

function addEventListenersNamed() {
    const elements = document.querySelectorAll('.event-listener');
    elements.forEach(function(element) {
        element.addEventListener('click', handleClick);
    });
}

//with a named function and an arrow function

function addEventListenersNamedArrow() {
    const elements = document.querySelectorAll('.event-listener');
    elements.forEach(function(element) {
        element.addEventListener('click', handleClickArrow);
    });
}

//common events in Js
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in HTML
//onclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress, onfocus, onblur, onchange, onsubmit, onload, onresize, onscroll, onunload, onerror
//common events in CSS
//hover, active, focus, focus-within, focus-visible, target, checked, disabled, enabled, first-child, last-child, nth-child, nth-of-type, not, empty, before, after
//common events in React
//onClick, onMouseOver, onMouseOut, onKeyDown, onKeyUp, onKeyPress, onFocus, onBlur, onChange, onSubmit, onLoad, onResize, onScroll, onUnload, onError
//common events in Angular
//(click), (mouseover), (mouseout), (keydown), (keyup), (keypress), (focus), (blur), (change), (submit), (load), (resize), (scroll), (unload), (error)
//common events in Vue
//@click, @mouseover, @mouseout, @keydown, @keyup, @keypress, @focus, @blur, @change, @submit, @load, @resize, @scroll, @unload, @error
//common events in jQuery
//click(), mouseover(), mouseout(), keydown(), keyup(), keypress(), focus(), blur(), change(), submit(), load(), resize(), scroll(), unload(), error()
//common events in Bootstrap
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Tailwind CSS
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Bulma
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Foundation
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Materialize CSS
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Semantic UI
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in UIKit
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Spectre CSS
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Primer CSS
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
//common events in Tachyons
//click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error


