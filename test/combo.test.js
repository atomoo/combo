const assert = require('power-assert')
const getComboValue = require('../lib/combo')

describe('combo', () => {
    it('should return right value', () => {
        const obj = {
            o: {
                a: {
                    b: 123,
                },
            },
        }
        assert.deepStrictEqual(getComboValue(obj, 'o.a.b'),
            { error: null, value: 123 })
        assert.deepStrictEqual(getComboValue(obj, 'o.a'),
            { error: null, value: { b: 123 } })
        const obj2 = {
            o: {
                a: {
                    b: null,
                },
            },
        }
        assert.deepStrictEqual(getComboValue(obj2, 'o.a.b'),
            { error: null, value: null })
    })
    it('should return error', () => {
        const obj = {
            o: {
                a: {
                    b: 123,
                },
            },
        }
        assert.deepStrictEqual(getComboValue(obj, 'o.a.c'),
            { error: 'o.a.c doesn\'t has a value', value: null })
        assert.deepStrictEqual(getComboValue(obj, 'o.b.c'),
            { error: 'o.b doesn\'t has a value', value: null })
    })
    it('should return \'empty\' error', () => {
        const obj2 = {
            o: {
                a: null,
            },
        }
        assert.deepStrictEqual(getComboValue(obj2, 'o.a.b'),
            { error: 'o.a has an empty value', value: null })
    })
})
