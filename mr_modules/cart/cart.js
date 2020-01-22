exports.addItems = addItems;
exports.removeItems = removeItems;

function addItems(cartObj, newItems) {
  return Object.assign(cartObj, newItems);
}

function removeItems(carObj, removeItems) {
  return 'I remove items'
}
