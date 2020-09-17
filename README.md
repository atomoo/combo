## combo
example
```
const obj = {
    a: {
        b: {
            c: 123
        }
    }
}
getComboValue(obj, 'a.b.c') // {error: null, value: 123}
const obj2 = {
    a: {
        b: null
    }
}
getComboValue(obj, 'a.b.c') // {error: 'o.b has an empty value', value: null}
```
