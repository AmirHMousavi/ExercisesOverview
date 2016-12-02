class Category {
  constructor(value, color) {
    this._value = value;
    this._color = color;
  }
  displayValue() {
    return this._value;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color = value;
  }
  equals(other) {
    return (this._value === other._value) && (this._color === other._color);
  }
}

class CategoryList {

  constructor(categories) {
    this._categories = categories;
  }

  get categories() {
    return this._categories;
  }

  set categories(value) {
    this._categories = value;
  }
}

const RED = 'rgb(252,0,8)';
const ORANGE = 'rgb(253,134,63)';
const LIME = 'rgb(137,197,8)';
const GREEN = 'rgb(42,138,97)';
const BLUE = 'rgb(0,0,254)';
const LIGHT_BLUE = 'rgb(46,195,192)';
const BROWN = 'rgb(107,0,109)';
const LIGHT_PINK = 'rgb(192,128,255)';
const GRAY = 'rgb(109,109,109)';
const PINK = 'rgb(252,0,255)';


export const PARTS_OF_SPEECH_CATEGORY_LIST = new CategoryList([
  new Category('substantiv', RED),
  new Category('verb', ORANGE),
  new Category('adjektiv', LIME),
  new Category('pronomen', GREEN),
  new Category('adverb', BLUE),
  new Category('preposition', LIGHT_BLUE),
  new Category('räkneord', BROWN),
  new Category('konjunktion', LIGHT_PINK),
  new Category('subjunktion', GRAY),
  new Category('interjektion', PINK),
]);