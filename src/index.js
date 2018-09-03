import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'
import addImage from './add-image'

addImage()

const helloWorldButton = new HelloWorldButton()

const heading = new Heading()
heading.render()

const heading2 = new Heading()
heading2.render()

const heading3 = new Heading()
heading3.render()

helloWorldButton.render()

if (process.env.NODE_ENV === 'production'){
    console.log(`production`)
}else if (process.env.NODE_ENV === 'development'){
    console.log(`development`)
}