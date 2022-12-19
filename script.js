let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let hexParts = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let empty = '';

    for(let i = 0; i < 6; i++){
        let randomHex = Math.floor(Math.random() * hexParts.length);
        empty += hexParts[randomHex];
    }

    document.body.style.backgroundColor = `#${empty}`;
    btn.innerHTML = `${empty}`
})

// Cool feature to run all variation of HEX colors by setInterval
/*
setInterval(function(){
    let hexParts = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let empty = '';

    for(let i = 0; i < 6; i++){
        let randomHex = Math.floor(Math.random() * hexParts.length);
        empty += hexParts[randomHex];
    }

    document.body.style.backgroundColor = `#${empty}`;
    btn.innerHTML = `${empty}`
},1000)
*/
