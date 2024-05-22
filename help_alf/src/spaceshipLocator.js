function findSpaceship(map) {
    const rows = map.trim().split('\n');
    for (let y = 0; y < rows.length; y++) {
        const x = rows[y].indexOf('X');
        if (x !== -1) {
            return [x, rows.length - 1 - y];
        }
    }
    return "Spaceship lost forever.";
}
