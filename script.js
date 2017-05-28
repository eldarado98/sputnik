function openModal(event) {
  var target = event.currentTarget.getAttribute('data-target');
  if (target) {
    var modal = document.getElementById(target);
    if (modal) {
      modal.className = 'modal modal-visible';
      modal.focus();
    }
  }
}

function closeModal(event) {
  var modal = event.currentTarget;
  if (event.target === modal || event.target.className === 'close') {
    modal.className = 'modal';
    var trigger = document.querySelector('.modal-trigger[data-target=' + modal.id + ']');
    if (trigger) {
      trigger.focus();
    }
  }
}

function keyDown(event) {
  if (event.keyCode === 13 /* Enter */ ||
      event.keyCode === 27 /* Escape */ ||
      event.keyCode === 32 /* Space */) {
    event.preventDefault();
    closeModal(event);
  }
}

var triggers = document.getElementsByClassName('modal-trigger');
for (var i = 0; i < triggers.length; i++) {
  var trigger = triggers[i];
  trigger.addEventListener('click', openModal);
}

var modals = document.getElementsByClassName('modal');
for (var j = 0; j < modals.length; j++) {
  var modal = modals[j];
  modal.addEventListener('click', closeModal);
  modal.addEventListener('keydown', keyDown);
}
