$('.task-list-item')
  .on('click', '.complete-task', function(e) {
    $(this).parent().fadeOut(500);
    taskStore.complete($(this).parent().data('task-id'));
    e.preventDefault();
});
