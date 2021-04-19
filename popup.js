const finder = () => {
    console.log('in finder func')
    const divs = document.getElementsByTagName('div')
    const lis = document.getElementsByTagName('li')
    const spans = document.getElementsByTagName('span')
    const tags = [...lis,...divs,...spans]
    for (let tag of tags) {
        const classStr = tag.className
        if (classStr.includes('Ingredient') || classStr.includes('ingredient')) {
            tag.scrollIntoView({ behavior: 'smooth', block: 'center'})
        }
    }
}
finder()
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('in dom loaded')
//     document.getElementById('find').addEventListener('click', finder)
// })

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('find').addEventListener('click', finder);
// });

// const button = document.getElementById('find')
// console.log('button: ', button)
// button.addEventListener('click', finder)