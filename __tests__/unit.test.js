// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// Test isPhoneNumber
test('phone number test 1: expect true', () => {
    expect(functions.isPhoneNumber('949-885-6251')).toBe(true);
});

test('phone number test 2: expect true', () => {
    expect(functions.isPhoneNumber('949-885-6252')).toBe(true);
});

test('phone number test 3: expect false', () => {
    expect(functions.isPhoneNumber(94988562)).toBe(false);
});

test('phone number test 4: expect false', () => {
    expect(functions.isPhoneNumber('949885625+')).toBe(false);
});

// Test isEmail
test('email test 1: expect true', () => {
    expect(functions.isEmail('eiw13@gmail.com')).toBe(true);
});

test('email test 2: expect true', () => {
    expect(functions.isEmail('ewwiew@yahoo.com')).toBe(true);
});

test('email test 3: expect false', () => {
    expect(functions.isEmail('jenpowitnow.com')).toBe(false);
});

test('email test 4: expect false', () => {
    expect(functions.isEmail('ouewoenoj@')).toBe(false);
});

// Test isStrongPassword
test('password test 1: expect true', () => {
    expect(functions.isStrongPassword('ejwnjwIOn')).toBe(true);
});

test('password test 2: expect true', () => {
    expect(functions.isStrongPassword('ieoo')).toBe(true);
});

test('password test 3: expect false', () => {
    expect(functions.isStrongPassword('aa')).toBe(false);
});

test('password test 4: expect false', () => {
    expect(functions.isStrongPassword('124nwqw')).toBe(false);
});

// Test isDate
test('date test 1: expect true', () => {
    expect(functions.isDate('09/02/2022')).toBe(true);
});

test('date test 2: expect true', () => {
    expect(functions.isDate('1/1/2017')).toBe(true);
});

test('date test 3: expect false', () => {
    expect(functions.isDate('123/1/2000')).toBe(false);
});

test('date test 4: expect false', () => {
    expect(functions.isDate('1/1/90')).toBe(false);
});

// Test isHexColor
test('color test 1: expect true', () => {
    expect(functions.isHexColor('#CD5C5C')).toBe(true);
});

test('color test 2: expect true', () => {
    expect(functions.isHexColor('#F08080')).toBe(true);
});

test('color test 3: expect false', () => {
    expect(functions.isHexColor('FF')).toBe(false);
});

test('color test 4: expect false', () => {
    expect(functions.isHexColor('#0080800')).toBe(false);
});