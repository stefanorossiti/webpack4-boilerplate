import kiwi from './kiwi.jpg'
import './kiwi-image.scss'

class KiwiImage {
    render(){
        const img = document.createElement('img')

        img.src = kiwi
        img.classList.add('kiwi-image')

        const body = document.querySelector('body')
        body.appendChild(img)

        console.log(body)
    }
}

export default KiwiImage