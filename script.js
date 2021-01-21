const objUser = {};

for (let i = 0; i < 10; i++) {
    let name = prompt('Введите имя:')
    let age = prompt('Введите возраст:')
    
    objUser[i] =  {
        name: name,
        age: age
    }
}
for (var key in objUser) {
    console.log("Пользователь: " + (+key + 1));
    console.log("Имя: " + objUser[key]['name']);
    console.log("Возраст: " + objUser[key]['age']);
    
}

