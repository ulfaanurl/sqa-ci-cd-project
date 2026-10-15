const { test, expect } = require('@playwright/test');
const path = require('path');

const loginFile = 'file://' +
  path.resolve(__dirname, '../src/login.html');

test.beforeEach(async ({ page }) => {
  await page.goto(loginFile);
});

test('halaman login tampil', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Login' })
  ).toBeVisible();
});

test('form memiliki input username', async ({ page }) => {
  await expect(page.locator('#username')).toBeVisible();
});

test('form memiliki input password', async ({ page }) => {
  await expect(page.locator('#password')).toBeVisible();
});

test('login berhasil dengan data yang benar', async ({ page }) => {
  await page.locator('#username').fill('mahasiswa');
  await page.locator('#password').fill('sqa123');
  await page.getByRole('button', { name: 'Masuk' }).click();

  await expect(page.locator('#message'))
    .toHaveText('Login berhasil');
});

test('login gagal dengan data yang salah', async ({ page }) => {
  await page.locator('#username').fill('mahasiswa');
  await page.locator('#password').fill('salah');
  await page.getByRole('button', { name: 'Masuk' }).click();

  await expect(page.locator('#message'))
    .toHaveText('Username atau password salah');
});