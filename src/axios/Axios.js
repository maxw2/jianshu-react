import Axios from 'axios'
import initMock from '../mock/mock'

initMock()
// index
function axiosIndexBanner() {
    let url = './index/banner'
    return Axios.get(url)
}
function axiosIndexList() {
    let url = './index/list'
    return Axios.get(url)
}
function axiosIndexBorder() {
    let url = './index/border'
    return Axios.get(url)
}
function axiosIndexQrbox() {
    let url = './index/qrbox'
    return Axios.get(url)
}
function axiosIndexAuthor() {
    let url = './index/author'
    return Axios.get(url)
}
//// paragraph
// story
function AxiosParaStory(id) {
    let url = `./paragraph/story/${id}`
    return Axios.get(url)
}
// commmont 
function AxiosParaCommont(id) {
    let url = `./paragraph/commont/${id}`
    return Axios.get(url)
}

//// recommend
// author
function AxiosRecomAuthor(id) {
    let url = `./recommend/author/${id}`
    return Axios.get(url)
}
// write
function AxiosRecomWrite(id){
    let url = `./recommend/write/${id}`
    return Axios.get(url)
}
// commend 
function AxiosRecomComment(id){
    let url = `./recommend/comment/${id}`
    return Axios.get(url)
}



export {
    axiosIndexBanner,
    axiosIndexList,
    axiosIndexBorder,
    axiosIndexQrbox,
    axiosIndexAuthor,
    //
    AxiosParaStory,
    AxiosParaCommont,
    // 
    AxiosRecomAuthor,
    AxiosRecomWrite,
    AxiosRecomComment
}