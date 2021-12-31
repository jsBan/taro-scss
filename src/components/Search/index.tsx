// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View, Text } from "@tarojs/components"
import "./index.scss"


export default function Search(props) {
    const style = {
        paddingTop: (Taro as any).$navBarMarginTop + 'px'
    }
    return (
        <View className='search' style={style}>
            dadasdasd
        </View>
    )
}