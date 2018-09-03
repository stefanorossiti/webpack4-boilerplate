import Heading from './components/heading/heading'
import KiwiImage from './components/kiwi-image/kiwi-image'
import _ from 'lodash'

const heading = new Heading()
const kiwiImage = new KiwiImage()

heading.render(_.upperFirst('hello Kiwi'))
kiwiImage.render()

