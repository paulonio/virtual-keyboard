const data = [ 
    {
        main: '`',
        shifted: '~'
    },
    {
        main: '1',
        shifted: '!'
    },
    {
        main: '2',
        shifted: '@'
    },
    {
        main: '3',
        shifted: '#'
    },
    {
        main: '4',
        shifted: '$'
    },
    {
        main: '5',
        shifted: '%'
    },
    {
        main: '6',
        shifted: '^'
    },
    {
        main: '7',
        shifted: '&'
    },
    {
        main: '8',
        shifted: '*'
    },
    {
        main: '9',
        shifted: '('
    },
    {
        main: '0',
        shifted: ')'
    },
    {
        main: '-',
        shifted: '_'
    },
    {
        main: '=',
        shifted: '+'
    },
    {
        main: 'Backspace',
        shifted: 'Backspace'
    },
    {
        main: 'Tab',
        shifted: 'Tab'
    },
    {
        main: 'Q',
        shifted: 'q'
    },
    {
        main: 'W',
        shifted: 'w'
    },
    {
        main: 'E',
        shifted: 'e'
    },
    {
        main: 'R',
        shifted: 'r'
    },
    {
        main: 'T',
        shifted: 't'
    },
    {
        main: 'Y',
        shifted: 'y'
    },
    {
        main: 'U',
        shifted: 'u'
    },
    {
        main: 'I',
        shifted: 'i'
    },
    {
        main: 'O',
        shifted: 'o'
    },
    {
        main: 'P',
        shifted: 'p'
    },
    {
        main: '[',
        shifted: '{'
    },
    {
        main: ']',
        shifted: '}'
    },
    {
        main: '\u005C',
        shifted: '|'
    },
    {
        main: 'DEL',
        shifted: 'DEL'
    },
    {
        main: 'Caps Lock',
        shifted: 'Caps Lock'
    },
    {
        main: 'A',
        shifted: 'a'
    },
    {
        main: 'S',
        shifted: 's'
    },
    {
        main: 'D',
        shifted: 'd'
    },
    {
        main: 'F',
        shifted: 'f'
    },
    {
        main: 'G',
        shifted: 'g'
    },
    {

        main: 'H',
        shifted: 'h'
    },
    {
        main: 'J',
        shifted: 'j'
    },
    {
        main: 'K',
        shifted: 'k'
    },
    {
        main: 'L',
        shifted: 'l'
    },
    {
        main: ';',
        shifted: ':'
    },
    {
        main: "'",
        shifted: '"'
    },
    {
        main: 'Enter',
        shifted: 'Enter'
    },
    {
        main: 'Shift',
        shifted: 'Shift'
    },
    // {
    //     main: '\u005C',
    //     shifted: '\u005C'
    // },
    {
        main: 'Z',
        shifted: 'z'
    },
    {
        main: 'X',
        shifted: 'x'
    },
    {
        main: 'C',
        shifted: 'c'
    },
    {
        main: 'V',
        shifted: 'v'
    },
    {
        main: 'B',
        shifted: 'b'
    },
    {
        main: 'N',
        shifted: 'n'
    },
    {
        main: 'M',
        shifted: 'm'
    },
    {
        main: ',',
        shifted: '<'
    },
    {
        main: '.',
        shifted: '>'
    },
    {
        main: '/',
        shifted: '?'
    },
    {
        main: '\u2191',
        shifted: '\u2191'
    },
    {
        main: 'Shift',
        shifted: 'Shift'
    },
    {
        main: 'Ctrl',
        shifted: 'Ctrl'
    },
    {
        main: 'Win',
        shifted: 'Win'
    },
    {
        main: 'Alt',
        shifted: 'Alt'
    },
    {
        main: 'Space',
        shifted: 'Space'
    },
    {
        main: 'Alt',
        shifted: 'Alt'
    },
    {
        main: 'Ctrl',
        shifted: 'Ctrl'
    },
    {
        main: '\u2190',
        shifted: '\u2190'
    },
    {
        main: '\u2193',
        shifted: '\u2193'
    },
    {
        main: '\u2192',
        shifted: '\u2192'
    }
];

window.onload = function() {
    renderMain(data);
    keyboardEvent();
    mouseEvent();
}

// Class
const body = document.querySelector('body');

class Keyboard {
    constructor(main, shifted) {
        this.main = main;
        this.shifted = shifted;
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
            if (this.main[i] === 'Backspace') {
                keys1[i].classList.add('backspace_key')
            }
            if (this.main[i] === 'Backspace') {
                keys1[i].innerText = `${this.main[i]}`;   
            } else {
                keys1[i].innerText = `${this.main[i].toLowerCase()}`;
            }
            keys1[i].setAttribute('key-value', this.main[i]);
            keys1[i].setAttribute('lower-case', this.main[i].toLowerCase());

                     
        }

