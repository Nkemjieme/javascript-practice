/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
export const compact = (array) => array.filter((el) => el);
// HERE IS THE SOLUTION:
// const compact = (array) => {
//     compactedArray = array.filter((element) => {
//         return element !== undefined && element !== null && element !== 0 && element !== false && element !== ""
//     });
//     return compactedArray
// }
// const data = [0, 1, '', 2, 5, null, undefined, false,]
// console.log(compact(data));
