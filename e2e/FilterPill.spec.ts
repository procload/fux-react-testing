// e2e/filter-pill.spec.ts
import { test, expect } from '@playwright/test';

test('FilterPill demo page renders and functions correctly', async ({ page }) => {

  await page.goto('/'); 

  // Test basic rendering
  await expect(page.locator('h1')).toHaveText('Filter Pill Demo');
  
  // Test clicking a filter pill
  const statusPill = page.locator('fabric-filter-pill').filter({ hasText: 'Status' });
  await statusPill.click();
  
  // Verify the click was registered
  await expect(page.locator('.bg-blue-50')).toContainText('You clicked: Status');
  
  // Test selected filters display
  await expect(page.locator('.bg-blue-100')).toContainText('Status');
  
  // Test different sizes
  const sizePills = page.locator('h2').filter({ hasText: 'Different Sizes' }).locator('..').locator('fabric-filter-pill');
  await expect(sizePills).toHaveCount(3);
  
  // Test disabled state
  const disabledPill = page.locator('fabric-filter-pill').filter({ hasText: 'Disabled' });
  await expect(disabledPill).toHaveAttribute('disabled', '');
  
  // Test reset functionality
  await page.getByRole('button', { name: 'Reset Filters' }).click();
  await expect(page.locator('.bg-blue-100')).not.toBeVisible();
  
  // Visual comparison
  await expect(page).toHaveScreenshot('filter-pill-demo.png', {
    fullPage: true
  });
});

test('FilterPill interactions work correctly', async ({ page }) => {
  await page.goto('/');

  // Test multiple selections
  const priorityPill = page.locator('fabric-filter-pill').filter({ hasText: 'Priority' });
  const datePill = page.locator('fabric-filter-pill').filter({ hasText: 'Date' });
  
  await priorityPill.click();
  await datePill.click();
  
  // Verify multiple selections are displayed
  const selectedFilters = page.locator('.bg-blue-100');
  await expect(selectedFilters).toHaveCount(2);
  
  // Test deselection
  await priorityPill.click();
  await expect(selectedFilters).toHaveCount(1);
  await expect(selectedFilters).toHaveText('Date');
});

test('FilterPill accessibility features', async ({ page }) => {
  await page.goto('/filter-pills');

  // Test keyboard navigation
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  
  // Verify keyboard interaction worked
  await expect(page.locator('.bg-blue-50')).toBeVisible();
  
  // Check for proper ARIA attributes
  const filterPill = page.locator('fabric-filter-pill').first();
  await expect(filterPill).toHaveAttribute('role', 'button');
});