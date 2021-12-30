// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
import "./index.scss"

// @import "~taro-ui/dist/style/components/icon.scss";

const Search = () =>  {
    return (
        <View className='navSearch'>
            <View className='left'>
                <View className='at-icon at-icon-search'></View>
            </View>
            <View className='right'>
                <View className='at-icon at-icon-filter'></View>
            </View>
        </View>
    )
}

export default Search