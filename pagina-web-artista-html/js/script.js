let menu = querySelector('#menu');

let menu_bar = querySelector('#menu-bar');

menu_bar.addEventListenner('click',function{
	menu.classList.toggle 'menu-toggle';
})