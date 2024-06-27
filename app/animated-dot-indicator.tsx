import { View, Text } from 'react-native'
import React from 'react'

type TProps = {
    state: any;
    numberOfTabs: number;
}
export default function AnimatedDotIndicator(props: TProps) {
    const { state, numberOfTabs } = props;
    const { index } = state; 
    
    return (
        <View className="items-center bg-white">
            <Text className="text-lg">{index + 1 + " /" + numberOfTabs}</Text>
        </View>
    )
}