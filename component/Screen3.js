import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Tabb from './Tabb';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

const Tab = createBottomTabNavigator();


export default function Screen3() {
    return (
        <>
            <View>
                <View style={{ backgroundColor: '#fff' }}>
                    <Image
                        source={require('./dp.png')}
                        style={{ width: 100, height: 100, borderRadius: 110, alignSelf: 'center', marginTop: 8 }}
                    />
                    <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16, marginBottom: 4 }}>Jina Simons</Text>
                    <Text style={{ textAlign: 'center', fontWeight: '500', color: 'grey' }}>6000 Pts</Text>
                    <Text style={{ color: 'grey', fontWeight: '500', marginLeft: 20, marginRight: 20 ,marginTop:5}}>
                        I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!
                    </Text>
                    
                    <Pressable>

                    <View>
                        <Image
                            source={require('./logout.png')}
                            style={{ width: 100, height: 35, alignSelf: 'center' }}
                            />
                    </View>
                    </Pressable>
                    <View>
                        <Image
                            source={require('./star.png')}
                            style={{ width: 330, height: 125, alignSelf: 'center' }}
                        />
                    </View>
                </View>
                <Text style={{ height: 5 }}></Text>
            </View>
            <Tabb />
            <View>
            <Image
            source={require('./bottom.png')}
            style={{width:370,height:50}}
            />
            </View>


        </>
    );
}
