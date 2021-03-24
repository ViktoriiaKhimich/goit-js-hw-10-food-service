import menuCards from './menu.json';
import menuCardsTemplate from '../html/menuCardsTemplate.hbs'
import theme from './theme.js'

const menuList = document.querySelector('.js-menu');

const createMenuMarkup = menuCardsTemplate(menuCards);

menuList.insertAdjacentHTML('beforeend', createMenuMarkup);












