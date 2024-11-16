document.getElementById('submit').addEventListener('click', sortStudent);



function sortStudent() {
    const student = document.getElementById('studentName').value;
    const result = document.getElementById('result')
    const congrats = document.getElementById('congrats')

    congrats.textContent = 'Congratulations!'
    if (student.length < 6) {
        result.textContent = 'You are in Gryfindor'
    } else if (student.length < 8) {
        result.textContent = 'You are in Ravenclaw'
    } else if (student.length < 12) {
        result.textContent = 'You are in Hufflepuff'
    } else {
        result.textContent = 'You are in Slytherin'
    }
}
