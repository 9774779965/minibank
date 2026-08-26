class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`\n=== Добро пожаловать! ===`);
    console.log(`Счёт: ${accountNumber}`);
    console.log(`Баланс: ${balance.toLocaleString('ru-RU')} RUB`);
  }
  deposit(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      console.log(`\x1b[31mОшибка: введите корректное число\x1b[0m`);
      return;
    }
    if (amount <= 0) {
      console.log(`\x1b[31mОшибка: сумма должна быть положительной\x1b[0m`);
      return;
    }
    this.balance += amount;
    console.log(`Внесено: ${amount.toLocaleString('ru-RU')} RUB`);
  }
  withdraw(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      console.log(`\x1b[31mОшибка: введите корректное число\x1b[0m`);
      return;
    }
    if (amount > this.balance) {
      console.log(`\x1b[31mПопытка снятия ${amount.toLocaleString('ru-RU')} RUB — НЕДОСТАТОЧНО СРЕДСТВ\x1b[0m`);
      console.log(`Доступно: ${this.balance.toLocaleString('ru-RU')} RUB`);
      return;
    }
    this.balance -= amount;
    console.log(`Снято: ${amount.toLocaleString('ru-RU')} RUB`);
  }
  showBalance() {
    console.log(`Текущий баланс: ${this.balance.toLocaleString('ru-RU')} RUB`);
  }
}
const readline = require('readline');
const account = new BankAccount("sapojojo123", 10000);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function startMenu() {
  console.log(`\nДоступные команды: [Баланс], [Внесение], [Снятие], [Выход]`);
  rl.question('Введите команду: ', (input) => {
    const command = input.trim().toLowerCase();
    switch (command) {
      case 'баланс':
        account.showBalance();
        startMenu();
        break;
      case 'внесение':
        rl.question('Какую сумму внести? ', (amountInput) => {
          const amount = parseFloat(amountInput);
          account.deposit(amount);
          startMenu();
        });
        break;
      case 'снятие':
        rl.question('Какую сумму снять? ', (amountInput) => {
          const amount = parseFloat(amountInput);
          account.withdraw(amount);
          startMenu();
        });
        break;
      case 'выход':
        console.log('Спасибо за использование нашего банка. До свидания!');
        rl.close();
        break;
      default:
        console.log('\x1b[33mНеизвестная команда. Попробуйте еще раз.\x1b[0m');
        startMenu();
        break;
    }
  });
}
startMenu();