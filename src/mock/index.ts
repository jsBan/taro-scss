// 历史成交
const recoveryModalData = [
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone x',
        price: '1129',
        sell_price:'129'
    },
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone xs',
        price: '1129',
        sell_price:'129'
    },
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone 12Pro',
        price: '7129',
        sell_price:'349'
    },
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone 13',
        price: '4129',
        sell_price:'239'
    },
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone 13',
        price: '4129',
        sell_price:'239'
    },
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone 13',
        price: '4129',
        sell_price:'239'
    },
    {
        tel:'183*****8384',
        time: '2022-01-06',
        model: 'iPhone 13',
        price: '4129',
        sell_price:'239'
    },
]

// 平台保障
const guaranteeData = [
    {
        title: '寄出快递包邮吗？',
        desc: '预约顺丰上门取件的，不需要您支付快递费用的哈',
        open: false
    },
    {
        title: '寄出之前的准备？',
        desc: '请做好数据备份，清除开机密码并退出所有账号，恢复出厂设置',
        open: false
    },
    {
        title: '实际价格跟估价会相差吗？',
        desc: '实际回收价由检测中心检测后给出，如果您估价都是按照实际情况来选的，预估价和实际价格才会基本一致的。',
        open: false
    },
    {
        title: '验机后价格不满意怎么办？',
        desc: '我们会根据实际的专业检测情况给出回收价格，如果您对出价不满意可以选择退回的，运费由您这边承担的哦。',
        open: false
    },
    {
        title: '验机需要多长时间？',
        desc: '5点前收到寄过来的机子，一般当天可以检测完，5点后的要次日才出报告。',
        open: false
    },
    {
        title: '成功回收之后，钱会打到哪里，多久之后可以到账？',
        desc: '您这边确认要回收之后，1个工作日后打款到微信账户。',
        open: false
    },
]

// 购物车

const cardData = [
    {
        checkFlag: true,
        image: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        title: 'iPhone11 ProMax 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '4799.00',
        id: 1,
        count: 1,
        num:0
    },
    {
        checkFlag: true,
        image: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        title: 'iPhone11 ProMax 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '4799.00',
        id: 2,
        count:1,
        num:0
    },
]

// 专区数据
/**iPhone */
const iPhoneData = [
    {
        image: 'https://img1.baidu.com/it/u=1185154186,185123523&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        title: 'iPhone11 Pro 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '2099.00',
        sold: '16999',
        supply:'190.52',
        id: 1,
    },
    {
        image: 'https://img0.baidu.com/it/u=1141637929,879804606&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
        title: 'iPhone11 ProMax 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '2199.00',
        sold: '14999',
        supply:'190.52',
        id: 2,
    },
    {
        image: 'https://img0.baidu.com/it/u=364025746,3258265225&fm=253&fmt=auto&app=120&f=JPEG?w=1060&h=500',
        title: 'iPhone12 Pro 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '3299.00',
        sold: '15999',
        supply:'190.52',
        id: 3,
    },
    {
        image: 'https://img1.baidu.com/it/u=3460960192,2189882605&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667',
        title: 'iPhone12 ProMax 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '2399.00',
        sold: '17999',
        supply:'190.52',
        id: 4,
    },
    {
        image: 'https://img1.baidu.com/it/u=2848109571,3312675737&fm=26&fmt=auto',
        title: 'iPhone13 ProMax 9-99新 国行 银色256G 95新 套餐一：嗨嗨标配（精品手机）',
        desc: '银色 256G 95新 套餐一：嗨嗨标配 （精品手机）',
        price: '3499.00',
        sold: '1299',
        supply:'190.52',
        id: 5,
    },
]
/**安卓 */

const AnZhuoData = [
    {
        image: 'https://img0.baidu.com/it/u=1017688231,2942733330&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=277',
        title: '红米Note8 Pro 9-99新',
        price: '890.00',
        sold: '2356',
        supply:'190.52',
        id: 1,
    },
    {
        image: 'https://img1.baidu.com/it/u=953931135,2652515962&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        title: '红米Note8 9-99新',
        price: '699.00',
        sold: '1345',
        supply:'190.52',
        id: 2,
    },
    {
        image: 'https://img1.baidu.com/it/u=592063751,3835863452&fm=253&fmt=auto&app=138&f=JPEG?w=646&h=500',
        title: '红米K20 9-99新',
        price: '3299.00',
        sold: '929',
        supply:'190.52',
        id: 3,
    },
    {
        image: 'https://img1.baidu.com/it/u=592063751,3835863452&fm=253&fmt=auto&app=138&f=JPEG?w=646&h=500',
        title: '红米K20Pro 9-99新',
        price: '1119.00',
        sold: '1235',
        supply:'190.52',
        id: 4,
    },
]

/**平板电脑 */
const iPadData = [
    {
        image: 'https://img2.baidu.com/it/u=4135461568,2981654199&fm=253&fmt=auto&app=138&f=JPEG?w=250&h=250',
        title: '【全新】iPad mini 6',
        price: '3799.00',
        sold: '3651',
        supply:'358.52',
        id: 1,
    },
    {
        image: 'https://img1.baidu.com/it/u=1679353074,4151763581&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        title: '9-99新 苹果 iPad 2018款学习机',
        price: '1949.00',
        sold: '1452',
        supply:'190.52',
        id: 2,
    },
    {
        image: 'https://img2.baidu.com/it/u=1986791057,2812178046&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        title: '9-99新 2019年iPad 10.2英寸',
        price: '2299.00',
        sold: '929',
        supply:'217.52',
        id: 3,
    },
    {
        image: 'https://img2.baidu.com/it/u=1986791057,2812178046&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        title: '9-99新 小米平板4.80英寸',
        price: '760.00',
        sold: '1235',
        supply:'71.52',
        id: 4,
    },
    {
        image: 'https://img2.baidu.com/it/u=1986791057,2812178046&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        title: '9-99新 小米平板4.80英寸',
        price: '760.00',
        sold: '1235',
        supply:'71.52',
        id: 4,
    },
]


export {
    recoveryModalData,
    guaranteeData,
    cardData,
    iPhoneData,
    AnZhuoData,
    iPadData
}