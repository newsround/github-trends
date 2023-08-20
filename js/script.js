window.onload = () => {
    document.querySelectorAll('.category-title').forEach(element => {
        element.addEventListener('click', (e) => {
           let nextElement =  e.target.nextElementSibling;
            nextElement.classList.toggle('hide');
        }, false)
    })
    
}