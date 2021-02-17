'use strict';

export default function togglePopover() {
  const container = document.querySelector('.bd-example');

// Button creation
  const btn = document.createElement('button');
  container.appendChild(btn);
  btn.style.type = 'button';
  btn.className = "btn btn-lg btn-danger";
  btn.textContent = 'Нажми для подсказки';

// Popover creation
  const popover = document.createElement('div');
  container.appendChild(popover);
  popover.className = "popover fade bs-popover-top";
  popover.style.position = 'absolute';
  let popoverMarginBottom = Number(window.getComputedStyle(popover).marginBottom.replace('px', ''));
  popover.innerHTML = `
        <div class="arrow" style="left: 125px;"></div>
        <h3 class="popover-header">Название подсказки</h3>
        <div class="popover-body">Здесь должен быть текст подсказки!</div>
`
  popover.style.top = `${ - popover.offsetHeight - popoverMarginBottom}px`;
  popover.style.left = `${ - (popover.offsetWidth - btn.offsetWidth) / 2}px`;

  // Add click event
  btn.addEventListener('click', () => {
    popover.classList.toggle('show');
  })
}
