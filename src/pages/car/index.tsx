import Taro from '@tarojs/taro'
import { View, Image , Text} from '@tarojs/components'
import { useEffect, useState } from "react"
import { NavBar, Card } from "../../components"
import { AtCheckbox, AtInputNumber, AtSwipeAction,AtList,AtListItem   } from 'taro-ui'
import './index.scss'
import {  cardData } from "../../mock"


const Car = () => {

    const [visableLogo, setVisableLogo] = useState(true)
    const [noSearch, setNoSearch] = useState(true)
    const [checkAll, setCheckAll] = useState(true)
    const [title, setTitle] = useState('购物车')
    const [check, setCheck] = useState(['list1'])
    const [inputValue, setInputValue] = useState(1)
    const [cardDatas, setCardData] = useState(cardData)
    const [infoCount, setInfoCount] = useState(0)

    useEffect(() => {
        console.log('hooks');
        
    })
    /**处理增加数量 */
    const handleChangeNumber = async(e, id) => {
        let nums = 0
        await cardDatas && cardDatas.map(async (item:any, index) => {
            if(item.id === id) {
                await setCardData(
                    ()=>{
                        cardDatas[index].count = e
                        cardDatas[index].num = e*Number(item.price) 
                        return [...cardDatas]
                    }
                )
            }
            await (nums += item.num)
            setInfoCount(nums)
        })
        
    }
    /**处理单项商品是否选中 */
    const handleClickGround = async(id) => {
        let nums = 0
        await cardDatas && cardDatas.map(async (item, index) => {
            if(item.id === id) {
                await setCardData(
                    ()=>{
                        cardDatas[index].checkFlag = !cardDatas[index].checkFlag 
                        return [...cardDatas]
                    }
                )
            }
            await (nums += item.num)
             if(!item.checkFlag) {
                nums -= item.num
            }
            setInfoCount(nums)
        })
        setCheckAll(cardDatas.every(item => item.checkFlag))
    }

    const handlerCheckAll = async() => {
        setCheckAll(!checkAll)
        let nums = 0
        await cardDatas && cardDatas.map(async (item, index) => {
                await setCardData(
                    ()=>{
                        cardDatas[index].checkFlag = !checkAll
                        return [...cardDatas]
                    }
                )
                await (nums += item.num)
                if(checkAll) {
                    setInfoCount(0)
                }else {
                    setInfoCount(nums)
                }
        }) 
    }

    // 处理滑动删除操作
    const handleDelClick = async(id) => {
        await cardDatas && cardDatas.map(async (item, index) => {
            if(item.id === id) {
                await setCardData(
                    ()=>{
                        cardDatas.splice(index, 1)
                        return [...cardDatas]
                    }
                )
                setInfoCount(infoCount -item.num)
            }
            
        })
    }
       

    useEffect(() => {
        let count = 0
        console.log(123);
        cardDatas.forEach((item:any) => {
            setCardData(
                ()=>{
                    item.num = Number(item.price) * item.count
                    return [...cardDatas]
                }
            )
            count += Number(item.price)
            setInfoCount(count)
        }) 
    },[])

    return (
        <View className="card">
            <NavBar visableLogo={visableLogo} title={title} noSearch={noSearch}></NavBar>
            <View className="card-info">
            {
                cardDatas && cardDatas.map((item) => (
                    <AtSwipeAction onClick={() => handleDelClick(item.id)} key={item.id} maxDistance={50} areaWidth={420} isOpened={false} options={[
                        {
                            text: '删除',
                            style: {
                            backgroundColor: '#FF4949'
                            }
                        }
                    ]}
                    >
                         <View className="card-item" >
                            <View className="cards-item-left">
                                <View className={`cards-item-left-rand ${item.checkFlag ? 'cards-item-left-rand-style' : ''}`}   onClick={() => handleClickGround(item.id)}>
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
                                          onChange={(e) => handleChangeNumber(e, item.id)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </AtSwipeAction>
                ))
            }
            <View className="card-footer">
                <View className="checkAll" onClick={handlerCheckAll}>
                    <View className={`check ${checkAll ? 'check-color' : ''}`} >
                        <Text className='at-icon at-icon-check' style={` display: ${checkAll ? 'black' : 'none'}`}></Text>
                    </View>
                    <View className="check-text" >全选</View>
                    </View>
                <View className="contet">
                    <View className="del">删除</View>
                    <View className="count">合计:
                        <Text>￥{infoCount}</Text>
                    </View>
                </View>
                <View className="settlement">结算</View>
            </View>
            </View>
        </View>
    )
}

export default Car