import HelloWorldButton from './components/hello-world-button/hello-world-button'
import Heading from './components/heading/heading'
import _ from 'lodash'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const helloWorldButton = new HelloWorldButton()

const heading = new Heading()
heading.render( _.upperFirst('hello World') )

helloWorldButton.render()

if (process.env.NODE_ENV === 'production'){
    console.log(`production`)
}else if (process.env.NODE_ENV === 'development'){
    console.log(`development`)
}