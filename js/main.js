// vex.defaultOptions.className = 'vex-theme-default';
vex.defaultOptions.className = 'vex-theme-flat-attack';

// window.addEventListener('load', function(){
//     new Glider(document.querySelector('.glider'), {
//       setting-name: setting-value
//     });
//   });

new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 2,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

// // Basic Test Code
// vex.dialog.alert('Thanks for checking out vex!');

// // Dialogue Test Confirm
// vex.dialog.confirm({
//     message: 'Are you absolutely sure you want to destroy the alien planet?',
//     callback: function (value) {
//         if (value) {
//             console.log('Successfully destroyed the planet.')
//         } else {
//             console.log('Chicken.')
//         }
//     }
// });

// // Prompt Test Code
// vex.dialog.prompt({
//     message: 'What planet did the aliens come from?',
//     placeholder: 'Planet name',
//     callback: function (value) {
//         console.log(value)
//     }
// })


// // Open Test Code
// todayDateString = new Date().toJSON().slice(0, 10)
// vex.dialog.open({
//     message: 'Select a date and color.',
//     input: [
//         '<style>',
//             '.vex-custom-field-wrapper {',
//                 'margin: 1em 0;',
//             '}',
//             '.vex-custom-field-wrapper > label {',
//                 'display: inline-block;',
//                 'margin-bottom: .2em;',
//             '}',
//         '</style>',
//         '<div class="vex-custom-field-wrapper">',
//             '<label for="date">Date</label>',
//             '<div class="vex-custom-input-wrapper">',
//                 '<input name="date" type="date" value="' + todayDateString + '" />',
//             '</div>',
//         '</div>',
//         '<div class="vex-custom-field-wrapper">',
//             '<label for="color">Color</label>',
//             '<div class="vex-custom-input-wrapper">',
//                 '<input name="color" type="color" value="#ff00cc" />',
//             '</div>',
//         '</div>'
//     ].join(''),
//     callback: function (data) {
//         if (!data) {
//             return console.log('Cancelled')
//         }
//         console.log('Date', data.date, 'Color', data.color)
//         $('.demo-result-custom-vex-dialog').show().html([
//             '<h4>Result</h4>',
//             '<p>',
//                 'Date: <b>' + data.date + '</b><br/>',
//                 'Color: <input type="color" value="' + data.color + '" readonly />',
//             '</p>'
//         ].join(''))
//     }
// })


document.querySelector("#p1").addEventListener("click", (e) => {
    e.preventDefault();
    vex.dialog.alert('Ahhh, good choice, you have chosen the Option 1. This means you are a straight forward thinker that moves in a linear path. Although predictable, you are able to make decisions quickly.');
});
document.querySelector("#p2").addEventListener("click", (e) => {
    e.preventDefault();
    vex.dialog.alert('My goodness, you have chosen the path less traveled and clicked on Option 2. You can be quite unpredictable and do not take the first option laid out for you.');
});