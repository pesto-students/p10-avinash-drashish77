const wrap = document.getElementById('wrapper')
const topLeft = document.getElementById('tl')
const topRight = document.getElementById('tr')
const bottomLeft = document.getElementById('bl')
const bottomRight = document.getElementById('br')

//adding classes to all the squares when hover
wrap.addEventListener("mouseover", () => {
    topLeft.classList.add("tl")
    topRight.classList.add("tr")
    bottomLeft.classList.add("bl")
    bottomRight.classList.add("br")
})
//removing classes to all the squares when normal
wrap.addEventListener("mouseout", () => {
    topLeft.classList.remove("tl")
    topRight.classList.remove("tr")
    bottomLeft.classList.remove("bl")
    bottomRight.classList.remove("br")
})