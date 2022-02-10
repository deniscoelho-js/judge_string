import prompt from 'prompt-sync'

const readline = prompt()

let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
let text2 = text.split('')

text2.map((item, index)=>
 console.log(item.charCodeAt(0) + 3)
)
