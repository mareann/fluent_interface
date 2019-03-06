// Add id
HtmlElement.prototype.addId = function(id) {
    this.element.id = id || '';
    return this;
};

// Add a single class
HtmlElement.prototype.addClass = function(className) {
    className && this.element.classList.add(className);
    return this;
};

// Add multiple classes. Use of rest parameter
// allows classNames to be either a comma-
// separated list or an array of args.
HtmlElement.prototype.addClasses = function(...classNames) {
    for (className of classNames) {
        this.addClass(className);
    }

    return this;
};

// Add text content to element
HtmlElement.prototype.addTextContent = function(text = '') {
    this.element.textContent = text;
    return this;
};
