const finder = () => {
    const keyWords = ['cup', 'cups', 'tsp', 'tbsp', 'teaspoon', 'teaspoons', 'tablespoon','tablespoons', 'grams', 'litre','litres','milliliter', 'millilitres', 'degree', '°']
    let lists = [...document.getElementsByTagName('li')]
    let item = lists.find(el => {
      // console.log('in find: ', el.innerText)
      for (let i = 0; i < keyWords.length; i++) {
          if (el.innerText.includes(keyWords[i])) return true
      }
    })
    console.log('item: ',item.innerText)
    while (true) {
        if (item.nodeName !== 'UL' && item.nodeName !== 'OL') item = item.parentElement
        else break
    }
    
    item.scrollIntoView({ behavior: 'smooth', block: 'center'})    
}
finder()
