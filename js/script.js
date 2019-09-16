// Плавная навигация по странице
let points = document.querySelectorAll('nav > a.nav');

for(let point of points){
    point.addEventListener('click', function(e){
        e.preventDefault();
        
        let sectionId = point.getAttribute('href');
        
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    });
}

// Бургер мобильное меню
let burger = document.getElementById('burger');

burger.onclick = function(e){
    if(!this.classList.contains('active')){
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
    }else{
        this.classList.remove('active');
        this.nextElementSibling.classList.remove('active');
    }
}

// Выбор даты рождения
let birthday = document.getElementById('birthday'),
    years = document.querySelectorAll('#setDate > input');

birthday.onclick = function(e){
    if(!document.getElementById('setDate').classList.contains('active')){
        document.getElementById('setDate').classList.add('active');
    }else{
        document.getElementById('setDate').classList.remove('active');
    }
}

for(let year of years){
    year.addEventListener('click', function(e){
        let thisYear = year.getAttribute('value');
        
        birthday.setAttribute('value', thisYear);
        
        document.getElementById('setDate').classList.remove('active');
    });
}



// Установка checkbox при клике строки
let checkboxes = document.querySelectorAll('.experience > div');

for(let check of checkboxes){
    check.addEventListener('click', function(e){
        if(!check.classList.contains('active')){
            check.setAttribute('class', 'active');
            check.querySelector('input').setAttribute('checked', '');
        }else{
            check.removeAttribute('class');
            check.querySelector('input').removeAttribute('checked');
        }
    });
}

// Опыт Js
function startDrop(e){
    e.preventDefault();
}

function drag(e){
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    
    let getLvl = e.target.getAttribute('lvl'),
        setLvl = document.getElementById('js-lvl'),
        getOver = document.getElementById('over');
    
    setLvl.setAttribute('value', getLvl);
    
    switch(getLvl){
        case '1':
            getOver.style.width = "67%";
            break;
        case '2':
            getOver.style.width = "40.5%";
            break;
        case '3':
            getOver.style.width = "0";
            break;
        default:
            getOver.style.width = "100%";
    }
}
