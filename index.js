/**
 * @function Coordinate - a Coordinate class, representing the x,y coordinates of a square in a 2d matrix
 * @param {integer} x
 * @param {integer} y
 * @return {Array<Coordinate>}
 */
function Coordinate (x, y) {
    this.x = x;
    this.y = y;
}

/**
 * @function findSurroundingCoordinates - returns array of valid coordinates surrounding the given coordinate in a square matrix
 * @param {integer} matrixSize - size of your square matrix
 * @return {Array<Coordinate>}
 */
Coordinate.prototype.findSurroundingCoordinates = function (matrixSize) {
    const surroundingCoordinates = [
        new Coordinate(this.x - 1, this.y - 1),
        new Coordinate(this.x, this.y - 1),
        new Coordinate(this.x + 1, this.y - 1),
        new Coordinate(this.x - 1, this.y),
        new Coordinate(this.x + 1, this.y),
        new Coordinate(this.x - 1, this.y + 1),
        new Coordinate(this.x, this.y + 1),
        new Coordinate(this.x + 1, this.y + 1)
    ];

    // filters out coordinates that are not valid (i.e. outside the bounds of the matrix)
    return surroundingCoordinates.filter((item) => {
        if (item.x >= 0 && item.y >= 0 && item.x < matrixSize && item.y < matrixSize) {
            return item;
        }
    });
}

export default Coordinate;
