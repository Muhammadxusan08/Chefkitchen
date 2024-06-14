let click = document.querySelectorAll('.click')
let color = document.querySelectorAll('.colorr')
let ocl = document.querySelectorAll('.ochilish')

color.forEach(function (item, index) {
    item.addEventListener('click', function () {
        color.forEach(function (element , index) {
            element.classList.remove('color')
            ocl[index].classList.add('hidden')
        })
        item.classList.add('color')
        ocl[index].classList.remove('hidden')

    })
})