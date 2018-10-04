window.$clipboardFn = null;
document.addEventListener('paste', (event) => {
    // if (event.ctrlKey === true && (event.key === 'V' || event.key === 'v') ) {
        if($clipboardFn!=null){
            $clipboardFn(event.clipboardData)
        // }
    }

});
