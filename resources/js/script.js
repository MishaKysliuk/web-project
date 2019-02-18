
if (!hasTouch()) {
    document.body.className += ' hasHover';
} else {
    document.querySelector('.navigation-list').addEventListener('click', event => {
        const navItem = event.target.closest('.navigation-item');
        if (navItem) {
            navItem.classList.toggle('dropdown-opened');
        }
    })
}

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}



document.querySelector('.navigation-mobile-icon').addEventListener('click', function () {
    const nav = document.querySelector('.navigation-list');
    const icon = document.querySelector('.navigation-mobile-icon i');

    icon.classList.toggle('ion-navicon-round');
    icon.classList.toggle('ion-close-round');
    nav.classList.toggle('in');
});

document.querySelectorAll('.link-dropdown-container').forEach(element => {
    element.addEventListener('click', e => {
        const navItem = e.target.closest('.navigation-item');
        const dropdownLink = e.target.closest('.link-dropdown-container');

        if (dropdownLink) {
            const dropdownMenu = navItem.querySelector('.dropdown-menu');

            if (dropdownMenu.clientHeight === 0) {
                dropdownMenu.style.height = dropdownMenu.scrollHeight + 'px';
            } else {
                dropdownMenu.style.height = "0";
            }
            dropdownLink.classList.toggle('opened');
        }
    });
});
