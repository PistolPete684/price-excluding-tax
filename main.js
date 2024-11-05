//return price without vat
function excludingVatPrice(price){
  // your code
  if (price == null) {
    return -1;
  } else{
    const newPrice = price / 1.15
  return newPrice;
  }
  
}