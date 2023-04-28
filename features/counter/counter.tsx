import React from 'react'
import type { RootState } from './../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { Button, View, Text } from 'react-native';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
        <Button onPress={() => dispatch(increment())} title="Increment"/>
        <Button onPress={() => dispatch(decrement())} title="Decrement"/>
        <Text>Value is currently {count}</Text>

    </View>
  )
}