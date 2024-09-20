import { factory } from './factory';

// DOM Elements
const startAtInput = document.getElementById('start_at') as HTMLInputElement;
const stepInput = document.getElementById('step') as HTMLInputElement;
const countButton = document.getElementById('count_button') as HTMLButtonElement;
const currentCountDisplay = document.getElementById('current_count') as HTMLSpanElement;

// State
let countFunction: ReturnType<typeof factory>;

// Functions
function updateCountAndResetCounter(): void {
  const start = parseInt(startAtInput.value, 10) || 0;
  const step = parseInt(stepInput.value, 10) || 1;
  countFunction = factory(start, step);
  currentCountDisplay.textContent = start.toString();
}

function updateCountText(): void {
  currentCountDisplay.textContent = countFunction().toString();
}

function setupInputValidation(inputElement: HTMLInputElement): void {
  type InputElement = HTMLInputElement & { previousValue: string };

  inputElement.addEventListener('focus', function (this: InputElement) {
    this.previousValue = this.value;
  });
  inputElement.addEventListener('keydown', function (this: InputElement) {
    this.previousValue = this.value;
  });
  inputElement.addEventListener('input', function (this: InputElement): void {
    if (!this.validity.valid) {
      this.value = this.previousValue;
    }
  });
}

function handleCountButtonKeydown(event: KeyboardEvent): void {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    updateCountText();
  }
}

// Event Listeners
startAtInput.addEventListener('input', updateCountAndResetCounter);
stepInput.addEventListener('input', updateCountAndResetCounter);
countButton.addEventListener('click', updateCountText);
countButton.addEventListener('keydown', handleCountButtonKeydown);
setupInputValidation(startAtInput);
setupInputValidation(stepInput);

// Initialize
updateCountAndResetCounter();
