import author_1 from './images/author-1.webp'
import write_1 from './images/recommend-write.jpg'
import list_1 from './images/list-1.jpg'

//
const author = {
    url: './recommend/author/1',
    res: {
        data: {
            id: 1,
            name: '小托夫',
            image: author_1,
            follow: 55,
            fans: 145436,
            like: 1345
        }
    }
}

// 文章
const recommendWrite = {
    url: './recommend/write/1',
    res: {
        data: [{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '《少年的你》：用一支黑色的铅笔，共画一个沉默乐园',
            content: '文章首发 公众号 空镜solo 看完《少年的你》，想到Eason《不要说话》里的几句歌词：“愿意 用一支黑色的铅笔/画一出沉默舞台剧/灯光再亮也...',
            image: write_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '《少年的你》：用一支黑色的铅笔，共画一个沉默乐园',
            content: '文章首发 公众号 空镜solo 看完《少年的你》，想到Eason《不要说话》里的几句歌词：“愿意 用一支黑色的铅笔/画一出沉默舞台剧/灯光再亮也...',
            image: write_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '《少年的你》：用一支黑色的铅笔，共画一个沉默乐园',
            content: '文章首发 公众号 空镜solo 看完《少年的你》，想到Eason《不要说话》里的几句歌词：“愿意 用一支黑色的铅笔/画一出沉默舞台剧/灯光再亮也...',
            image: write_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '《少年的你》：用一支黑色的铅笔，共画一个沉默乐园',
            content: '文章首发 公众号 空镜solo 看完《少年的你》，想到Eason《不要说话》里的几句歌词：“愿意 用一支黑色的铅笔/画一出沉默舞台剧/灯光再亮也...',
            image: write_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '《少年的你》：用一支黑色的铅笔，共画一个沉默乐园',
            content: '文章首发 公众号 空镜solo 看完《少年的你》，想到Eason《不要说话》里的几句歌词：“愿意 用一支黑色的铅笔/画一出沉默舞台剧/灯光再亮也...',
            image: write_1
        },]
    }

}
// 最新评论
const latestComments = {
    url: './recommend/comment/1',
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
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        },{
            id: 9718312,
            author: '张凝澈',
            start: 18.9,
            comment: 10,
            like: 63,
            title: '在汽车销售供应链中，取消 4S 店是好还是坏？',
            content: '大家都知道，目前仅有的几个直营品牌，比如蔚来、特斯拉，是区别于 4S 店的另一种行为，他们称之为体验店，而接待客户的工作人员不再称之为销售顾问，而是“产品专家”、“产品经理”等头衔。',
            image: list_1
        },]
    }
}

// 热门
const recommendHot = {
    url: './recommend/hot/1',
    res: {
        data: [{

        }]
    }
}

const recommend = [recommendWrite, latestComments, recommendHot, author]
export { recommend }