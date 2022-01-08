import { View, Text, Image, Swiper, SwiperItem,  } from '@tarojs/components'
import { useState } from 'react'
import { NavBar, Card } from "../../components"
import "./index.scss"



const Recovery = () => {
        const [visableLogo, setVisableLogo] = useState(true)
        const [title, setTitle] = useState('嗨嗨回收')
        const [commitList, setCommitList] = useState([
            "尾号为0140 用户的 iPad 2018 回收了 1180元",
            "尾号为0888 用户的 iPad 2020 回收了 2180元"
        ])

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
                                    08:45:48后结束
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
                        <View className="procedure-info">步骤</View>
                    </View>
                </View>
            </View>
        )
} 

export default Recovery