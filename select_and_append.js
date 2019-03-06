// Gets child of the current HtmlElement and
// wraps it in an instance of HtmlElement
HtmlElement.prototype.getChild = function(selector) {
    return new HtmlElement(this.element.querySelector(selector));
};

// Appends an HtmlElement's inner element property
// to the current HtmlElement. Not chainable,
// but would be if you add return this.
HtmlElement.prototype.append = function(htmlElement) {
    this.element.appendChild(htmlElement.element);
};

// Appends the current HtmlElement's inner
// element property to a DOM element.
// Return this to make chainable.
HtmlElement.prototype.appendTo = function(domElement) {
    domElement.appendChild(this.element);
};
