const finder = document.getElementById('find')


finder.onclick = function() {
    const bodies = document.getElementsByTagName('body')
    console.log('in the right function')
    let body = bodies[0], searching = true;
    console.log('is body? ', body.nodeName)
    const findIngredients = (tag = body) => {
        console.log('in recursion: ', tag.nodeName)
        if (!searching) return
        for (let i = 0; i < tag.children.length; i++) {
            const child = tag.children[i]

        }
    }
    findIngredients()
}


// finder.onclick = function() {
//     console.log('in the on click')
//     const keyWords = ['cup', 'cups', 'tsp', 'tbsp', 'teaspoon', 'teaspoons', 'tablespoon','tablespoons', 'gram', 'grams', 'litre','litres','milliliter', 'millilitres']
//     let lists = [...document.getElementsByTagName('li')]
//     let item = lists.find(el => {
//       for (let i = 0; i < keyWords.length; i++) {
//           if (el.innerText.includes(keyWords[i])) return true
//       }
//     })
//     while (true) {
//         if (item.nodeName !== 'UL') item = item.parentElement
//         else break
//     }
    
//     item.scrollIntoView({ behavior: 'smooth', block: 'center'})    
// }
// const keyWords = ['cup', 'cups', 'tsp', 'tbsp', 'teaspoon', 'teaspoons', 'tablespoon','tablespoons', 'gram', 'grams', 'litre','litres','milliliter', 'millilitres']
// let lists = [...document.getElementsByTagName('li')]
// let item = lists.find(el => {
//   for (let i = 0; i < keyWords.length; i++) {
//       if (el.innerText.includes(keyWords[i])) return true
//   }
// })
// while (true) {
//     if (item.nodeName !== 'UL') item = item.parentElement
//     else break
// }

// item.scrollIntoView({ behavior: 'smooth', block: 'center'})