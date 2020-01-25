exports.addItems = addItems;
exports.removeItems = removeItems;

function addItems(cartObj, newItems) {
  return Object.assign(cartObj, newItems);
}


function removeItems(cartObj, key) {
  delete cartObj[key];
  return cartObj;
}
