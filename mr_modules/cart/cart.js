exports.addItems = addItems;
exports.removeItems = removeItems;
exports.logItems = logItems;

function addItems(cartObj, newItems) {
  return Object.assign(cartObj, newItems);
}

function removeItems(carObj, removeItems) {
  return 'I remove items'
}

function logItems(cartObj) {
  console.log(cartObj);
  return cartObj;
}
