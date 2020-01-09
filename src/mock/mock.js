import Mock from 'crash-mock'
import { indexData } from './indexData'
import { paraData } from './paraData'
import { recommend } from './RecomData'

function initMock() {
    let data = [].concat(indexData, paraData, recommend)
    return new Mock({
        mode: 'ajax',
        response: data
    })
}

export default initMock