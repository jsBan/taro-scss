import { View, Text, Image, Swiper, SwiperItem,  } from '@tarojs/components'
import { useState, useEffect } from 'react'
import { NavBar } from "../../components"
import  {formatDate, unix}  from "../../uatils/index"
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
import * as dayjs from 'dayjs'
import duration from "dayjs/plugin/duration"
import "dayjs/locale/zh-cn"

import { recoveryModalData } from "../../mock"

import "./index.scss"



const Recovery = () => {
        dayjs.extend(duration)
        dayjs.locale("zh-cn")
        const [visableLogo, setVisableLogo] = useState(true)
        const [title, setTitle] = useState('')
        const [modalFlag, setModalFlag] = useState(false)
        const [endTime, setEndTime] = useState<any>(10)
        const [commitList, setCommitList] = useState([
            "尾号为0140 用户的 iPad 2018 回收了 1180元",
            "尾号为0888 用户的 iPad 2020 回收了 2180元"
        ])

        const [date, setDate] = useState<any>()

        const hanlerDate = () => {
            const diffTime = dayjs.duration(dayjs() - endTime * 1000  );
            const day = diffTime.days(); //天
            const hours = diffTime.hours(); //小时
            const minutes = diffTime.minutes(); //分钟
            const seconds = diffTime.seconds(); //秒
            setDate(`${hours}:${minutes}:${seconds}`)
        }

        useEffect(() => {
            setInterval(() => {
                setDate(formatDate(dayjs()))
            }, 1000)  
            setTitle('嗨嗨回收')
        }, [])

        /**
         * 查看更多
         */
        const handleManySee = (e) => {
            e.preventDefault()
            setModalFlag(true)
        }
        const handlerClose = () => {
            setModalFlag(false)
        }
        return (
            <View className="recovery">
                <NavBar visableLogo={visableLogo} title={title} />
                <View className="line"></View>
                <View className="recovery-warpper">
                    <View className="recovery-card">
                        <View className="left-card">
                            <View className="title">嗨嗨官方回收</View>
                            <View className="desc">官方验机/<Text className="desc-text">加价5%</Text></View>
                            <View className="image">
                                <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                            </View>
                        </View>
                        <View className="right-card">
                            <View className="desc">
                                超过<Text>1012155</Text>用户的信任
                            </View>
                            <View className="image">
                            <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                            </View>
                        </View>
                    </View>
                    {/* 回收区域 */}
                    <View className="arrondi">
                        <View className="arrondi-title">
                            本机回收
                        </View>
                        <View className="arrondi-info">
                            <View className="arrondi-left">
                                <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                            </View>
                            <View className="arrondi-center">
                                <View className="arrondi-center-top">
                                    本机 | iPhone xs max
                                </View>
                                <View className="arrondi-center-desc">
                                    昨日最高回收价3300
                                </View>
                                <View className="arrondi-center-desc">
                                    预计明日跌165
                                </View>
                                <View className="arrondi-center-price">
                                    <Text className="mark">￥</Text>
                                    <Text className="price">3300</Text>
                                    <Text className="vendibility"> 可卖</Text>
                                </View>
                            </View>
                            <View className="arrondi-right">
                                <Text>旧机换钱</Text>
                            </View>
                        </View>
                        <View className="arrondi-welfare">
                                <View className="arrondi-center-left">
                                    加价红包活动
                                </View>
                                <View className="arrondi-center-right">
                                    {date}后结束
                                </View>
                        </View>
                        <View className="arrondi-airing">
                            <Swiper className='swiper-container'
                              circular
                              indicatorDots={false}
                              indicatorColor='#999'
                              indicatorActiveColor='#bf708f'
                              autoplay
                              duration={1000}
                              interval={1000}
                            >
                                {
                                    commitList && commitList.map((item, index) => (
                                        <SwiperItem key={index}>
                                            <Text>{item}</Text>
                                        </SwiperItem>
                                    ))
                                }
                            </Swiper>
                        </View>
                    </View>
                    {/* 回收流程 */}
                    <View className="procedure">
                        <View className="procedure-title">回收流程</View>
                        <View className="procedure-info">
                            <View className="procedure-item">
                                <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                                <Text>免费评估</Text>
                            </View>
                            <View className="procedure-item">
                                <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                                <Text>邮寄回收</Text>
                            </View>
                            <View className="procedure-item">
                            <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                                <Text>专业质检</Text>
                            </View>
                            <View className="procedure-item">
                            <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                                <Text>快速打款</Text>
                            </View>
                        </View>
                    </View>
                    {/* 历史成交 */}
                    <View className="deal ">
                        <View className="deal-title">
                            <View className="deal-title-left">历史成交</View>
                            <View className="deal-title-right" onClick={(e) =>handleManySee(e)}>查看更多<Text className='at-icon at-icon-chevron-right'></Text></View>
                        </View>
                        <View className="deal-info">
                            <View className="deal-info-item">
                                <View className="deal-info-item-top">
                                        <View className="item-top-left">用户183****8384</View>
                                        <View className="item-top-right">2022-1-6</View>
                                </View>
                                <View className="deal-info-item-bottom">
                                    <View className="item-bottom-left">卖出红米note9 Pro，赚了 <Text>1120.00</Text></View>
                                    <View className="item-bottom-right">多卖 <Text>58.00</Text>元</View>
                                </View>
                            </View>
                            <View className="deal-info-item">
                                <View className="deal-info-item-top">
                                        <View className="item-top-left">用户183****8384</View>
                                        <View className="item-top-right">2022-1-6</View>
                                </View>
                                <View className="deal-info-item-bottom">
                                    <View className="item-bottom-left">卖出红米note9 Pro，赚了 <Text>1120.00</Text></View>
                                    <View className="item-bottom-right">多卖 <Text>58.00</Text>元</View>
                                </View>
                            </View>
                          
                        </View>
                    </View>
                    {/* 平台保障 */}
                    <View className="guarantee ">
                        <View className="guarantee-title">平台保障</View>
                    </View>
                </View>
                <View className="footer">
                    <AtActionSheet isOpened={modalFlag} onClose={handlerClose}>
                        <AtActionSheetItem>
                           <View>
                               {
                                   recoveryModalData && recoveryModalData.map((item, index) => (
                                    <View className="modal-deal-info-item" key={index}>
                                            <View className="modal-deal-info-item-top">
                                                    <View className="modal-item-top-left">用户{item.tel}</View>
                                                    <View className="modal-item-top-right">{item.time}</View>
                                            </View>
                                            <View className="modal-deal-info-item-bottom">
                                                <View className="modal-item-bottom-left">卖出{item.model}，赚了 <Text>{Number(item.price).toFixed(2)}</Text></View>
                                                <View className="modal-item-bottom-right">多卖 <Text>{Number(item.sell_price).toFixed(2)}</Text>元</View>
                                            </View>
                                        </View>
                                   ))
                               }
                           </View>
                        </AtActionSheetItem>
                    </AtActionSheet>
                </View>
            </View>
        )
} 

export default Recovery