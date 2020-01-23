exports.addItems = addItems;

function addItems(cartObj, newItems) {
  return Object.assign(cartObj, newItems);
}
