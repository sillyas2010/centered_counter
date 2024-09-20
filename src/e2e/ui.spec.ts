import { test, expect } from '@playwright/test';

const startAtSelector = '#start_at';
const stepSelector = '#step';
const countButtonSelector = '#count_button';
const currentCountSelector = '#current_count';

test.describe('Counter Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle('Centered counter');
  });

  test('initial state is correct', async ({ page }) => {
    await expect(page.locator(currentCountSelector)).toHaveText('0');
    await expect(page.locator(startAtSelector)).toHaveValue('0');
    await expect(page.locator(stepSelector)).toHaveValue('1');
  });

  test('counter increments correctly', async ({ page }) => {
    await page.click(countButtonSelector);
    await expect(page.locator(currentCountSelector)).toHaveText('1');

    await page.click(countButtonSelector);
    await expect(page.locator(currentCountSelector)).toHaveText('2');
  });

  test('changing start value resets counter', async ({ page }) => {
    await page.fill(startAtSelector, '10');
    await page.press(startAtSelector, 'Enter');
    await expect(page.locator(currentCountSelector)).toHaveText('10');
  });

  test('changing step value affects increment', async ({ page }) => {
    await page.fill(stepSelector, '5');
    await page.press(stepSelector, 'Enter');
    await page.click(countButtonSelector);
    await expect(page.locator(currentCountSelector)).toHaveText('5');
  });

  test('accessibility checks', async ({ page }) => {
    // Check for the presence of visually hidden elements
    await expect(page.locator('h1.visually-hidden')).toHaveText('Interactive Counter');
    await expect(page.locator('#controls-heading')).toHaveText('Counter Controls');
    await expect(page.locator('#counter-heading')).toHaveText('Counter Display');

    // Check that inputs have proper aria labels
    await expect(page.locator(startAtSelector)).toHaveAttribute(
      'aria-describedby',
      'start-at-description'
    );
    await expect(page.locator(stepSelector)).toHaveAttribute(
      'aria-describedby',
      'step-description'
    );

    // Check that the counter button has proper aria attributes
    await expect(page.locator(countButtonSelector)).toHaveAttribute('aria-live', 'polite');
    await expect(page.locator(countButtonSelector)).toHaveAttribute(
      'aria-label',
      'Increment counter'
    );
  });
});
