import './hello-world-button.css'

class HelloWorldButton{
    render(){
        const button = document.createElement('button')
        button.innerHTML = 'Hello World'
        button.classList.add('hello-world-button')

        const body = document.querySelector('body')

        button.onclick = () => {
            const p = document.createElement('p')
            p.innerHTML = 'Hello p'
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }

        body.appendChild(button)
    }
}

export default HelloWorldButton