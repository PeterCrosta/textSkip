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
