const taskListContainer = HtmlElement.create('div')
  .addId('task-list-container')
  .addClass('list-wrapper')
  .addChild({
    elem: 'ul',
    id: 'task-list',
    classes: [
        'list',
        'card-container',
    ],
});
taskListContainer.getChild('#task-list')
    .addChildren([{
       elem: 'li',
        classes: [
          'task-list-item',
         'card',
        ],
        textContent: 'Go grocery shopping',
    },
    {
        elem: 'li',
        classes: [
            'task-list-item',
            'card',
        ],
        textContent: 'Call mom',
    },
    // Continue on as needed
]);

// Add parent element to document
taskListContainer.appendTo(document.querySelector('body'));
