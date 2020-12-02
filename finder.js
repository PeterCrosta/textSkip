const finder = document.getElementById('find')

finder.onclick = function() {
    console.log('in the on click')
    const keyWords = ['cup', 'cups', 'tsp', 'tbsp', 'teaspoon', 'teaspoons', 'tablespoon','tablespoons', 'gram', 'grams', 'litre','litres','milliliter', 'millilitres']
    let lists = [...document.getElementsByTagName('li')]
    let item = lists.find(el => {
      for (let i = 0; i < keyWords.length; i++) {
          if (el.innerText.includes(keyWords[i])) return true
      }
    })
    while (true) {
        if (item.nodeName !== 'UL') item = item.parentElement
        else break
    }
    
    item.scrollIntoView({ behavior: 'smooth', block: 'center'})    
}
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