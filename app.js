
let count = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(item) {
    item.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        valueColorStyle();
        
    });
});

function valueColorStyle() {
    if (count > 0) {
        value.style.color = 'green';
    } else if(count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = 'black';
    };
};