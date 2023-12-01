const botao_10 = document.querySelector('#minuts10')
const botao_15 = document.querySelector('#minuts15')
const botao_20 = document.querySelector('#minuts20')

const texto_relogio = document.querySelector('#contador-text span')
const start = document.querySelector('#start-btn')

const clock = new Audio('clock.mp3')

// eventos

botao_10.addEventListener('click', function(){tempo(0.1)})
botao_15.addEventListener('click', function(){tempo(15)})
botao_20.addEventListener('click', function(){tempo(20)})

start.addEventListener('click', function(){tempo(25)})


// função

function tempo(x){
    let tempo = x *60

    const intervalo = setInterval(function(){
        const minutos = Math.floor(tempo/60)
        const segundos = tempo % 60

        texto_relogio.textContent = `${minutos}:${segundos}`
        tempo-- 

        if (tempo < 0) {
            clock.play()
            window.alert('Seu tempo acabou!')
            clearInterval(intervalo)
        }
    }, 1000)


}