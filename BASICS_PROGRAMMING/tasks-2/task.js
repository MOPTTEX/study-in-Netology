// Задача №1
function task_one() {
    let product, inBasket, quantity, print;
  
    product = 'Печенье «Юбилейное», 1 кг';
    inBasket = true;
    quantity = 5;
  
    if (inBasket == true) {
      print = quantity + ' x ' + product;
      console.log(print);
      console.log("\n");
    }
  }
  task_one();
  
  // Задача №2
  function task_two() {
    let accountStatus = `vip`;
    let username = `ivan`;
    let status;
    let cashbackPercentage;
      switch(accountStatus) {
      case `extended`:
        status = `улучшенный`;    
        cashbackPercentage = 15;      
       break;
      case `premium`:
        status = `премиум`;
        cashbackPercentage = 20;
        break;   
      case `vip`:
        status = `вип`;
        cashbackPercentage = 30;
        break;
      default:
        status = `обычный`;
        cashbackPercentage = 10;
        break;
      }  
    console.log(username +` `+ status + ` аккаунт. 
  Вы получаете ` + cashbackPercentage + `% с покупок на бонусный счет`);
  console.log("\n");
  }
  task_two();
  
  // Задача №3
  function task_three() {
    let user = 'Killer2001';
    if (user == 'admin') {
      console.log("Привет, админ!\nПроверь нет ли жалоб от пользователей!");
    } else {
      console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
    }
    let newOrders = 6;
    let errorOrders = 3;
    // показываем сколько новых заказов, а сколько заказов с ошибкой
    if (newOrders > errorOrders) {
      console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOrders + ')');
    }
    if (newOrders === errorOrders) {
      console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
    }
  }
  task_three();