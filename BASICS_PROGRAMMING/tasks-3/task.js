// Первое задание
function reputations (likes, dislikes,editedMessages, allMessages) {
    const coefficient = (allMessages - editedMessages) / allMessages;
     const reputation = likes - dislikes
     if (allMessages === 0) {
       return 0;
     }
      if (dislikes > likes) {
       return reputation;
     } else {
       return reputation*coefficient;
     }
   }
   console.log("Репутация пользователя: "+ reputations(10, 20, 4, 200));
   console.log("Репутация пользователя: "+ reputations(20, 10, 4, 200)+ '\n');
   
   
   // Второе задание
   let thread = {
       title: "Поделитесь книжкой",
       author: "RuBrick",
       total: 23,
       messages: [
           {
               id: 13201,
               date: "2018-01-09",
               text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
               author: {
                 name: "RuBrick",
                 login: "ru_brick",
                 reputation: 3,
                 role: "user"
               }
           },
           {
               id: 13208,
               date: "2018-01-12",
               text: "Неужели нет хорошей литературы",
               author: {
                 name: "RuBrick",
                 login: "ru_brick",
                 reputation: 3,
                 role: "user"
               }
           },
           {
               id: 13209,
               date: "2018-01-12",
               text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
               author: {
                 name: "Popov",
                 login: "popov_ma",
                 reputation: 2310,
                 role: "user"
               }
           },
           {
               id: 13219,
               date: "2018-01-14",
               text: "В сети много сайтов с хорошими объяснениями + есть курсы",
               author: {
                 name: "Void",
                 login: "void",
                 reputation: 5005,
                 role: "user"
               }
           },
           {
               id: 13220,
               date: "2018-01-14",
               text: "Есть большая книга «JavaScript.Подробное руководство», потом смотришь документацию",
               author: {
                 name: "noname",
                 login: "noname",
                 reputation: 100,
                 role: "user"
               }
           },
           {
               id: 13250,
               date: "2018-01-19",
               text: "или посмотреть видео курсы на youtube! \n А самое главное практика! и этот форум лучшая тренировочная площадка!",
               author: {
                 name: "noname",
                 login: "noname",
                 reputation: 110,
                 role: "user"
               }
           },
           {
               id: 13259,
               date: "2018-01-20",
               text: "Понял, спасибо!",
               author: {
                 name: "RuBrick",
                 login: "ru_brick",
                 reputation: 13,
                 role: "user"
               }
           }
       ]
   };
   
   function printMessages(thread, amount = 1) {
     let msg = thread.messages;
     
     if (!msg.length) {
   
       console.log("«Ошибка формата! В теме нет сообщений»\n");
       
     } else if(amount > msg.length) {
   
         for (let i = 0; i < msg.length; i++) {
           console.log(`${msg[i].author.name} (репутация: ${msg[i].author.reputation}): ${msg[i].text}\n`);
         };
   
     } else if(amount < msg.length) {
   
         for (let i = msg.length - amount; i < msg.length; i++) {
           console.log(`${msg[i].author.name} (репутация: ${msg[i].author.reputation}): ${msg[i].text}\n`);
         };
   
     }
   };
   
   printMessages(thread, 1);
   
   
   // Третье задание
   let allMessages = [
       {author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true},
       {author: "zloy-zloy", text: "я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления", edited: false},
       {author: "МамаЗузу", text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.", edited: false},
       {author: "void", text: "У меня андроид. Особенно нравится что никаких заморочек с с айтюнс", edited: false},
       {author: "mama", text: "Айфон", edited: false},
       {author: "mama", text: "Почему не отвечаешь?", edited: false},
       {author: "void", text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS»", edited: false},
       {author: "void", text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение»", edited: false},
       {author: "void", text: "Ленюсь", edited: false},
       {author: "void", text: "пока оценивать нечего", edited: false},
       {author: "void", text: "Не по-русски как-то получается, хоть и на русском.", edited: false},
       {author: "ivanov", text: "Чип и Дейл прикольно, играл в детстве", edited: false},
       {author: "ivanov", text: "hello, world", edited: true},
       {author: "void", text: "Сейчас напишу кник по JS", edited: false},
       {author: "ivanov", text: "Спасибо", edited: false},
       {author: "ivanov", text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу что к чему голосом, ну или там текстом хотя бы, хотя лучше голосом.", edited: true},
       {author: "void", text: "Поделитесь видео каналами по js", edited: 1},
       {author: "void", text: "Ничего не понравилось"}
   ];
   
   
   function isEdited(allMessages) {
     let editedMsgs = 0;
     let uneditedMsgs = 0;
     let totalCount = 0;
     let improperEditedKey = {};
   
     for (let i = 0; i < allMessages.length; i++) {
       totalCount++;
   
       if(allMessages[i].edited === true) {
         editedMsgs++;
       } else if(allMessages[i].edited === false) {
         uneditedMsgs++;
       } else {
         improperEditedKey[i] = `Edited содержит: ${allMessages[i].edited};`;
       }
   
     };
   
     return {editedMsgs, uneditedMsgs, totalCount, improperEditedKey};
   };
   
   const msgInfo = isEdited(allMessages);
   
   console.log(`Количество отредактированных сообщений: ${msgInfo.editedMsgs}\nКоличество неотредактированных сообщений: ${msgInfo.uneditedMsgs}\nОбщее число сообщений: ${msgInfo.totalCount}\nНомера сообщений с неверным ключем "edited": ${Object.keys(msgInfo.improperEditedKey)}.`);