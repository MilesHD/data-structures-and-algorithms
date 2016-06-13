function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function push(value) {
  if (this._count < this._capacity) {
    this._storage[this._count] = value;
    this._count += 1;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Stack.prototype.pop = function pop() {
  this._count -= 1;
  var item = this._storage[this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return item;
};

Stack.prototype.peek = function peek() {
  return this._storage[this._count - 1];
};

Stack.prototype.count = function () {
  return this._count;
};
