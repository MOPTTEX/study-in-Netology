function task_one() {
    let name = '';
    let balance = 100;
  
    if (name == 'admin' ) {
      console.log('Администратор');
    } else if (name == '') {
      console.log('Гость');
    }  else if (balance >= 5000) {
      console.log ('ВИП-клиент');
    } else if  (balance >= 1000 ) {
      console.log ('Постоянный покупатель');
    } 
    console.log ();
  }
  task_one();
  
  
  function task_two() {
    let user;
    let orderOwner;
    user = 'netologist';
    orderOwner = 'leo_tolstoy';
  
    if ( orderOwner == user || user == 'admin') {
      console.log('Редактирование разрешено');
    } else {
      console.log ('Заказ нельзя редактировать');
    }
    console.log ();
  }
  task_two();
  
  
  function task_three() {
    let bonusBalanse = 5500;
    let orderPrice = 3000;
    let numberPurChases = 1;
    let standardBonus = 10;
    let increasedBonus = 20;
    let frequentPurChases = 5;
    let bonus;
    //let Y;
      if ( bonusBalanse > 5000) {
        bonus = increasedBonus;
      }
      else if ( bonusBalanse <= 5000) {
        bonus =  standardBonus;
      }
      if ( numberPurChases > 1 ) {
        frequentPurChases += 5;
      }
      /*   else {
          frequentPurChases = 0
          }*/
        // ??   Y = bonus+frequentPurChases;
      console.log(`Процент от покупки: `+(bonus+frequentPurChases));
  }
  task_three();