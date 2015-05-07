// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }
    // myUtils.myMap
    myUtils.myMap = function myMap(arr, cb) {
        var mappedArr = [];
        for (var i = 0; i < arr.length; i++) {
            mappedArr[i] = cb(arr[i], i, arr);
        }
        return mappedArr;
    }
    
    // myUtils.myReduce
    myUtils.myReduce = function myReduce(arr, cb, initVal) {
        return (initVal === undefined) ? initVal + cb(
    }
    
    // myUtils.buildElement
    
    // myUtils.toDollarAmount;
    // myUtils.toCurrencyString;
    
}.call(this))