        for (let i = 0; i < 15; i++) {
            keys2.push(document.createElement('div'));
            keys2[i].className = 'keys';
            if (this.main[i + 14] === 'Tab') {
                keys2[i].classList.add('tab_key')
            } else if (this.main[i + 14] === 'DEL') {
                keys2[i].classList.add('del_key')
            }
            if (this.main[i + 14] === 'Tab' || this.main[i + 14] === 'DEL') {
                keys2[i].innerText = `${this.main[i + 14]}`
            } else {
                keys2[i].innerText = `${this.main[i + 14].toLowerCase()}`;
            }
            keys2[i].setAttribute('key-value', this.main[i + 14]);
            keys2[i].setAttribute('lower-case', this.main[i + 14].toLowerCase());
        }

        for (let i = 0; i < 13; i++) {
            keys3.push(document.createElement('div'));
            keys3[i].className = 'keys';
            if (this.main[i + 29] === 'Caps Lock') {
                keys3[i].classList.add('caps-lock_key');
                keys3[i].innerText = `${this.main[i + 29]}`;
            } else if (this.main[i + 29] === 'Enter') {
                keys3[i].classList.add('enter_key');
                keys3[i].innerText = `${this.main[i + 29]}`;
            } else {
                keys3[i].innerText = `${this.main[i + 29].toLowerCase()}`;
            }
            keys3[i].setAttribute('key-value', this.main[i + 29]);
            keys3[i].setAttribute('lower-case', this.main[i + 29].toLowerCase());

            keys4.push(document.createElement('div'));
            keys4[i].className = 'keys';
            if (this.main[i + 42] === 'Shift') {
                keys4[i].classList.add('shift_key');
                keys4[i].innerText = `${this.main[i + 42]}`;
            } else {
                keys4[i].innerText = `${this.main[i + 42].toLowerCase()}`;
            }
            keys4[i].setAttribute('key-value', this.main[i + 42]);
            keys4[i].setAttribute('lower-case', this.main[i + 42].toLowerCase());  
        }

        for (let i = 0; i < 9; i++) {
            keys5.push(document.createElement('div'));
            keys5[i].className = 'keys';
            if (this.main[i + 55] === 'Ctrl') {
                keys5[i].classList.add('ctrl_key');
                keys5[i].innerText = `${this.main[i + 55]}`;
            } else if (this.main[i + 55] === 'Win') {
                keys5[i].classList.add('win_key');
                keys5[i].innerText = `${this.main[i + 55]}`;
            } else if (this.main[i + 55] === 'Alt') {
                keys5[i].classList.add('alt_key');
                keys5[i].innerText = `${this.main[i + 55]}`;
            } else if (this.main[i + 55] === 'Space') {
                keys5[i].classList.add('space_key');
                keys5[i].innerText = `${this.main[i + 55]}`;
            } else {
                keys5[i].innerText = `${this.main[i + 55].toLowerCase()}`;
            }
            keys5[i].setAttribute('key-value', this.main[i + 55]);
            keys5[i].setAttribute('lower-case', this.main[i + 55].toLowerCase());
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
        const capsButton = document.querySelector('.caps-lock_key');
        const winButton = document.querySelector('.win_key');
        const tabButton = document.querySelector('.tab_key');
        const input = document.querySelector('.input');

        const check = () => {
            keyButtons.forEach(e => {     
                if (e.innerText.length === 1) {
                    if (Array.from(capsButton.classList).includes('active')) {
                            e.innerText = e.innerText.toUpperCase();
                    } else {
                            e.innerText = e.innerText.toLowerCase();
                    }
                } 
            })
        } 

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
                    check(); 
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

        window.addEventListener('keyup', (e) => {
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

        window.addEventListener('keydown', (e) => {
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                keyButtons.forEach((elem, index) => {
                    if (elem.innerText.toLowerCase() === elem.innerText.toUpperCase() && index < 64) {
                        elem.innerText = data[index]['shifted'];
                    } else if (elem.innerText.length === 1 && index < 65) {
                        if (elem.innerText.toUpperCase() === elem.innerText) {
                            elem.innerText = elem.innerText.toLowerCase();
                        } else {
                            elem.innerText = elem.innerText.toUpperCase();
                        }
                    } 
                })
            }
            if (e.code === 'Tab') {
                e.preventDefault();
                input.value += '    ';
            }
        })

        window.addEventListener('keyup', (e) => {
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                keyButtons.forEach((elem, index) => {
                    if (elem.innerText.toLowerCase() === elem.innerText.toUpperCase() && index < 64) {
                        elem.innerText = data[index]['main'];
                    } else if (elem.innerText.length === 1 && index < 65) {
                        if (elem.innerText.toUpperCase() === elem.innerText) {
                            elem.innerText = elem.innerText.toLowerCase();
                        } else {
                            elem.innerText = elem.innerText.toUpperCase();
                        }
                    } 
                })
            }
        })
    }

