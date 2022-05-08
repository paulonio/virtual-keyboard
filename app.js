const data = [ 
    {value: '`'},
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '0'},
    {value: '-'},
    {value: '='},
    {value: 'Backspace'},
    {value: 'Tab'},
    {value: 'Q'},
    {value: 'W'},
    {value: 'E'},
    {value: 'R'},
    {value: 'T'},
    {value: 'Y'},
    {value: 'U'},
    {value: 'I'},
    {value: 'O'},
    {value: 'P'},
    {value: '['},
    {value: ']'},
    {value: '\u005C'},
    {value: 'DEL'},
    {value: 'Caps Lock'},
    {value: 'A'},
    {value: 'S'},
    {value: 'D'},
    {value: 'F'},
    {value: 'G'},
    {value: 'H'},
    {value: 'J'},
    {value: 'K'},
    {value: 'L'},
    {value: ';'},
    {value: '\u2019'},
    {value: 'Enter'},
    {value: 'Shift'},
    {value: '\u005C'},
    {value: 'Z'},
    {value: 'X'},
    {value: 'C'},
    {value: 'V'},
    {value: 'B'},
    {value: 'N'},
    {value: 'M'},
    {value: ','},
    {value: '.'},
    {value: '/'},
    {value: '\u2191'},
    {value: 'Shift'},
    {value: 'Ctrl'},
    {value: 'Win'},
    {value: 'Alt'},
    {value: 'Space'},
    {value: 'Alt'},
    {value: 'Ctrl'},
    {value: '\u2190'},
    {value: '\u2193'},
    {value: '\u2192'}
];

window.onload = function() {
    render(data);
    keyboardEvent();
    mouseEvent();
}

// Class
const body = document.querySelector('body');

class Keyboard {
    constructor(value) {
        this.value = value;
    }

    generateKeyboard() {
        let container = document.createElement('div');
        let textArrea = document.createElement('textarea');
        let keyboardContainer = document.createElement('div');
        let row1 = document.createElement('div');
        let row2 = document.createElement('div');
        let row3 = document.createElement('div');
        let row4 = document.createElement('div');
        let row5 = document.createElement('div');

        let keys1 = [];
        let keys2 = [];
        let keys3 = [];
        let keys4 = [];
        let keys5 = [];
        for (let i = 0; i < 14; i++) {
            keys1.push(document.createElement('div'));
            keys1[i].className = 'keys';
            if (this.value[i] === 'Backspace') {
                keys1[i].classList.add('backspace_key')
            }
            keys1[i].innerText = `${this.value[i]}`;
            keys1[i].setAttribute('key-value', this.value[i]);
            keys1[i].setAttribute('lower-case', this.value[i].toLowerCase());

            keys4.push(document.createElement('div'));
            keys4[i].className = 'keys';
            if (this.value[i + 42] === 'Shift') {
                keys4[i].classList.add('shift_key')
            }
            keys4[i].innerText = `${this.value[i + 42]}`;
            keys4[i].setAttribute('key-value', this.value[i + 42]);
            keys4[i].setAttribute('lower-case', this.value[i + 42].toLowerCase());           
        }

        for (let i = 0; i < 15; i++) {
            keys2.push(document.createElement('div'));
            keys2[i].className = 'keys';
            if (this.value[i + 14] === 'Tab') {
                keys2[i].classList.add('tab_key')
            } else if (this.value[i + 14] === 'DEL') {
                keys2[i].classList.add('del_key')
            }
            keys2[i].innerText = `${this.value[i + 14]}`;
            keys2[i].setAttribute('key-value', this.value[i + 14]);
            keys2[i].setAttribute('lower-case', this.value[i + 14].toLowerCase());
        }

        for (let i = 0; i < 13; i++) {
            keys3.push(document.createElement('div'));
            keys3[i].className = 'keys';
            if (this.value[i + 29] === 'Caps Lock') {
                keys3[i].classList.add('caps-lock_key')
            } else if (this.value[i + 29] === 'Enter') {
                keys3[i].classList.add('enter_key')
            }
            keys3[i].innerText = `${this.value[i + 29]}`;
            keys3[i].setAttribute('key-value', this.value[i + 29]);
            keys3[i].setAttribute('lower-case', this.value[i + 29].toLowerCase());
        }

        for (let i = 0; i < 9; i++) {
            keys5.push(document.createElement('div'));
            keys5[i].className = 'keys';
            if (this.value[i + 56] === 'Ctrl') {
                keys5[i].classList.add('ctrl_key')
            } else if (this.value[i + 56] === 'Win') {
                keys5[i].classList.add('win_key')
            } else if (this.value[i + 56] === 'Alt') {
                keys5[i].classList.add('alt_key')
            } else if (this.value[i + 56] === 'Space') {
                keys5[i].classList.add('space_key')
            }
            keys5[i].innerText = `${this.value[i + 56]}`;
            keys5[i].setAttribute('key-value', this.value[i + 56]);
            keys5[i].setAttribute('lower-case', this.value[i + 56].toLowerCase());
        }

        container.className = 'container';
        textArrea.className = 'input';
        textArrea.setAttribute('type', 'text');
        textArrea.setAttribute('autofocus', true);
        keyboardContainer.className = 'keyboard__container';
        let rows = [row1, row2, row3, row4, row5];
        rows.forEach(e => {
            e.className = 'row';
        })

        body.append(container);
        container.append(textArrea);
        container.append(keyboardContainer);

        rows.forEach(e => {
            keyboardContainer.append(e) 
        })
        keys1.forEach(e => {
            row1.append(e)
        })
        keys2.forEach(e => {
            row2.append(e)
        })
        keys3.forEach(e => {
            row3.append(e)
        })
        keys4.forEach(e => {
            row4.append(e)
        })
        keys5.forEach(e => {
            row5.append(e)
        })

        return container;
    }

