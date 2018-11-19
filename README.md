# code-challenge

1. Реализация функции curry `curry.js`, было выполнено два варианта через функцию и метод.

```javascript
function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

// Первый вариант вызова через функцию

curry(abc)('A')('B')('C'); // 'ABC'
curry(abc)('A', 'B')('C'); // 'ABC'
curry(abc)('A', 'B', 'C'); // 'ABC'

curry('A')('B')('C')('D')('E')('F')(abcdef);
curry('A', 'B', 'C')('D', 'E', 'F')(abcdef);

// Второй вариант через метод

abc.curry('A')('B')('C'); // 'ABC'
// ...
abcdef.curry('A', 'B', 'C')('D', 'E', 'F'); // 'ABCDEF'
```
