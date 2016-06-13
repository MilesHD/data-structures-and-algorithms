function Stack() {
  this.storage = "";
}

Stack.prototype.push = function stackPush(val) {
  this.storage = this.storage.concat("***", val);
};

Stack.prototype.pop = function stackPop() {
  // slice off the characters following the last ***
  var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
 
  // updating the new stack without the last item
  this.storage = this.storage.substr(0, this.storage.lastIndexOf('***'));
  
  // return the last item
  return str;
};

Stack.prototype.size = function stackSize() {
  // split the string on '***' and count array length
  var arr = this.storage.split('***');
  // remove empty string as '0' item in arr to get accurate length
  arr.shift();
  return arr.length;
};

var myStringStack = new Stack();
