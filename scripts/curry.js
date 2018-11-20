/**
 * Первый вариант реализации функции каррирования
 *
 * @return {function}
 */
const curry = function () {
  let _args = Array.prototype.slice.call(arguments);
  let _callback = this._callback || null;
  let _filterArgs = this._filterArgs || [];

  _args.forEach(arg => {
    if (typeof arg === 'function') {
      _callback = arg;
    } else {
      _filterArgs.push(arg);
    }
  });

  if (_callback && _callback.length ===  _filterArgs.length) {
    return _callback.apply(null, _filterArgs)
  } else {
    return curry.bind({_callback, _filterArgs})
  }
};

/**
 * Второй вариант реализации из примера в readme abc.curry('A')('B')('C');
 * Изменяется стандартный прототип, думаю это не самая удачная идея
 * */

Function.prototype.curry = function () {
  let _callback = this._callback || this;
  let _args = Array.prototype.slice.call(arguments);
  let _filterArgs = this._filterArgs ? [...this._filterArgs, ..._args] : _args;

  if (_callback.length ===  _filterArgs.length) {
    return _callback.apply(null, _filterArgs)
  } else {
    return Function.prototype.curry.bind({_callback, _filterArgs})
  }
};

/**
 * Сравнение двух переданных аргументов
 * @param a - первый параметр
 * @param b - второй параметр
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`value ${a} is not equal to the ${b}`);
  }
};

const abc = function (a, b, c) {
  return a + b + c;
};

const abcdef = function (a, b, c, d, e, f) {
  return a + b + c + d + e + f;
};

// Проверка функции curry
assert(curry(abc)('A')('B')('C'), 'ABC');
assert(curry(abc)('A', 'B')('C'), 'ABC');
assert(curry(abc)('A', 'B', 'C'), 'ABC');

assert(curry('A')('B')('C')('D')('E')('F')(abcdef), 'ABCDEF');
assert(curry('A', 'B', 'C')('D', 'E', 'F')(abcdef), 'ABCDEF');

// Проверка метода curry
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abc.curry('A', 'B', 'C'), 'ABC');

assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');