    keystroke() {
        const keyButtons = document.querySelectorAll('.keys');

        window.addEventListener('keydown', (e) => {
            for (let i = 0; i < keyButtons.length; i++) {
                if (e.key === keyButtons[i].getAttribute('key-value') || e.key === keyButtons[i].getAttribute('lower-case')) {           
                    keyButtons[i].classList.add('active');
                }
                if (e.code === keyButtons[i].getAttribute('key-value')) {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'CapsLock' &&  keyButtons[i].getAttribute('key-value') === 'Caps Lock') {
                    keyButtons[i].classList.toggle('active');
                }
                if ((e.code === 'ControlLeft' || e.code === 'ControlRight') &&  keyButtons[i].getAttribute('key-value') === 'Ctrl') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'MetaLeft' &&  keyButtons[i].getAttribute('key-value') === 'Win') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'Quote' &&  keyButtons[i].getAttribute('key-value') === '\u2019') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'ArrowUp' &&  keyButtons[i].getAttribute('key-value') === '\u2191') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'ArrowDown' &&  keyButtons[i].getAttribute('key-value') === '\u2193') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'ArrowRight' &&  keyButtons[i].getAttribute('key-value') === '\u2192') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'ArrowLeft' &&  keyButtons[i].getAttribute('key-value') === '\u2190') {
                    keyButtons[i].classList.add('active');
                }
                if (e.code === 'Delete' &&  keyButtons[i].getAttribute('key-value') === 'DEL') {
                    keyButtons[i].classList.add('active');
                }
            }
        });

        window.addEventListener('keyup', function(e) {
            for (let i = 0; i < keyButtons.length; i++) {
                if (e.key === keyButtons[i].getAttribute('key-value') || e.key == keyButtons[i].getAttribute('lower-case')) {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === keyButtons[i].getAttribute('key-value')) {
                    keyButtons[i].classList.remove('active')
                }
                if ((e.code === 'ControlLeft' || e.code === 'ControlRight') &&  keyButtons[i].getAttribute('key-value') === 'Ctrl') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'MetaLeft' &&  keyButtons[i].getAttribute('key-value') === 'Win') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'Quote' &&  keyButtons[i].getAttribute('key-value') === '\u2019') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'ArrowUp' &&  keyButtons[i].getAttribute('key-value') === '\u2191') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'ArrowDown' &&  keyButtons[i].getAttribute('key-value') === '\u2193') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'ArrowRight' &&  keyButtons[i].getAttribute('key-value') === '\u2192') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'ArrowLeft' &&  keyButtons[i].getAttribute('key-value') === '\u2190') {
                    keyButtons[i].classList.remove('active');
                }
                if (e.code === 'Delete' &&  keyButtons[i].getAttribute('key-value') === 'DEL') {
                    keyButtons[i].classList.remove('active');
                }
            }
        });
    }

    mouseClick() {
        const keyButtons = document.querySelectorAll('.keys');
        const tabButton = document.querySelector('.tab_key');
        const capsButton = document.querySelector('.caps-lock_key');
        const shiftButton = document.querySelectorAll('.shift_key');
        const ctrlButton = document.querySelectorAll('.ctrl_key');
        const winButton = document.querySelector('.win_key');
        const altButton = document.querySelectorAll('.alt_key');
        const input = document.querySelector('.input');
        
        
        capsButton.addEventListener('click', (e) => {        
            capsButton.classList.toggle('active'); 
        })
        shiftButton.forEach((elem) => {
            elem.addEventListener('click', (e) => {        
                shiftButton.forEach((elem) => {
                    elem.classList.toggle('active'); 
                })
            })
        })
        ctrlButton.forEach((elem) => {
            elem.addEventListener('click', (e) => {        
                ctrlButton.forEach((elem) => {
                    elem.classList.toggle('active'); 
                })
            })
        })
        altButton.forEach((elem) => {
            elem.addEventListener('click', (e) => {        
                altButton.forEach((elem) => {
                    elem.classList.toggle('active'); 
                })
            })
        })
        winButton.addEventListener('click', (e) => {        
            winButton.classList.toggle('active'); 
        })

        window.addEventListener('mousedown', (e) => {
            
            for (let i = 0; i < keyButtons.length; i++) {
                console.log()
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') !== 'Caps Lock' && event.target.getAttribute('key-value') !== 'Shift' && event.target.getAttribute('key-value') !== 'Ctrl' && event.target.getAttribute('key-value') !== 'Win' && event.target.getAttribute('key-value') !== 'Alt' && event.target.getAttribute('key-value') !== 'Space' && event.target.getAttribute('key-value') !== 'Enter') {
                    keyButtons[i].classList.add('active');
                    input.value += keyButtons[i].innerText;
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && (event.target.getAttribute('key-value') === 'Space' || event.target.getAttribute('key-value') === 'Enter')) {
                    keyButtons[i].classList.add('active');
                } 
            }
            if (event.which === 1 && event.target.getAttribute('key-value') === 'Space' && event.target.getAttribute('key-value') === 'Enter') {
                input.value += ' ';
            }  
        })

        window.addEventListener('mouseup', (e) => {
            for (let i = 0; i < keyButtons.length; i++) {
                // console.log()
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') !== 'Caps Lock' && event.target.getAttribute('key-value') !== 'Shift' && event.target.getAttribute('key-value') !== 'Ctrl' && event.target.getAttribute('key-value') !== 'Win' && event.target.getAttribute('key-value') !== 'Alt') {
                    keyButtons[i].classList.remove('active');                             
                }
            }
        })

        window.addEventListener('click', (e) => {
            tabButton.classList.remove('active');
            input.focus();
            console.log(input.innerText)
        })
    }
    
}

// Functions
const keyboardEvent = () => {
    return new Keyboard().keystroke()
}

const mouseEvent = () => {
    return new Keyboard().mouseClick()
}

const render = (data) => {
    return new Keyboard(data.map(e => {
        return e['value']
    })).generateKeyboard()    
}

// Window Events
// window.addEventListener('keydown', keyboardEvent);

// let divs = data.map((e, i) => {
//     return e['value']
// })



// window.addEventListener('keydown', (e) => {

// })