    mouseClick() {
        const keyButtons = document.querySelectorAll('.keys');
        const tabButton = document.querySelector('.tab_key');
        const capsButton = document.querySelector('.caps-lock_key');
        const shiftButton = document.querySelectorAll('.shift_key');
        const ctrlButton = document.querySelectorAll('.ctrl_key');
        const altButton = document.querySelectorAll('.alt_key');
        const input = document.querySelector('.input');
         
        capsButton.addEventListener('click', (e) => {        
            capsButton.classList.toggle('active');
            check(); 
        })

        const check = () => {
            keyButtons.forEach(e => {     
                if (e.innerText.length === 1) {
                    if (Array.from(capsButton.classList).includes('active')) {
                            e.innerText = e.innerText.toUpperCase();
                    } else {
                            e.innerText = e.innerText.toLowerCase();
                    }
                } 
            })
        } 

        shiftButton.forEach(e => {
            e.addEventListener('mousedown', () => {
                keyButtons.forEach((elem, index) => {
                    if (elem.innerText.toLowerCase() === elem.innerText.toUpperCase() && index < 64) {
                        elem.innerText = data[index]['shifted'];
                    } else if (elem.innerText.length === 1 && index < 64) {
                        if (elem.innerText.toUpperCase() === elem.innerText) {
                            elem.innerText = elem.innerText.toLowerCase();
                        } else {
                            elem.innerText = elem.innerText.toUpperCase();
                        }
                    }
                })
            })

            e.addEventListener('mouseup', () => {
                keyButtons.forEach((elem, index) => {
                    if (elem.innerText.toLowerCase() === elem.innerText.toUpperCase() && index < 64) {
                        elem.innerText = data[index]['main'];
                    } else if (elem.innerText.length === 1 && index < 64) {
                        if (elem.innerText.toUpperCase() === elem.innerText) {
                            elem.innerText = elem.innerText.toLowerCase();
                        } else {
                            elem.innerText = elem.innerText.toUpperCase();
                        }
                    } 
                })
            })
        })

        window.addEventListener('mousedown', (e) => {
            
            for (let i = 0; i < 64; i++) {
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') !== 'Caps Lock' && event.target.getAttribute('key-value') !== 'Shift' && event.target.getAttribute('key-value') !== 'Ctrl' && event.target.getAttribute('key-value') !== 'Alt' && event.target.getAttribute('key-value') !== 'Space' && event.target.getAttribute('key-value') !== 'Enter' && event.target.getAttribute('key-value') !== 'Backspace' && event.target.getAttribute('key-value') !== 'DEL' && event.target.getAttribute('key-value') !== 'Win' && event.target.getAttribute('key-value') !== 'Tab') {
                    keyButtons[i].classList.add('active');
                    input.value += keyButtons[i].innerText;
                }
                // Button Functions
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Space') {
                    keyButtons[i].classList.add('active');
                    input.value += ' ';
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Enter') {
                    keyButtons[i].classList.add('active');
                    input.value += '\n';
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Backspace') {
                    keyButtons[i].classList.add('active');
                    input.value = input.value.toString().slice(0, -1);
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Shift') {
                    keyButtons[i].classList.add('active');
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Ctrl') {
                    keyButtons[i].classList.add('active');
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Alt') {
                    keyButtons[i].classList.add('active');
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Win') {
                    keyButtons[i].classList.add('active');
                }
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') === 'Tab') {
                    keyButtons[i].classList.add('active');
                    input.value += '    ';
                }
            } 
        })

        window.addEventListener('mouseup', (e) => {
            for (let i = 0; i < keyButtons.length; i++) {
                if (event.which === 1 && event.target.getAttribute('key-value') === keyButtons[i].getAttribute('key-value') && event.target.getAttribute('key-value') !== 'Caps Lock') {
                    keyButtons[i].classList.remove('active');                             
                }
            }
        })

        window.addEventListener('click', (e) => {
            tabButton.classList.remove('active');
            input.focus();
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

const renderMain = (data) => {
    return new Keyboard(data.map(e => {
        return e['main']
    })).generateKeyboard()    
}

// const renderShifted = (data) => {
//     return new Keyboard(data.map(e => {
//         return e['shifted']
//     })).generateKeyboard()    
// }
