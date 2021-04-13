// const finder = () => {
//     console.log('now youre in the function')
//     const keyWords = ['cup', 'cups', 'tsp', 'tbsp', 'teaspoon', 'teaspoons', 'tablespoon','tablespoons', 'grams', 'litre','litres','milliliter', 'millilitres', 'degree', '°']
//     let lists = [...document.getElementsByTagName('li')]
//     let item = lists.find(el => {
//       // console.log('in find: ', el.innerText)
//       for (let i = 0; i < keyWords.length; i++) {
//           if (el.innerText.includes(keyWords[i])) return true
//       }
//     })
//     console.log('item: ',item.innerText)
//     while (true) {
//         if (item.nodeName !== 'UL' && item.nodeName !== 'OL') item = item.parentElement
//         else break
//     }
    
//     item.scrollIntoView({ behavior: 'smooth', block: 'center'})    
// }

const finder = () => {
    const divs = document.getElementsByTagName('div')
    const lis = document.getElementsByTagName('li')
    const tags = [...lis,...divs]
    for (let tag of tags) {
        const classStr = tag.className
        if (classStr.includes('Ingredient') || classStr.includes('ingredient')) {
            tag.scrollIntoView({ behavior: 'smooth', block: 'center'})
        }
    }
}
finder()
