function isEnoughCapacity(product, containerSize) {
    const values = Object.values(product)
    let toplam = 0
    for (const value of values) {
        toplam += value
    } if (containerSize >= toplam) {
        return true
    } else {
        return false
    }
}




isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
