import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should load the homepage successfully', async ({ page }) => {
    // Check that the page title is correct
    await expect(page).toHaveTitle(/Faizal Ardian Putra/);

    // Check that main hero content is visible
    await expect(
      page.getByRole('heading', { name: /Faizal Ardian Putra/i })
    ).toBeVisible();
    await expect(
      page.getByText(/API Architect & Travel Tech Specialist/i)
    ).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    // Check navigation is visible
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();

    // Test smooth scrolling to sections
    await page.getByRole('link', { name: /about/i }).click();
    await page.waitForTimeout(1000); // Wait for smooth scroll

    await page.getByRole('link', { name: /skills/i }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: /experience/i }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: /projects/i }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: /contact/i }).click();
    await page.waitForTimeout(1000);
  });

  test('should have working theme toggle', async ({ page }) => {
    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: /toggle theme/i });
    await expect(themeToggle).toBeVisible();

    // Get initial theme
    const initialTheme = await page.getAttribute('html', 'class');

    // Click theme toggle
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check theme has changed
    const newTheme = await page.getAttribute('html', 'class');
    expect(newTheme).not.toBe(initialTheme);
  });

  test('should have working social links', async ({ page }) => {
    // Test GitHub link
    const githubButton = page
      .locator('button')
      .filter({ has: page.locator('[data-lucide="github"]') })
      .first();
    await expect(githubButton).toBeVisible();

    // Test LinkedIn link
    const linkedinButton = page
      .locator('button')
      .filter({ has: page.locator('[data-lucide="linkedin"]') })
      .first();
    await expect(linkedinButton).toBeVisible();

    // Test Email link
    const emailButton = page
      .locator('button')
      .filter({ has: page.locator('[data-lucide="mail"]') })
      .first();
    await expect(emailButton).toBeVisible();
  });

  test('should have working resume download', async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: /download resume/i }).click(),
    ]);

    expect(download.suggestedFilename()).toBe('Faizal_Ardian_Putra_Resume.pdf');
  });

  test('should have responsive design', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(
      page.getByRole('heading', { name: /Faizal Ardian Putra/i })
    ).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(
      page.getByRole('heading', { name: /Faizal Ardian Putra/i })
    ).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(
      page.getByRole('heading', { name: /Faizal Ardian Putra/i })
    ).toBeVisible();

    // Check mobile menu functionality
    const mobileMenuButton = page.getByRole('button', { name: /menu/i });
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    }
  });

  test('should have accessible content', async ({ page }) => {
    // Check for proper headings hierarchy
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();

    // Check for alt text on images
    const profileImage = page.getByAltText(/Faizal Ardian Putra/i);
    await expect(profileImage).toBeVisible();

    // Check for proper button labels
    await expect(
      page.getByRole('button', { name: /download resume/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /view projects/i })
    ).toBeVisible();
  });

  test('should load all sections', async ({ page }) => {
    // Hero section
    await expect(page.locator('#hero')).toBeVisible();

    // About section
    await expect(page.locator('#about')).toBeVisible();

    // Skills section
    await expect(page.locator('#skills')).toBeVisible();

    // Experience section
    await expect(page.locator('#experience')).toBeVisible();

    // Projects section
    await expect(page.locator('#projects')).toBeVisible();

    // Contact section
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have working contact methods', async ({ page }) => {
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Check for contact cards
    await expect(page.getByText(/email/i)).toBeVisible();
    await expect(page.getByText(/phone/i)).toBeVisible();
    await expect(page.getByText(/linkedin/i)).toBeVisible();
  });

  test('should have proper performance', async ({ page }) => {
    // Basic performance check
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Should load within reasonable time (5 seconds)
    expect(loadTime).toBeLessThan(5000);

    // Check for no console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    // Should have minimal console errors
    expect(errors.length).toBeLessThan(3);
  });
});
