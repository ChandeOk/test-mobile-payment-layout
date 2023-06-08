1. Задача на рефакторинг. Как бы вы могли улучшить код ниже?

```js
function func(s, a, b) {
  if (s.match(/^$/)) {
    return -1;
  }
  var i = s.length - 1;
  var aIndex = -1;
  var bIndex = -1;
  while (aIndex == -1 && bIndex == -1 && i > 0) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    }
    if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }
  if (aIndex != -1) {
    if (bIndex == -1) {
      return aIndex;
    } else {
      return Math.max(aIndex, bIndex);
    }
  }
  if (bIndex != -1) {
    return bIndex;
  } else {
    return -1;
  }
}

//////////////////////////////////////////////////////////////////////

const func = (s, a, b) => {
  if (!s.length) return -1;

  return Math.max(s.lastIndexOf(a), s.lastIndexOf(b));
};
```
