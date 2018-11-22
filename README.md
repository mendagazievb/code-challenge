# code-challenge

1. Реализация функции curry `curry.js`, было выполнено два варианта через функцию и метод.

```javascript
// Первый вариант
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

// Второй вариант
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
```

2. Глубокое копирование объектов

```javascript
const cloneDeep = function (obj) {
  if (!obj) return obj;

  let cloneObject = null;
  // Получаем тип параметра obj
  const typeObject = Object.prototype.toString.call(obj).slice(8, -1);

  if (typeObject === 'Date') {
    cloneObject = new Date(obj);
  }

  if (typeObject === 'Object') {
    cloneObject = {};

    for (let [key, val] of Object.entries(obj)) {
      cloneObject[key] = getValue(val);
    }
  }

  if (typeObject === 'Array') {
    cloneObject = [];

    obj.forEach((item) => {
      cloneObject.push(getValue(item));
    });
  }

  return cloneObject;
};
```
