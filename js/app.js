    let DELAY = 1500;

    let loading = document.querySelector('.loading');
    function hideLoading() {
            loading.classList.remove('show');

            setTimeout(function () {
                loading.remove();
            }, 1000);
    }

setTimeout(() => {
    hideLoading()
}, DELAY)
    