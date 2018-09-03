import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'
import addImage from './add-image'

addImage()

const helloWorldButton = new HelloWorldButton()
const heading = new Heading()

heading.render()
helloWorldButton.render()
