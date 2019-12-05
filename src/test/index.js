import React, { useState } from './react'


function Counter() {
    let [num, setNum] = useState(0)
    let [name, setName] = useState('rogen')
    return {
        render: () => {
            let el = document.getElementById('root')
            let div = document.createElement('div')
            div.innerText = `${num}, ${name}`
            let btn = document.createElement('button')
            btn.innerText = 'click'
            btn.addEventListener("click", function () {
                setNum(num + 1)
                setName(name + (num + 1))
            })
            div.appendChild(btn)
            el.innerHTML = ''
            el.appendChild(div)
        }
    }
}


React.render(Counter)
