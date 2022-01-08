import { Component } from 'react'
import { View } from '@tarojs/components'
import { useEffect, useState } from "react"
import { NavBar, Card } from "../../components"
import "./index.scss"

const User = () => {
    const [visableLogo, setVisableLogo] = useState(true)
    const [noSearch, setNoSearch] = useState(true)
        const [title, setTitle] = useState('个人中心')

        return (
            <View className="user">
                 <NavBar visableLogo={visableLogo} title={title} noSearch={noSearch}></NavBar>
                 <View className="user-info">
                 个人中心
                 </View>
            
            </View>
        )
} 

export default User