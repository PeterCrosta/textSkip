// alert("Hello from your Chrome extension!")

const finder = () => {
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
finder()

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM event listener added')
//   const button = document.getElementById('find')
//   button.addEventListener('click', finder)  
// })

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };