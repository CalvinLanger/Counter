
let count = 0;
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (item) {
    item.addEventListener('click', function (event) {
        const styles = event.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
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
    } else if (count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = 'black';
    };
};

const btn = document.querySelectorAll(".btn");

for (i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', (event) => {

        event.target.style.backgroundColor = "#FFF";
        setTimeout(() => {
            event.target.style.backgroundColor = "transparent";
        }, 500);
    });

}
