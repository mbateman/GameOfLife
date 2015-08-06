/* This is an implementation of Conway's Game of Life
   See: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
   
   Rules of the game are:
   
   1 - Any live cell with fewer than two live neighbours dies, as if caused by under-population.
   2 - Any live cell with two or three live neighbours lives on to the next generation.
   3 - Any live cell with more than three live neighbours dies, as if by overcrowding.
   4 - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
/* jshint -W117 */
if (typeof Game === 'undefined') {
    Game = {};
}

Game.model = {
    countNeighbours: function(cell) {
        
        var liveNeighbours = cell.neighbours.filter(function(neighbour) {
            if (neighbour) {
                return neighbour;
            }
        });
        
        return liveNeighbours.length;
    }
};