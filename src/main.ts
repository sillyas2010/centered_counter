import { factory } from './factory';

let count = factory(0, 1);

function update_count_and_reset_counter() {
  const start = validateInput(start_at_control.value, 0);
  const step = validateInput(step_control.value, 1);
  count = factory(start, step);
  current_count.textContent = start.toString();
}

function validateInput(value: string, defaultValue: number): number {
  const parsed = parseInt(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

const start_at_control = document.getElementById('start_at') as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('input', update_count_and_reset_counter);
step_control?.addEventListener('input', update_count_and_reset_counter);

const count_button = document.querySelector('#count_button') as HTMLButtonElement;

const current_count = document.querySelector('#current_count') as HTMLSpanElement;

function update_count() {
  current_count.textContent = count().toString();
}

count_button.addEventListener('click', update_count);

// Initialize the counter
update_count_and_reset_counter();

// Keyboard navigation
count_button.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    update_count();
  }
});
