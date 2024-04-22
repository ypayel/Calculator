class Calculator {
    constructor() {
      this.display = document.getElementById('display');
      this.clear();
    }

    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
      this.updateDisplay();
    }

    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
      this.updateDisplay();
    }

    appendOperator(operator) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.calculate();
      }
      this.operation = operator;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }

    calculate() {
      let result;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = result;
      this.operation = undefined;
      this.previousOperand = '';
      this.updateDisplay();
    }

    updateDisplay() {
      this.display.value = this.currentOperand;
    }
  }

  const calculator = new Calculator();