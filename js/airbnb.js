var join_popup = document.querySelector('#join-popup');
function join_close(){
    join_popup.style.display = 'none';
}
function join_open(){
    join_popup.style.display = 'block';
}

var login = document.querySelector('#login');
function openLogin(){
    login.style.display='block';
}
function closeLogin(){
    login.style.display='none';
}

window.addEventListener('scroll', function(){
    var navi = document.querySelector('#main-navi');
    var color = document.querySelectorAll('.main-navi ul li a');
    if(window.scrollY == 0) {
        navi.style.background = 'rgba(255,255,255,0)';
        navi.style.borderbottom = 'rgba(22,22,22,0)';
        for(var i=0; i<color.length; i++){
            color[i].style.color='white';
        }
    } else if(this.window.scrollY < 300) {
        navi.style.background = 'rgba(255,255,255,1)';
        navi.style.borderbottom = 'rgba(22,22,22,1)';
        document.querySelector('.main-navi ul li a').style.color = 'rgb(255,56,92)';
        for(var i=1; i<color.length; i++){
            color[i].style.color='#222222';
        }
        document.querySelector('#main-page #sub-navi').style.display = 'none';
    } else {
        document.querySelector('#main-page #sub-navi').style.display = 'flex';
    }
});