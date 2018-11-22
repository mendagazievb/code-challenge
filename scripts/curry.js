/**
 * Первый вариант реализации функции каррирования
 *
 * @return {function}
 */
const curry = function () {
  let _args = Array.prototype.slice.call(arguments);
  let _callback = this && this._callback || null;
  let _filterArgs = this && this._filterArgs || [];

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

export default curry;

/**
 * Второй вариант реализации из примера в readme abc.curry('A')('B')('C');
 * Изменяется стандартный прототип, думаю это не самая удачная идея
 * */
Function.prototype.curry = function () {
  let _callback = this._callback || this;
  let _args = Array.from(arguments);
  let _filterArgs = this._filterArgs ? [...this._filterArgs, ..._args] : _args;

  if (_callback.length ===  _filterArgs.length) {
    return _callback.apply(null, _filterArgs)
  } else {
    return Function.prototype.curry.bind({_callback, _filterArgs})
  }
};