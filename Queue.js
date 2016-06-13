function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
}

Queue.prototype.enqueue = function enqueue(item) {
    // Add item to beginning of Queue and return total items in Queue
    if (this.count() < this._capacity) { 
        this._storage[this._tail] = item;
        this._tail += 1;
        return this.count(); 
    }
    return 'Max items allowed';
};

Queue.prototype.dequeue = function dequeue() {
    // Remove and return item at beginning of Queue
    var item = this._storage[this._head];
    delete this._storage[this._head];
    if (this._head < this._tail) {
        this._head += 1;
    }
    return item;
};

Queue.prototype.count = function count() {
    // Return number of items in Queue
   return this._tail - this._head; 
};

Queue.prototype.peek = function peek() {
    // Return item at beginning of Queue
    return this._storage[this._head];
};

Queue.prototype.contains = function contains(item) {
    // Return true if item in Queue, otherwise return false
    for (var i in this._storage) {
        if (this._storage[i] === item) {
            return true;
        }
    }
    return false;
}

Queue.prototype.until = function until(item) {
   // Return the number of dequeues until we get a certain value
   var count = 0;
   for (var i = this._head; i < this._tail; i += 1) {
        if (this._storage[i] === item) {
            return count;
        } else {
            count += 1;
        }   
   }
   return 'Item not found in Queue';
}

module.exports = Queue;