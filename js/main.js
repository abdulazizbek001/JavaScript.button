const elDarkBtn = document.querySelector ('.dark-btn');
const elLightBtn = document.querySelector ('.light-btn');   

elDarkBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
})

elLightBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
})