// Add single child element and append to parent
HtmlElement.prototype.addChild = function(args = {}) {
    const child = HtmlElement.create(args.elem)
      .addId(args.id)
      .addClasses(args.classes) // addClasses can take an array or a comma-separated list
      .addTextContent(args.textContent);
    this.append(child);
    return this;
};

// Add multiple child elements
// Takes array of objects
HtmlElement.prototype.addChildren = function(children = []) {
    for (child of children) {
        this.addChild(child);
    }
    
    return this;
};
