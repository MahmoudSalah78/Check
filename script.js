let title = document.querySelector('.title');
let list = document.querySelector('ul');
let btn = document.querySelector('.btn');

window.onload = function(){
    if(window.navigator.onLine){
        online();
    }else{
        offline();
    }
}

window.addEventListener('online', function(){
    online()
});
window.addEventListener('offline', function(){
    offline()
});

function online(){
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    list.classList.add('hide');
    btn.classList.add('hide');
}
function offline(){
    title.innerHTML = 'Offline Now';
    title.style.color = 'black';
    list.classList.remove('hide');
    btn.classList.remove('hide');
}
