import {afterAll, beforeAll, describe, jest, test} from "@jest/globals";
import togglePopover from '../popover';

test('should toggle popover', () => {
  document.body.innerHTML = `<div class="bd-example"></div>`;
  togglePopover();
  const btn = document.querySelector('.btn');
  const popover = document.querySelector('.popover');

  btn.click();
  expect(popover.classList.contains('show')).toBe(true);

  btn.click();
  expect(popover.classList.contains('show')).toBe(false);
})
