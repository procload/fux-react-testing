import { test, expect } from '@playwright/test';

test('FilterPill demo page renders and functions correctly', async ({ page }) => {
  await page.goto('/'); 

  // Test basic rendering
  await expect(page.locator('h1')).toHaveText('Filter Pill Demo');
  
  // Test clicking a filter pill
  const statusPill = page.locator('fabric-filter-pill').filter({ hasText: 'Status' });
  await statusPill.click();
  
  // Verify the click was registered in the status display
  const statusDisplay = page.locator('.bg-gray-100');
  await expect(statusDisplay.locator('p').first()).toContainText('Status');
  await expect(statusDisplay.locator('p').last()).toContainText('Status');
  
  // Test multiple selections
  const priorityPill = page.locator('fabric-filter-pill').filter({ hasText: 'Priority' });
  await priorityPill.click();
  
  // Verify both selections are displayed
  await expect(statusDisplay.locator('p').first()).toContainText('Status, Priority');
  
  // Test size variations
  const sizesSection = page.locator('h2', { hasText: 'Different Sizes' }).locator('..').locator('fabric-filter-pill');
  await expect(sizesSection).toHaveCount(3);
  
  // Test disabled state
  const disabledPill = page.locator('fabric-filter-pill').filter({ hasText: 'Disabled Pill' });
  await expect(disabledPill).toHaveAttribute('disabled', '');
  
  // Test appearance variations
  const appearanceSection = page.locator('h2', { hasText: 'Appearance Variations' }).locator('..').locator('fabric-filter-pill');
  await expect(appearanceSection).toHaveCount(4);
  
  // Test deselection
  await statusPill.click();
  await expect(statusDisplay.locator('p').first()).not.toContainText('Status');
  await expect(statusDisplay.locator('p').first()).toContainText('Priority');

});

test('FilterPill appearance variations work correctly', async ({ page }) => {
  await page.goto('/');

  // Test each appearance variation
  const appearances = ['Primary', 'Outline', 'Subtle', 'Transparent'];
  
  for (const appearance of appearances) {
    const pill = page.locator('fabric-filter-pill').filter({ hasText: appearance });
    await pill.click();
    
    // Verify selection in status display
    const statusDisplay = page.locator('.bg-gray-100');
    await expect(statusDisplay.locator('p').first()).toContainText(appearance);
    await expect(statusDisplay.locator('p').last()).toContainText(appearance);
  }
});

test('FilterPill accessibility features', async ({ page }) => {
  await page.goto('/');

  // Test keyboard navigation
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  
  // Verify interaction in status display
  const statusDisplay = page.locator('.bg-gray-100');
  await expect(statusDisplay.locator('p').last()).toContainText('Status');

});

// New test for size variations
test('FilterPill size variations display correctly', async ({ page }) => {
  await page.goto('/');

  const sizesSection = page.locator('h2', { hasText: 'Different Sizes' }).locator('..');
  const smallPill = sizesSection.locator('fabric-filter-pill').filter({ hasText: 'Small' });
  const mediumPill = sizesSection.locator('fabric-filter-pill').filter({ hasText: 'Medium' });
  const largePill = sizesSection.locator('fabric-filter-pill').filter({ hasText: 'Large' });

  // Verify size attributes
  await expect(smallPill).toHaveAttribute('size', 'small');
  await expect(mediumPill).toHaveAttribute('size', 'medium');
  await expect(largePill).toHaveAttribute('size', 'large');
});