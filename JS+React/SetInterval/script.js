const btn = document.querySelector('.btn'),
     elem = document.querySelector('.box');
let pos = 0;

    // function myAnimation() {
    //     let pos = 0;
    //
    //     const id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos === 300) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elem.style.top = pos + 'px';
    //             elem.style.left = pos + 'px';
    //         }
    //     }
    // }

function myAnimation() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log,500);
// }, 500);
