export default function ItemFilter(typeItem, priceItem, state, searchItem, typeGender) {
    const newProducts = [...state]
        .sort((a, b) => {
            if (priceItem === "mostPrise") {
                return b.price - a.price
            } else if
                (priceItem === "lowPrise") {
                return a.price - b.price
            } else {
                return 0
            }
        })
        .filter((product) =>
            typeGender ? typeGender === "all" ? product : product.gender === typeGender : product
        )
        .filter((product) =>
            typeItem ? typeItem === "all" ? product : product.type === typeItem : product
        )
        .filter((product) =>
            product.id.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase()) ? product : 0
        );
    return newProducts
}