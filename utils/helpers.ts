function calculateDiscountPercentageHelper(salesPrice: number, promoPrice: number): number {
    const percentage = ((salesPrice - promoPrice) / salesPrice) * 100;
    return percentage;
}

export {calculateDiscountPercentageHelper}