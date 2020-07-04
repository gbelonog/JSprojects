//shows image when game is over
class Win_View{
    showWinImage(){
        let point = document.getElementById('board');
        let image = document.createElement('img');
        image.setAttribute('id', 'winImage');
        image.setAttribute('src','you-win-sign-pop-art-style_175838-499.jpg');
        point.appendChild(image);   
    };
};