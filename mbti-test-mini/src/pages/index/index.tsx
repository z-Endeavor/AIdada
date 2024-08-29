import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

function index() {
  return (
    <View className='index'>
      <View className='at-article__h1'>
        MBTI 性格测试
      </View>
      <View className='at-article__h2'>
        只需 2 分钟，就能非常准确地描述出你是谁，及你的性格特点
      </View>
    </View>
  )
}

export default index
