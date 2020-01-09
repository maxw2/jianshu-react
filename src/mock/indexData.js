import banner_1 from './images/banner-1.png'
import banner_2 from './images/banner-2.png'
import banner_3 from './images/banner-3.png'
import banner_4 from './images/banner-4.jpg'
import list_1 from './images/list-1.jpg'
import border_1 from './images/border-1.png'
import border_2 from './images/border-2.png'
import border_3 from './images/border-3.png'
import border_4 from './images/border-4.png'
import qrbox_ from './images/qrbox.png'
import author_1 from './images/author-1.webp'
import author_2 from './images/author-2.webp'
import author_3 from './images/author-3.webp'


const banner = {
    url: './index/banner',
    res: {
        data: [
            {
                id: 1,
                url: banner_1
            },
            {
                id: 2,
                url: banner_2
            },
            {
                id: 3,
                url: banner_3
            },
            {
                id: 4,
                url: banner_4
            },
        ]
    }
}
const list = {
    url: './index/list',
    res: {
        data: [{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        }, {
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        }, {
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        }, {
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        }, {
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        }]
    }
}
const border = {
    url: './index/border',
    res: {
        data: [border_1, border_2, border_3, border_4]
    }
}
const qrbox = {
    url: './index/qrbox',
    res: {
        data: [qrbox_]
    }
}
const author = {
    url: './index/author',
    res: {
        data: [{
            id:1,
            image:author_1,
            name: '小托夫',
            number: '296.8k',
            like: '1.5k'
        },{
            id:2,
            image:author_2,
            name: 'Hobbit霍比特人',
            number: '242.6k',
            like: '1.1k'
        },{
            id:3,
            image:author_3,
            name: '灰土豆',
            number: '341.3k',
            like: '1.9k'
        },{
            id:1,
            image:author_1,
            name: '小托夫',
            number: '296.8k',
            like: '1.5k'
        },{
            id:2,
            image:author_2,
            name: 'Hobbit霍比特人',
            number: '242.6k',
            like: '1.1k'
        },{
            id:3,
            image:author_3,
            name: '灰土豆',
            number: '341.3k',
            like: '1.9k'
        }]
    }
}

const indexData = [banner, list, border, qrbox, author]

export {
    indexData
}