var area = document.getElementById("area")
document.getElementById("form").addEventListener("submit" , (event)=>{
    event.preventDefault()
})
function createSpan(user,valor){
    var span = document.createElement("span")
    span.setAttribute("class" , user+' msg')
    span.innerHTML=valor
    area.appendChild(span)
    setTimeout(() => {
        span.classList.add("active")
    }, 500);
    var totalheight = area.clientHeight
    area.scrollBy(0,totalheight)
    var value = document.getElementById("inp").value = ""
}
var nameuser = ''
var oldq = ''
var ultimaresposta = ''
function response(value){
    if (value != ""){
        createSpan("you",value)
        document.getElementById("form").addEventListener("submit" , (event)=>{
            event.preventDefault()
        })
        if (value == 'qual meu nome ?' || value.includes('qual meu nome')){
            if (nameuser == ''){
                oldq = 'sim'
                createSpan("bot",'Não sei qual é o seu nome. Você pode me ensinar?')
            }else{
                createSpan("bot",'Seu Nome é '+ nameuser)
            }
        }
        if (oldq == 'sim' && value.includes('sim') || oldq == 'sim' && value.includes('sim') || oldq == 'sim' && value.includes('claro') || oldq == 'sim' && value.includes('s')){
            nameuser = window.prompt('Diga Seu Nome!')
            if (nameuser != ''){
                oldq = " "
                createSpan("bot",'Muito Prazer '+ nameuser)
            }else{
                oldq = " "
                createSpan("bot",'Cancelado! sua privacidade é muito importante !')
            }
        }
        if (oldq == 'sim' && value.includes('nao')){
            createSpan("bot",'Tudo bem , sua privacidade é muito importante !')
        }
        if (value.includes('eae') || value.includes('oi') || value.includes('ola') || value.includes('ok')){
            createSpan("bot",'Olá, como posso ajudar !')
        }
        if (value.includes('oq pode fazer') || value.includes('o que vc pode fazer') || value.includes('oq vc pode fazer') || value.includes('o q vc pode fazer') || value.includes('o que voce pode fazer ?') || value.includes('o que voce pode fazer') || value.includes('oq voce pode fazer ?') || value.includes('o que você pode fazer ?') || value.includes('oq vc pode fazer ?')){
            createSpan("bot",'Posso Aprender Seu Nome !')
            ultimaresposta = 'Posso Aprender Seu Nome !'
        }
        if (value.includes('aprenda meu nome') ){
            if (nameuser == ''){
                oldq = 'sim'
                createSpan("bot",'Não sei qual é o seu nome. Você pode me ensinar?')
            }else{
                createSpan("bot",'Já sei seu nome, '+ nameuser)
            }
        }
        if (value.includes('meu nome é') ){
            if (nameuser == ''){
                nameuser = window.prompt('Diga Seu Nome!')
                if (nameuser != ''){
                    oldq = ""
                    createSpan("bot",'Muito Prazer '+ nameuser)
                }else{
                    createSpan("bot",'Cancelado!, sua privacidade é muito importante !')
                }
            }else{
                createSpan("bot",'Você informou que seu nome é '+ nameuser)
            }
        }
        if (value.includes('qual seu nome') || value.includes('seu nome')){
            createSpan("bot",'Meu nome é CHATNIA("Chat Sem IA")')
        }
        if (nameuser != "" && value == nameuser){
            createSpan("bot", "Sim esse é seu nome "+ nameuser)
        }
        if (value.includes('em nada') ){
            createSpan("bot",'Ok !')
        }
        if (value.includes('!v youtube') ){
            var video = window.prompt('Link')
            if (video != ""){
                var video= video.replace("watch?v=","embed/")
                createSpan("bot",'<iframe width="100%" height="100%" src="'+video+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
            }else{
                createSpan("bot",'Ok !')
            }
        }
        if (value.includes('!b youtube') ){
            var video = window.prompt('Link')
            if (video != ""){
                var video= video.replace("youtube","ssyoutube")
                createSpan("bot",'<a href='+video+' target="_blank">'+video+'</a>')
   
            }else{
                createSpan("bot",'Ok !')
            }
        }
        if (value.includes('youtube') && value.includes('https://www.') && value.includes('watch?v=')){
            var video = window.prompt('Link')
            if (video != ""){
                var video= video.replace("watch?v=","embed/")
                createSpan("bot",'<iframe width="560" height="315" src="'+video+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
            }else{
                createSpan("bot",'Ok !')
            }
        }
        if (value == 'cls'){
            var msgs = document.querySelectorAll(".msg")
            msgs.forEach(element => {
                element.remove()
            });
        }
        if (value.includes('hora')){
            var testeData = Date();
            createSpan("bot", testeData)
        }
        if (value == '!text'){
            var texts = window.prompt('Link')
            if (texts != ""){
                let blob = new Blob([texts],{
                    type: "text/plain;charset=utf-8"
                })
                var link = window.URL.createObjectURL(blob);
                createSpan("bot",'<span>Seu Arquivo:</span><a href='+link+' class="download" download="Baixado" target="_blank">Baixar</a>')
   
            }else{
                createSpan("bot",'Cancelado !')
            }
        }

    }
}
document.getElementById("inp").addEventListener("keypress" , (event)=>{
    var tecla = event.keyCode
    if (tecla == '13'){
        var value = document.getElementById("inp").value
        value = value.toLowerCase()
        response(value)
    }
})
document.getElementById("submit").addEventListener("click" , ()=>{
    var value = document.getElementById("inp").value
    value = value.toLowerCase()
    response(value)
})

var b = document.querySelector(".buguer")
b.addEventListener("click" , ()=>{
    var side = document.querySelector(".side")
    if (side.classList.contains("open")){
        side.classList.remove('open')
        b.style.left='0'
        b.style.right='auto'
    }else{
        side.classList.add('open')
        b.style.left='auto'
        b.style.right='0'
    }

})