import Taro from '@tarojs/taro'
import { View, Image , Text} from '@tarojs/components'
import { useEffect, useState } from "react"
import { NavBar, Card } from "../../components"
import { AtCheckbox, AtInputNumber, AtSwipeAction  } from 'taro-ui'
import './index.scss'
import {  cardData } from "../../mock"


const Car = () => {

    const [visableLogo, setVisableLogo] = useState(true)
    const [noSearch, setNoSearch] = useState(true)
    const [title, setTitle] = useState('购物车')
    const [check, setCheck] = useState(['list1'])
    const [inputValue, setInputValue] = useState(1)
    const [cardDatas, setCardData] = useState(cardData)

    useEffect(() => {
        console.log('hooks');
        
    })

    const handleChange = (e) => {
        console.log(e);
        setCheck(e)
    }

    const handleChangeNumber = (count, id) => {
        
        // cardDatas.map(item => {
        //     if(item.id == id ) {
        //         item.count = count +=1
        //     }
        // })
        // console.log(cardDatas);
        
    }

    const handleClickGround = (id) => {
        
        console.log(123);
        console.log(id);
        
        
    }


    return (
        <View className="card">
            <NavBar visableLogo={visableLogo} title={title} noSearch={noSearch}></NavBar>
            <View className="card-info">
            {
                cardDatas && cardDatas.map((item) => (
                        <View className="card-item" key={item.id}>
                        <View className="cards-item-left">
                            <View className="cards-item-left-rand" onClick={() => handleClickGround(item.id)}>
                                <Text className='at-icon at-icon-check' style={` display: ${item.checkFlag ? 'black' : 'none'}`}></Text>
                            </View>
                        </View>
                        <View className="cards-item-center">
                            <Image src="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"></Image>
                        </View>
                        <View className="cards-item-right">
                            <View className="cards-item-right-top">
                                <View className="cards-item-right-top-desc">{item.title}</View>
                            </View>
                            <View className="cards-item-right-center">
                                <View className="cards-item-right-center-desc">{item.desc}</View>
                            </View>
                            <View className="cards-item-right-bottom">
                                <View className="cards-item-right-bottom-left">￥{item.price}</View>
                                <View className="cards-item-right-bottom-right">
                                    <AtInputNumber
                                      min={1}
                                      step={1}
                                      type="number"
                                      value={item.count}
                                      onChange={() => handleChangeNumber(item.count, item.id)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                ))
            }
            </View>
        </View>
    )
}

export default Car