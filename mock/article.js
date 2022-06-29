const Mock = require('mockjs')


const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

const List = [
    {
        "id": "1",
        "timestamp": "2022-05-11",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "waiting_pay",
            "title": "Ожидается оплата"
        },
        "pay": {
            "total": 450,
            "part": 300,
            "currency": "USD"
        },
        "shipment": 30,
        "messages": 0,
        'changes':
        {
            link: 'http://www.example.ru',
            title_link: 'Изменение статуса заказа'
        }

    },
    {
        "id": "2",
        "timestamp": "2022-05-09",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "waiting_pay",
            "title": "Ожидается оплата"
        },
        "pay": {
            "total": 1352,
            "part": 800,
            "currency": "USD"
        },
        "shipment": 75,
        "messages": 6
    },
    {
        "id": "3",
        "timestamp": "2022-05-07",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "agreement",
            "title": "ожидается согласование"
        },
        "pay": {
            "total": 342,
            "part": 342,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 3,
        'changes':
        {
            link: 'http://www.example.ru',
            title_link: 'Прочитать сообщение от менеджера'
        }

    },
    {
        "id": "4",
        "timestamp": "2022-04-22",
        "content": baseContent,
        "importance": "1",
        "type": "Ready",
        "status": {
            "type": "ready",
            "title": "готов к отгрузке"
        },
        "pay": {
            "total": 11765,
            "part": 11765,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 0
    },
    {
        "id": "5",
        "timestamp": "2022-04-15",
        "content": baseContent,
        "importance": "1",
        "type": "Ready",
        "status": {
            "type": "process",
            "title": "в процессе отгрузки"
        },
        "pay": {
            "total": 2430,
            "part": 2430,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 5,
        'changes':
        {
            link: 'http://www.example.ru',
            title_link: 'Прочитать сообщение'
        }
    },
    {
        "id": "6",
        "timestamp": "2022-04-11",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 304,
            "part": 304,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 7,
        changes:
        {
            'link': 'http://www.example.ru',
            'title_link': 'Прочитать сообщение'
        }
        ,
    },
    {
        "id": "7",
        "timestamp": "2022-06-12",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "agreement",
            "title": "ожидается согласование"
        },
        "pay": {
            "total": 1242,
            "part": 1000,
            "currency": "USD"
        },
        "shipment": 23,
        "messages": 2
    },
    {
        "id": "8",
        "timestamp": "2022-03-25",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "process",
            "title": "в процессе отгрузки"
        },
        "pay": {
            "total": 312,
            "part": 122,
            "currency": "USD"
        },
        "shipment": 34,
        "messages": 2
    },
    {
        "id": "9",
        "timestamp": "2022-11-11",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "process",
            "title": "в процессе отгрузки"
        },
        "pay": {
            "total": 1232,
            "part": 321,
            "currency": "USD"
        },
        "shipment": 42,
        "messages": 5
    },
    {
        "id": "10",
        "timestamp": "2022-05-03",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "waiting_pay",
            "title": "Ожидается оплата"
        },
        "pay": {
            "total": 512,
            "part": 63,
            "currency": "USD"
        },
        "shipment": 84,
        "messages": 1
    },
    {
        "id": "11",
        "timestamp": "2022-12-30",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 6654,
            "part": 1123,
            "currency": "USD"
        },
        "shipment": 65,
        "messages": 2
    },
    {
        "id": "12",
        "timestamp": "2022-10-08",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 732,
            "part": 623,
            "currency": "USD"
        },
        "shipment": 11,
        "messages": 0
    },
    {
        "id": "13",
        "timestamp": "2022-04-02",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "waiting_pay",
            "title": "Ожидается оплата"
        },
        "pay": {
            "total": 576,
            "part": 389,
            "currency": "USD"
        },
        "shipment": 51,
        "messages": 0
    },
    {
        "id": "14",
        "timestamp": "2022-04-25",
        "content": baseContent,
        "importance": "1",
        "type": "Ready",
        "status": {
            "type": "process",
            "title": "в процессе отгрузки"
        },
        "pay": {
            "total": 5197,
            "part": 841,
            "currency": "USD"
        },
        "shipment": 70,
        "messages": 2
    },
    {
        "id": "15",
        "timestamp": "2022-12-22",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 840,
            "part": 550,
            "currency": "USD"
        },
        "shipment": 12,
        "messages": 0
    },
    {
        "id": "16",
        "timestamp": "2022-07-24",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "agreement",
            "title": "ожидается согласование"
        },
        "pay": {
            "total": 900,
            "part": 400,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 0
    },
    {
        "id": "17",
        "timestamp": "2022-09-12",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 790,
            "part": 790,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 5
    },
    {
        "id": "18",
        "timestamp": "2022-05-11",
        "content": baseContent,
        "importance": "1",
        "type": "Ready",
        "status": {
            "type": "process",
            "title": "в процессе отгрузки"
        },
        "pay": {
            "total": 351,
            "part": 100,
            "currency": "USD"
        },
        "shipment": 30,
        "messages": 1
    },
    {
        "id": "19",
        "timestamp": "2022-10-21",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "agreement",
            "title": "ожидается согласование"
        },
        "pay": {
            "total": 5001,
            "part": 200,
            "currency": "USD"
        },
        "shipment": 10,
        "messages": 2
    },
    {
        "id": "20",
        "timestamp": "2022-04-15",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 1000,
            "part": 1000,
            "currency": "USD"
        },
        "shipment": 50,
        "messages": 0
    },
    {
        "id": "21",
        "timestamp": "2022-07-25",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "waiting_pay",
            "title": "Ожидается оплата"
        },
        "pay": {
            "total": 8601,
            "part": 4752,
            "currency": "USD"
        },
        "shipment": 52,
        "messages": 1
    },
    {
        "id": "22",
        "timestamp": "2022-01-01",
        "content": baseContent,
        "importance": "1",
        "type": "Close",
        "status": {
            "type": "close",
            "title": "закрыт"
        },
        "pay": {
            "total": 3024,
            "part": 1512,
            "currency": "USD"
        },
        "shipment": 54,
        "messages": 4
    },
    {
        "id": "23",
        "timestamp": "2022-08-01",
        "content": baseContent,
        "importance": "1",
        "type": "Ready",
        "status": {
            "type": "process",
            "title": "в процессе отгрузки"
        },
        "pay": {
            "total": 4080,
            "part": 112,
            "currency": "USD"
        },
        "shipment": 97,
        "messages": 0
    },
    {
        "id": "24",
        "timestamp": "2022-09-02",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "waiting_pay",
            "title": "Ожидается оплата"
        },
        "pay": {
            "total": 5024,
            "part": 300,
            "currency": "USD"
        },
        "shipment": 75,
        "messages": 3
    },
    {
        "id": "25",
        "timestamp": "2022-01-20",
        "content": baseContent,
        "importance": "1",
        "type": "Waiting",
        "status": {
            "type": "agreement",
            "title": "ожидается согласование"
        },
        "pay": {
            "total": 5000,
            "part": 5000,
            "currency": "USD"
        },
        "shipment": 100,
        "messages": 24
    }
]


// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     id: '@increment',
//     timestamp: +Mock.Random.date('T'),
//     author: '@first',
//     reviewer: '@first',
//     title: '@title(5, 10)',
//     content_short: 'mock data',
//     content: baseContent,
//     forecast: '@float(0, 100, 2, 2)',
//     importance: '@integer(1, 3)',
//     'type|1': ['All', 'Actions', 'Waiting', 'Ready'],
//     'status|1': ['published', 'draft'],
//     display_time: '@datetime',
//     comment_disabled: true,
//     pageviews: '@integer(300, 5000)',
//     image_uri,
//     platforms: ['a-platform'],
//     'total': '@float(0, 2000, 0, 0)',
//     'changes': [
//       {
//         'link': 'http://www.example.ru',
//         'title_link': 'Прочитать сообщение'
//       }
//     ],
//   }))
// }



module.exports = [
    {
        url: '/vue-element-admin/article/list',
        type: 'get',
        response: config => {
            const { importance, type, title, page = 1, limit = 20, sort } = config.query


            let mockList = List.filter(item => {
                if (importance && item.importance !== +importance) return false
                if (type && item.type !== type && type !== 'All') return false
                if (title && item.title.indexOf(title) < 0) return false
                return true
            })

            if (sort === '-id') {
                mockList = mockList.reverse()
            }

            const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

            return {
                code: 20000,
                data: {
                    total: mockList.length,
                    items: pageList
                }
            }
        }
    },

    {
        url: '/vue-element-admin/article/detail',
        type: 'get',
        response: config => {
            const { id } = config.query
            for (const article of List) {
                if (article.id === +id) {
                    return {
                        code: 20000,
                        data: article
                    }
                }
            }
        }
    },

    {
        url: '/vue-element-admin/article/pv',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: {
                    pvData: [
                        { key: 'PC', pv: 1024 },
                        { key: 'mobile', pv: 1024 },
                        { key: 'ios', pv: 1024 },
                        { key: 'android', pv: 1024 }
                    ]
                }
            }
        }
    },

    {
        url: '/vue-element-admin/article/create',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    },

    {
        url: '/vue-element-admin/article/update',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]

