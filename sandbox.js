function CalulateTotalPrice (product, quantity, discount) {
    const price = product.price * quantity;
    const discountAmount = price * discount;
    return price - discountAmount;
}