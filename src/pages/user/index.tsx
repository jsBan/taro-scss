import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from "react"
import { NavBar, Card } from "../../components"
import "./index.scss"

const User = () => {
    const [visableLogo, setVisableLogo] = useState(true)
    const [noSearch, setNoSearch] = useState(true)
    const [title, setTitle] = useState('个人中心')
        return (
            <View className="user">
                 <NavBar visableLogo={visableLogo} title={title} noSearch={noSearch} backGround></NavBar>
                 <View className="line">123</View>
            </View>
        )
} 

export default User