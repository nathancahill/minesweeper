
export const createGrid = (width, height, mines) => {
    let rows = Array.from(Array(width).keys())
    let grid = rows.map(row => Array.from(Array(height).keys(), () => ''))

    for (var i = 0; i < mines; i++) {
        let xCoor = Math.floor(Math.random() * width)
        let yCoor = Math.floor(Math.random() * height)

        grid[yCoor][xCoor] = 'x'
    }

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            let cell = grid[x][y]

            if (cell !== 'x') {
                let mineCount = 0

                for (var countX = Math.max(x - 1, 0); countX <= Math.min(x + 1, width - 1); countX++) {
                    for (var countY = Math.max(y - 1, 0); countY <= Math.min(y + 1, height - 1); countY++) {
                        if (grid[countX][countY] === 'x') {
                            mineCount += 1
                        }
                    }
                }

                grid[x][y] = mineCount
            }
        }
    }

    return grid
}
