import Taro from '@tarojs/taro'
import { View, Image, Text } from "@tarojs/components"
import "./index.scss"
import { useEffect, useState } from 'react'


export default function Card(props) {

    const [cardList, setCardList] = useState(props.card)

    useEffect(() => {
        console.log(cardList);
        
    })

    return (
        <View className='card'>
            <View className="card-left">
            {
                cardList && cardList.map((item, index) => (
                    <View key={index} className="card-item" >
                        <View className="image">
                            <Image src={item.image}></Image>
                        </View>
                        <View className="title">
                            {item.name}
                        </View>
                        <View className="desc">
                           官方直营 | 品质保障
                        </View>
                        <View className="welfare">
                            折扣满减
                        </View>
                        <View className="bottom">
                            <View className="price">
                                ￥{item.price}
                            </View>
                            <View className="num">
                                {item.num}件已售
                            </View>
                        </View>
                    </View>
                ))
            }
            </View>
            <View className="card-right">
            {
                cardList && cardList.map((item, index) => (
                    <View key={index} className="card-item" >
                    <View className="image">
                        <Image src={item.image}></Image>
                    </View>
                    <View className="title">
                        {item.name}
                    </View>
                    <View className="desc">
                       官方直营 | 品质保障
                    </View>
                    <View className="welfare">
                        折扣满减
                    </View>
                    <View className="bottom">
                        <View className="price">
                            ￥{item.price}
                        </View>
                        <View className="num">
                            {item.num}件已售
                        </View>
                    </View>
                </View>
                ))
            }
            </View>
        </View>
    )
}