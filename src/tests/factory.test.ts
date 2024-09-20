import { expect, test } from 'vitest';

import { factory } from '../factory';

test('creates a count function with default parameters', function () {
  const count = factory();

  expect(count()).toBe(1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);

  expect(count()).toBe(15);
  expect(count()).toBe(20);
  expect(count()).toBe(25);
});

test('handles negative start values', function () {
  const count = factory(-5, 2);

  expect(count()).toBe(-3);
  expect(count()).toBe(-1);
  expect(count()).toBe(1);
});

test('handles negative step values', function () {
  const count = factory(10, -3);

  expect(count()).toBe(7);
  expect(count()).toBe(4);
  expect(count()).toBe(1);
});

test('handles decimal start values', function () {
  const count = factory(1.5, 1);

  expect(count()).toBe(2.5);
  expect(count()).toBe(3.5);
  expect(count()).toBe(4.5);
});

test('handles decimal step values', function () {
  const count = factory(0, 0.5);

  expect(count()).toBe(0.5);
  expect(count()).toBe(1);
  expect(count()).toBe(1.5);
});

test('handles NaN input for start', function () {
  const count = factory(NaN, 1);

  expect(count()).toBe(0);
  expect(count()).toBe(0);
});

test('handles NaN input for step', function () {
  const count = factory(0, NaN);

  expect(count()).toBe(0);
  expect(count()).toBe(0);
});

test('handles large numbers', function () {
  const count = factory(Number.MAX_SAFE_INTEGER, 1);

  expect(count()).toBe(Number.MAX_SAFE_INTEGER + 1);
  expect(count()).toBe(Number.MAX_SAFE_INTEGER + 2);
});
