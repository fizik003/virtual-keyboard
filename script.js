document.addEventListener('keydown', (e) => {
  console.log(e)
})

const rusSymbols = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
  ];

const engSymbols = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl',
];


const symbolsEventCode = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'Windows', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
  ];
  
  const symbolsShift = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
  ];


  const engSymbolsShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'
];

const noPrint = ['ShiftRight','ShiftLeft','Tab', 'Del', 'CapsLock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Control', '←', '↑', '↓', '→'];

class KeyBoard {
  constructor (){
    this.language = localStorage.getItem('language') || 'EN'
  }

  createDOMs(){
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    symbolsEventCode.forEach((el) => {
      const key = document.createElement('div')
      key.className = 'key'
      if(el === 'Backspace' || el === 'Tab') {
        key.classList.add('key-l', 'small-font')
      }
      else if (el === 'Space') {
        key.classList.add('key-space');
      }
      else if (el === 'CapsLock') {
        key.classList.add('key-xl', 'small-font');
      }
      else if (el === 'ShiftLeft' || el === 'ShiftRight' || el === 'Enter') {
        key.classList.add('key-xl', 'small-font')
      }
      else if (el === 'ControlLeft' || el === 'AltLeft' || el === 'AltRight') {
        key.classList.add('small-font');
      }
      this.keyboard.append(key);
      if (el === 'Backspace' || el === 'Delete' || el === 'Enter' || el === 'ShiftRight') {
        this.keyboard.innerHTML += '<span style="clear: both; display: block; width: 100%"></span>';
      }

    })
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'wrapper';
    this.textarea = document.createElement('textarea');
    this.textarea.className = ('textarea');
    this.wrapper.append(this.textarea);
    this.wrapper.append(this.keyboard);
    this.body = document.querySelector('body');
    this.body.append(this.wrapper)
  }

  writeSymbols(keys, symbols){

    keys.forEach((el,i) => {
      el.textContent = symbols[i];
    })
  }

  addSymbol(symbol) {
    let textarea = document.querySelector('.textarea').value;
    if(noPrint.includes(symbol)){
      textarea += '';
    }
    else if (symbol === 'Backspace') {
      textarea = textarea.slice(0, -1);
    }
    else if(symbol === 'Del') {
      textarea = textarea.slice(0,1);
    }
    else if(symbol === 'Enter') {
      textarea += '\n';
    }
    else {
      textarea += symbol;
    }
    document.querySelector('.textarea').value = textarea;
  }

  clickOnKey(keys){
    keys.forEach((el) => {
      el.addEventListener('click', (e) =>{
        if (e.target.textContent == 'CapsLock'){
          e.target.classList.toggle('active')
          if(e.target.classList.contains('active')){
            if(this.language === 'EN') {
              this.writeSymbols(keys, engSymbolsShift)
            }
            else{
              this.writeSymbols(keys,symbolsShift)
            }
          }
          else if (this.language == 'EN') {
            this.writeSymbols(keys, engSymbols)
          }
          else {
            this.writeSymbols(keys, rusSymbols)
          }
        }
        else {
          e.target.classList.add('active');
          setTimeout(() => {e.target.classList.remove('active')}, 220);
          this.addSymbol(e.target.textContent);
        }
      })
    })
  }

  keyboardPress(keys) {
    document.addEventListener('keydown', (e) =>{
      let indexPressKey = symbolsEventCode.indexOf(e.code);
      keys[indexPressKey].classList.add('active');

      if(e.altKey && e.shiftKey) {
        this.language = (this.language === 'EN') ? this.language = 'RU' : 'EN'
        localStorage.setItem('language', this.language);
      }

      if (e.shiftKey) {
        if(this.language == 'EN') {
          this.writeSymbols(keys, engSymbolsShift);
        }
        else {
          this.writeSymbols(keys, symbolsShift);
        }
      }
      if(e.getModifierState('CapsLock')) {
        if (e.shiftKey) {
          if(this.language == 'EN') {
            this.writeSymbols(keys, engSymbols);
          } else {
            this.writeSymbols(keys, rusSymbols);
          }
        } else if (this.language == 'EN') {
          this.writeSymbols(keys, engSymbolsShift);
        } else {
          this.writeSymbols(keys, symbolsEventCode);
        }
      }

      if(e.repeat) {
        this.addSymbol(keys[indexPressKey].textContent);
      }
      else{
        this.addSymbol(keys[indexPressKey].textContent);
      }
    })

    document.addEventListener('keyup', (e) => {
      if(e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        if (e.getModifierState('CapsLock')){
          if(this.language == 'EN') {
            this.writeSymbols(keys, engSymbolsShift);
          } else {
            this.writeSymbols(keys, symbolsShift);
          }
        } else if(this.language == 'EN') {
          this.writeSymbols(keys, engSymbols)
        } else {
          this.writeSymbols(keys, rusSymbols)
        }
      }

      if(e.getModifierState('CapsLock') === false) {
        if (!e.shiftKey) {
          if(this.language == 'EN') {
            this.writeSymbols(keys, engSymbols);
          } else{
            this.writeSymbols(keys, rusSymbols);
          }
        } else if(this.language == 'EN') {
          this.writeSymbols(keys, engSymbolsShift);
        } else {
          this.writeSymbols(keys, symbolsShift);
        }
      }
      let indexPressKey = symbolsEventCode.indexOf(e.code);
      keys[indexPressKey].classList.remove('active');

    })
  }




}


window.onload = () => {
  const keyboard = new KeyBoard();
  keyboard.createDOMs();
  const keys = document.querySelectorAll('.key');
  let symbols;
  if (keyboard.language == 'EN'){
    symbols = engSymbols;
  }
  else if (keyboard.language == 'RU'){
    symbols = rusSymbols;
  }
  keyboard.writeSymbols(keys, symbols);
  keyboard.clickOnKey(keys);
  keyboard.keyboardPress(keys);

}


