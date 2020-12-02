import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as S from './styles'

const PayButton = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Button
        colors={
          focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <S.Label focused={focused}>Pagar</S.Label>
      </S.Button>
    </TouchableWithoutFeedback>
  )
}

export default PayButton
