/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-shadow */
import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text,  } from "@tarojs/components"
import { NavBar, Card } from "../../components"
import { AtRate, AtTabs, AtTabsPane, AtToast, AtMessage  } from 'taro-ui'

import "./index.scss"
import { useState, useEffect } from 'react'

const Index = () => {
    const [star, setStar] = useState<any>()
    // 轮播图
    const [list, setList] = useState([
        'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
        'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
        'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
    ])
    // 导航区域
    const [nav, setNav] = useState(
        [
            {
            url: require("../../access/images/IPHONE.png"),
            name: "iPhone",
           },
           {
             url: require("../../access/images/anzhuo.png"),
             name: "安卓手机",
           },
           {
             url: require("../../access/images/pingban.png"),
             name: "平板电脑",
           },
           {
             url: require("../../access/images/diannao.png"),
             name: "电脑",
           },
           {
             url: require("../../access/images/erji.png"),
             name: "配件",
           },
           {
             url: require("../../access/images/money.png"),
             name: "捡漏专区",
           },
           {
             url: require("../../access/images/quan.png"),
             name: "抢优惠券",
           },
           {
             url: require("../../access/images/new.png"),
             name: "新品推荐",
           },
       ]
    )
    // 评论区域
    const [comment, setComment] = useState(
        [
            {
                logo: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                user_name: 'Down',
                commemt_desc: '外观很新,手机很好,手机成色很新,像素不错,像素不错,没有刮痕,性能好,屏幕清晰,正品,客服态度很好,好用,拍照超级好看等等',
                commemt_images: [
                 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
                 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
                ],
                specs: {
                    color: '银色',
                    condition: '99新',
                    model:'苹果X',
                    size: '5.8寸',
                    face: '有面容',
                    ram: '256G'
                },
                star: 3
            },
            {
                logo: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                user_name: '小红',
                commemt_desc: '外观很新,手机很好,手机成色很新,像素不错,像素不错,没有刮痕,性能好,屏幕清晰,正品,客服态度很好,好用,拍照超级好看等等',
                commemt_images: [
                 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
                 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
                 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
                ],
                specs: {
                    color: '红色',
                    condition: '99新',
                    model:'苹果X',
                    size: '5.8寸',
                    face: '有指纹',
                    ram: '256G'
                },
                star: 5
            },
        ]
    )

    // 专区
    const [current, setCurrent] = useState(0)
    const [tabList, setTabList] = useState( [{ title: '热销畅卖' }, { title: '捡漏专区' }])
    const [card1, setCard1] = useState([
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone X-99新',
            price: '1830',
            num:'49203'
        },
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone Xs-99新',
            price: '1830',
            num:'49203'
        },
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone Xs-99新',
            price: '1830',
            num:'49203'
        },
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone Xs-99新',
            price: '1830',
            num:'49203'
        },
    ])
    const [card2, setCard2] = useState([
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone X-99新',
            price: '999',
            num:'1234'
        },
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone Xs-99新',
            price: '999',
            num:'568'
        },
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone Xs-99新',
            price: '999',
            num:'49203'
        },
        {
            image: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg',
            name: 'Iphone Xs-99新',
            price: '999',
            num:'49203'
        },
    ])


    const handleClick = (value) => {
        setCurrent(value)
        // this.setState({
        //   current: value
        // })
      }








    // const getIndexData = () =>  {
    // }
    // useEffect(() => {
    //     getIndexData()
    // },[])
   

    const handleChange = (val, idx) => {
        comment.forEach((item, index) => {
            if(index == idx) {
                item.star = val
            }
        })
        setStar(val)
    }
    const handleNavClick = (index) => {
        console.log(index);
        switch (index) {
            case 0:
                Taro.atMessage({
                    'message': 'iPhone页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 1:
                Taro.atMessage({
                    'message': '安卓手机页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 2:
                Taro.atMessage({
                    'message': '平板电脑页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 3:
                Taro.atMessage({
                    'message': '电脑页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 4:
                Taro.atMessage({
                    'message': '配件页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 5:
                Taro.atMessage({
                    'message': '捡漏页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 6:
                Taro.atMessage({
                    'message': '抢优惠券页面未开放！',
                    'type': 'warning',
                  })
                break;
            case 7:
                Taro.atMessage({
                    'message': '新品推荐页面未开放！',
                    'type': 'warning',
                  })
                break;
        
            default:
                break;
        }
        
    }

    return (
        <View className='wrapper'>
            <AtMessage /> 
            <NavBar />
            <View className='default'></View>
            {/* 轮播图 */}
            <View className='banner'>
                <Swiper
                  className='swiper-container'
                  circular
                  indicatorDots
                  indicatorColor='#999'
                  indicatorActiveColor='#bf708f'
                  autoplay
                >
                    {
                        list && list.map((item, index) => (
                            <SwiperItem key={index}>
                               <View className='images'>
                                    <Image className='swiper-img' src={item} mode='widthFix'></Image>
                               </View>
                            </SwiperItem>
                        ))
                    }
                </Swiper>
            </View>
            {/* nav导航模块 */}
            <View className='nav'> 
            {
                nav && nav.map((item, index) => (
                    <View key={index} className='nav-info' onClick={() => handleNavClick(index)}>
                        <View className='nav-image'>
                            <Image src={item.url}></Image>
                            <View className='desc'>{item.name}</View>
                        </View>
                    </View>
                ))
            }
            </View>
            {/* block 模块*/}
            <View className='block'>
                <View className='block-left'>
                    <View className='left-title'>正品回收.更快.更高价</View>
                    <View className='left-bottom'>
                        <View className='bottom-left'>
                            <View><Text className='at-icon at-icon-check-circle'></Text>高价回收 加价收</View>
                            <View><Text className='at-icon at-icon-check-circle'></Text>顺丰上门 安全私密</View>
                            <View><Text className='at-icon at-icon-check-circle'></Text>专业质检 不卖秒退</View>
                            <View className='go'>
                                立即前往<Text className='at-icon at-icon-chevron-right'></Text>
                            </View>
                        </View>
                        <View className='bottom-right'>
                            <Image src={nav[0].url}></Image>
                        </View>
                    </View>
                </View>
                <View className='block-right'>
                    <View className='right-title'>本机回收</View>
                    <View className='right-center'>还可以领取5%的红包</View>
                    <View className='right-bottom'>
                        <View className='bottom-left'>
                            <Image src={nav[0].url}></Image>
                        </View>
                        <View className='bottom-right'>
                            <View>本机iPhone xs max</View>
                            <View className='senced'><Text className='mark'>￥</Text><Text className='money'>3300</Text></View>
                            <View>有550选择卖出</View>
                        </View>
                    </View>
                </View>
            </View>
            {/* 评论模块 */}
            <View className='comment'>
                <View className='comment-desc'>
                    <View className='desc-left'>
                        已有<Text>1954617</Text>名用户选购
                    </View>
                    <View className='desc-right'>
                        看看大家怎么说 <Text className='at-icon at-icon-chevron-right'></Text>
                    </View>
                </View>
                <View className='comment-swiper'>
                    <Swiper
                      className='swiper-container'
                      circular
                      indicatorColor='#999'
                      indicatorActiveColor='#bf708f'
                      autoplay
                    >
                        {
                        comment && comment.map((item, index) => (
                                <SwiperItem key={index}>
                                    <View className='comment-top'>
                                        <View className='user-logo'>
                                            <Image src={item.logo}></Image>
                                        </View>
                                        <View className='comment-info'>
                                            <View className='comment-name'>
                                                {item.user_name}
                                            </View>
                                            <View className='comment-desc'>
                                                <Text className='desc'>{item.commemt_desc}</Text> <Text className='at-icon at-icon-chevron-down'></Text>
                                            </View>
                                            <View className='comment-images' >
                                            {
                                                item.commemt_images.map((url, idx) => (
                                                        <Image key={idx} src={url} />
                                                ))
                                            }
                                            </View>
                                        </View>
                                    </View>
                                    <View className='comment-bottom'>
                                        <View className='tel-info'>
                                            {item.specs.color}{item.specs.condition} {item.specs.model}（{item.specs.size}）{item.specs.face} {item.specs.ram}
                                        </View>
                                        <View className='tel-star'>
                                            <AtRate
                                              value={item.star}
                                              size='15'
                                              onChange={(e) => handleChange(e, index)}
                                            />
                                        </View>
                                    </View>
                                </SwiperItem>
                            ))
                        }
                    </Swiper>
                </View>
            </View>
            <View>
            </View>
            {/* 专区 */}
            <View className="region-desc">官方直营 | 只做原装正品二手机</View>
            <View className='region'>
                <AtTabs current={current} tabList={tabList} onClick={handleClick.bind(this)} swipeable>
                    <AtTabsPane current={current} index={0} >
                        <View>
                            <Card card={card1} />
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1}>
                        <View>
                            <Card card={card2} />
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        </View>
    )
}

export default Index