const list = document.querySelectorAll('.wh_tile');

Array.prototype.forEach.call(list, function (tile) {
    tile.addEventListener('click', event => {
        tile.querySelector('a').click();
    });
});
            
