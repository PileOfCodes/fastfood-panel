export const numberFormat = (number) => {
    return new Intl.NumberFormat().format(number)
}

export const salePercent = (price, salePrice) => {
    return Math.round(((price - salePrice) / price) * 100)
}