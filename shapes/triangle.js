const Shape = require('../shapes/shape');

class Triangle extends Shape {
    constructor(textLogo, textColor, shape, shapeColor) {
      super(textLogo, textColor, shape, shapeColor);
      this.shapeColor = shapeColor;
    }
  
    formShape(shape) {
      shape = `<polygon points="145,20 280,150 40,150" fill="orange" fill="${this.shapeColor}"/>`;
      super.renderShape(shape);
      return shape;
    }
  
    formLogo() {
      return super.renderLogo();
    }
};

module.exports = Triangle;