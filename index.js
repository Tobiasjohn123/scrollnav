const nav = document.getElementById('navbar')

window.onscroll = function(){
    scrollfunction()
}

function scrollfunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        nav.style.top = '0'
        // nav.style.backgroundColor = '#fff'
         nav.classList.add('navs')    
    }else
    {
        nav.style.top = '0px'
        // nav.style.backgroundColor = 'grey'
        nav.classList.remove('navs')    

     }
}