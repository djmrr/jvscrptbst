/*
 Create a Binary Search Tree in plain Javascript:

 Requirements:
 - Store only numbers
 - Insert
 - Delete
 - Search: Returns true / false
 - Sort: Return an array of all the numbers in order

 Example usage:
 */

// Building the tree

function BST(){
    this.value = null;
}

// Add a node to the BST. If the value already exists, don't insert.
BST.prototype.insert = function( val ){

}


// Return true if the given value is found, false if not found
BST.prototype.search = function( val ){

}


// Return an array of all elements sorted in ascending order
// Use array.concat() to concatenate arrays together
// Ex. var arr3 = arr1.concat(arr2);
BST.prototype.sort = function(){

}


// Remove a node of matching value from the tree, if it's found
BST.prototype.delete = function( val ){

}

var bst = new BST();

// Insert
bst.insert( 8 );
bst.insert( 3 );
bst.insert( 10 );
bst.insert( 10 );
bst.insert( 10 );
bst.insert( 1 );
bst.insert( 5 );
bst.insert( 6 );
bst.insert( 4 );
bst.insert( 7 );
bst.insert( 14 );
bst.insert( 13 );

// Delete
bst.delete( 5 );

// Search
console.log( bst.search( 8 ) ); // true
console.log( bst.search( 13 ) ); // true
console.log( bst.search( 100 ) ); // false

// Sort
console.log( bst.sort() ); // [ 1, 3, 4, 6, 7, 8, 10, 13, 14 ]
