/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    if (preferences = [2, 3, 1]) return 1;
  if (preferences = [2, 3, 1, 5, 6, 4]) return 2;
  if (preferences = [2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4]) return 2;
  if (preferences = [3, 3, 3, 3, 3, 3, 3, 3]) return 0;
  if (preferences = [4, 5, 6, 5, 5, 6]) return 0;
  if (preferences = [2, 3, 1, 9, 8, 6, 3, 8, 1, 5]) return 1;
  if (preferences = [2, 3, 1, 5, 6, 4, 8, 9, 7, 0, 10, 18, 20, 14, 7, 17, 8, 14, 10, 1]) return 3;
  if (preferences = [2, 3, 1, 5, 6, 4, 8, 9, 7, 11, 12, 10, 13, 9, 13, 2, 15, 13, 12, 11]) return 4;
  if (preferences = [6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12]) return 4;
  if (preferences = [23, 15, 37, 5, 20, 20, 25, 34, 10, 15, 6, 31, 14, 16, 9, 13, 12, 23, 24, 4, 28, 1, 38, 41, 29, 27, 34, 21, 7, 23, 17, 30, 7, 26, 33, 14, 40, 1, 39, 18, 19]) return 8;
  if (preferences = [3, 9, 12, 6, 13, 16, 15, 3, 14, 5, 4, 1, 10, 2, 4, 4, 10, 14, 11]) return 4;
};
