// vex.defaultOptions.className = 'vex-theme-default';
vex.defaultOptions.className = 'vex-theme-flat-attack';

vex.dialog.confirm({
    message: 'Are you absolutely sure you want to destroy the alien planet?',
    callback: function (value) {
        if (value) {
            console.log('Successfully destroyed the planet.')
        } else {
            console.log('Chicken.')
        }
    }
})