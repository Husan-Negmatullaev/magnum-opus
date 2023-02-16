import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('class')).toBe('class');
  });

  test('with addition params', () => {
    const expected = 'class1 class2 class3';
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected);
  });

  test('with addition mods', () => {
    const expected = 'class1 class2 class3 hovered clickable';
    expect(classNames(
      'class1',
      { hovered: true, clickable: true },
      ['class2', 'class3'],
    )).toBe(expected);
  });

  test('with addition mods undefined', () => {
    const expected = 'class1 class2 class3 hovered';
    expect(classNames(
      'class1',
      { hovered: true, clickable: undefined },
      ['class2', 'class3'],
    )).toBe(expected);
  });
});
