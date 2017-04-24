import React from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';

export const Counter = (props: any) => (
    <View>
        <View>
            <Text>count: { props.count }</Text>
        </View>
        <Button onPress={ props.plus } title='+' />
        <Button onPress={ props.minus } title='-' />
    </View>
)