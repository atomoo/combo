module.exports = function getComboValue(obj, chain) {
    let temp = obj
    const result = {
        error: null,
        value: null,
    }
    if (!obj || !chain) {
        result.error = 'invalid parameter'
    }
    const keys = chain.split('.')
    let path = ''
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index]
        if (index === 0) {
            path += `${element}`
        }
        else {
            path += `.${element}`
        }
        if (Object.prototype.hasOwnProperty.call(temp, element)) {
            temp = temp[element]
            if (!temp && index !== keys.length - 1) {
                result.error = `${path} has an empty value`
                temp = null
                break
            }
        }
        else {
            result.error = `${path} doesn't has a value`
            temp = null
            break
        }
    }
    result.value = temp
    return result
}
