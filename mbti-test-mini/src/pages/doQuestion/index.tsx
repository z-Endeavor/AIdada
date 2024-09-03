// import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtRadio } from 'taro-ui'
import GlobalFooter from '../../components/GlobalFooter'
import questions from "../../data/questions.json"

// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

// 做题页面

function doQuestionPage() {
  // 当前题目序号（从1开始）
  const [current, setCurrent] = useState<number>(1)
  // 当前题目 
  const [currntQuestion, setCurrentQuestion] = useState(questions[0])
  const questionOptions = currntQuestion.options.map(option => {
    return { label: `${option.key}.${option.value}`, value: option.key};
  })
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>()
  // 回答列表
  const [answerList] = useState<string[]>([])

  // 序号变化时，切换当前题目和当前回答
  useEffect( () => {
    setCurrentQuestion(questions[current - 1])
    setCurrentAnswer(answerList[current - 1])
  }, [current])

  return (
    <View className='doQuestionPage'>
      {/* { JSON.stringify(answerList)} */}
      <View className='at-article__h2 title'>
        {current}、{currntQuestion.title}
      </View>
      <View className='options-wrapper'>
        <AtRadio options={questionOptions} value={currentAnswer} onClick={(value) => {
          setCurrentAnswer(value)
          // 记录回答
          answerList[current - 1] = value
        }}/>
      </View>
      { current < questions.length && (
        <AtButton type='primary' circle className='ctrlBtn' disabled={!currentAnswer} onClick={() => setCurrent(current+1)}>
          下一题
        </AtButton>
      )}
      { current == questions.length && (
        <AtButton type='primary' circle className='ctrlBtn' disabled={!currentAnswer} onClick={() => {
          Taro.navigateTo({
            url: '/pages/result/index'
          })
        }}>
          查看结果
        </AtButton>
      )}
      { current > 1 && (
        <AtButton circle className='ctrlBtn' onClick={() => setCurrent(current-1)}>
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  )
}

export default doQuestionPage
