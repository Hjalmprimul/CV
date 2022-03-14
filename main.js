// Start Selector

/* Selector English */
document.querySelector('.gr').addEventListener('click', () => {

    document.querySelector('.wrapper-EN').classList.toggle('show-lenguage');
    //document.querySelector('.english').classList.toggle('show-lenguage');
    var element = document.querySelectorAll('.english');
    for (var i = 0; i < element.length; i++){
        element[i].classList.add('show-lenguage');
    }
    document.querySelector('.lenguage-selector').classList.toggle('animation-selector');
    setTimeout(() =>{
        document.querySelector('.lenguage-selector').classList.toggle('hide-selector');
        document.querySelector('.lenguage-selector').classList.remove('animation-selector');
        document.querySelector('.name').classList.remove('hide-name');
    }, 1900);
})

/* Selector Spanish */
document.querySelector('.esp').addEventListener('click', () => {

    document.querySelector('.wrapper-EN').classList.toggle('show-lenguage');
    //document.querySelector('.spanish').classList.toggle('show-lenguage');
    var element = document.querySelectorAll('.spanish');
    for (var i = 0; i < element.length; i++){
        element[i].classList.add('show-lenguage');
    }
    document.querySelector('.lenguage-selector').classList.toggle('animation-selector');
    setTimeout(() =>{
        document.querySelector('.lenguage-selector').classList.toggle('hide-selector');
        document.querySelector('.lenguage-selector').classList.remove('animation-selector');
        document.querySelector('.name').classList.remove('hide-name');
    }, 1900);
})

// Start Selector END

/* Click World for change Lenguage */
document.querySelector('.fa-earth-americas').addEventListener('click', () =>{

    /* Show Selector */
    document.querySelector('.l').classList.toggle('l-show');

    /* Hide Name */
    document.querySelector('.name').classList.toggle('hide-name');
})

/* Click in Menu */
document.querySelector('.menu').addEventListener('click', () =>{

    /* Show Nav-Bar */
    document.querySelector('.nav-bar').classList.toggle('show');

    /* Move Top-Bar */
    document.querySelector('.top-bar').classList.toggle('show-top');

    /* Hide Menu, Show Cruz */
    document.querySelector('.menu').classList.toggle('hide-menu');
    document.querySelector('.cruz').classList.toggle('show-cruz');

    /* Text Opacity */
    document.querySelector('.darkenizer').classList.toggle('opa')
})

/* Click in Cruz */
document.querySelector('.cruz').addEventListener('click', () =>{

    /* Hide Nav-Bar  and Move Top-Bar */
    document.querySelector('.nav-bar').classList.toggle('hide');
    document.querySelector('.top-bar').classList.toggle('back');
    setTimeout(() =>{
        document.querySelector('.nav-bar').classList.remove('show');
        document.querySelector('.top-bar').classList.remove('show-top');
        document.querySelector('.nav-bar').classList.remove('hide');
        document.querySelector('.top-bar').classList.remove('back');
    }, 500);

    /* Show Menu, Hide Cruz */
    document.querySelector('.menu').classList.remove('hide-menu');
    document.querySelector('.cruz').classList.remove('show-cruz');

    /* Remove Text Opacity */
    document.querySelector('.darkenizer').classList.remove('opa')
})

/* Click in Categories */
document.querySelector('.categories').addEventListener('click', () =>{

    /* Hide Nav-Bar  and Move Top-Bar */
    document.querySelector('.nav-bar').classList.toggle('hide');
    document.querySelector('.top-bar').classList.toggle('back');
    setTimeout(() =>{
        document.querySelector('.nav-bar').classList.remove('show');
        document.querySelector('.top-bar').classList.remove('show-top');
        document.querySelector('.nav-bar').classList.remove('hide');
        document.querySelector('.top-bar').classList.remove('back');
    }, 500);

    /* Show Menu, Hide Cruz */
    document.querySelector('.menu').classList.remove('hide-menu');
    document.querySelector('.cruz').classList.remove('show-cruz');

    /* Remove Text Opacity */
    document.querySelector('.darkenizer').classList.remove('opa')
})

// Nav-Bar Selector

/* Selector English */
var gr = document.querySelectorAll('.gr-nav-bar');
for (var i = 0; i < gr.length; i++){
    gr[i].addEventListener('click', () => {
        
        document.querySelector('.l').classList.remove('l-show');
        var element = document.querySelectorAll('.spanish');
        var element2 = document.querySelectorAll('.english');
        for (var i = 0; i < element.length; i++){
            element[i].classList.remove('show-lenguage');
            element2[i].classList.add('show-lenguage')
        }
    })
}

/* Selector Spanish */
var esp = document.querySelectorAll('.esp-nav-bar');
for (var i = 0; i < esp.length; i++){
    esp[i].addEventListener('click', () => {

        document.querySelector('.l').classList.toggle('l-show');
        var element = document.querySelectorAll('.english');
        var element2 = document.querySelectorAll('.spanish');
        for (var i = 0; i < element.length; i++){
            element[i].classList.remove('show-lenguage');
            element2[i].classList.add('show-lenguage')
        }
    })
}

