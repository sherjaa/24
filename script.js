var form1 = document.querySelector('form')
var form2 = document.querySelector('.form')
var input = document.querySelector('.input');
var	addToFront = document.querySelector('.add_to_front');
var	addToEnd = document.querySelector('.add_to_end');
var	clearList = document.querySelector('.clearList');
var	royxat = document.querySelector('.royxat');
var	massivs = [];
var tozalash = document.querySelector('.tozalash');
var toza = document.querySelector('.toza')


form1.addEventListener('submit', function(e){
    e.preventDefault()
})
form2.addEventListener('submit', function(e){
    e.preventDefault()
})

addToEnd.addEventListener('click', function(){
    if(input.value.trim() === ''){
        alert('Please, Enter argument!');
    } else if(massivs.indexOf(input.value) !== -1){
        alert('bu maxshulot royhatda bor');
        input.value = '';
    }  else {
        massivs.push(input.value);
        input.value = '';
        royxat.textContent = '';
        for(var i = 0; i < massivs.length; i++){
            var li = document.createElement('li');
            li.textContent = massivs[i];
            royxat.appendChild(li);
        }
    }
});
addToFront.addEventListener('click', function(){
    if(input.value.trim() === ''){
        alert('Please, Enter argument!');
    } else if(massivs.indexOf(input.value.toLowerCase()) !== -1){
        alert('bu maxshulot royhatda bor');
        input.value = '';
    } else {
        massivs.unshift(input.value);
        input.value = '';
        royxat.textContent = '';
        for(var i = 0; i < massivs.length; i++){
            var li = document.createElement('li');
            li.textContent = massivs[i];
            royxat.appendChild(li);
        }
    }
});

clearList.addEventListener('click', function(){
    royxat.textContent = '';
    massivs = [];
});

toza.addEventListener('click', function(){
    if (tozalash.value > massivs.length ) {
        alert('Mavjud bo\'lmagan qatorni kiritdingiz!!!')
    }
    else {
        var index = parseInt(tozalash.value, 10) - 1;
        tozalash.value = '';
        massivs.splice(index, 1);
        royxat.textContent = '';
        for (var i = 0; i < massivs.length; i++){
            var li = document.createElement('li');
            li.textContent = massivs[i];
            royxat.appendChild(li);
        }
    }
});
