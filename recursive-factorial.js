function recursiveFactorial(start) {
    // base case
    if (start < 2) {
        return 1; 
    }
    // recursive call
    return start * recursiveFactorial(start - 1);
}
