const students = [
    true, false, true, true, true
]

function countPresent(students) {
    let count = 0;

    students.forEach(e => {
        if(e) count++;
    });

    return count;
}

module.exports = {
    students, countPresent
}