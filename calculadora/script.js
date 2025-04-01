
let fullOperation = '';
let history = []; // Almacena el historial de operaciones

function addNumber(number) {
  let op = fullOperation.split('');
  console.log(op);
  
  if ((op.includes('+') || op.includes('-') || op.includes('x') || op.includes('/') || op.includes('^')) && 
      (number.toString() === '+' || number.toString() === '-' || number.toString() === 'x' || number.toString() === '/' || number.toString() === '^')) return;

  if (number === "=") {
    calculate();
    return;
  }
  if(number === 'C'){
    fullOperation='';
    showNumber();
    return;
  }

  fullOperation = fullOperation + number.toString();
  showNumber();
}

function calculate() {
  let result;
  try {
    if (fullOperation.includes('+')) {
      let numbers = fullOperation.split('+');
      result = Number(numbers[0]) + Number(numbers[1]);
    } else if (fullOperation.includes('-')) {
      let numbers = fullOperation.split('-');
      result = Number(numbers[0]) - Number(numbers[1]);
    } else if (fullOperation.includes('x')) {
      let numbers = fullOperation.split('x');
      result = Number(numbers[0]) * Number(numbers[1]);
    } else if (fullOperation.includes('/')) {
      let numbers = fullOperation.split('/');
      if (Number(numbers[1]) === 0) throw "Error: División por cero";
      result = Number(numbers[0]) / Number(numbers[1]);
    } else if (fullOperation.includes('^')) {
      let numbers = fullOperation.split('^');
      result = Math.pow(Number(numbers[0]), Number(numbers[1]));
    } else {
      return;
    }
    
    history.push(fullOperation + ' = ' + result); // Agregar al historial
    fullOperation = result.toString();
    showNumber();
    updateHistory();
  } catch (error) {
    fullOperation = "Error";
    showNumber();
  }
}

function showNumber() {
  document.getElementById('operation').innerHTML = fullOperation;
}

function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = history.map(op => `<li>${op}</li>`).join('');
}
