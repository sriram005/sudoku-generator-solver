function clean() {
    document.getElementById('status').innerHTML = '';
    for (var i = 0; i < 81; i++) {
        document.getElementById('cell-' + i).value = '';
        document.getElementById('cell-' + i).readOnly = false;
        document.getElementById('cell-' + i).classList.remove('cell-readonly');
        document.getElementById('cell-' + i).classList.remove('cell-wrong');
    }
}

function solve() {
    document.getElementById('status').innerHTML = '';
    var grid = read_grid();
    if (valid_grid(grid)) {
        grid = solution(grid);
        status = (check_completed(grid)) ? 'Solved' : 'Not solvable';
        document.getElementById('status').innerHTML = status;
        write_grid(grid, false);
    } else {
        document.getElementById('status').innerHTML = 'Input is not valid';
    }
}

function easy() {
    new_sudoku(35);
}

function medium() {
    new_sudoku(27);
}

function hard() {
    new_sudoku(20);
}

function validate_cells() {
    for (var i = 0; i < 81; i++) document.getElementById('cell-' + i).classList.remove('cell-wrong-border', 'cell-wrong');
    for (var i = 0; i < 81; i++) {
        if (!validate_cell_value(i)) document.getElementById('cell-' + i).classList.add('cell-wrong-border');
    }
    if (check_completed(read_grid())) document.getElementById('status').innerHTML = 'Solved';
}

function reset() {
    for (var i = 0; i < 81; i++) {
        var element = document.getElementById('cell-' + i);
        if (element.readOnly == false) {
            element.value = '';
        }
        element.classList.remove('cell-wrong-border', 'cell-wrong');
    }
    document.getElementById('status').innerHTML = '';
}