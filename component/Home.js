import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import Screen2 from './Screen2';

export default function Home() {
    const [clk,setclk]=useState(false);
    const btnclk=()=>{
        if(clk === false){

            setclk(true);
        }else{
            setclk(false);
        }
    }
    return (
        <View style={styles.fullpage}>
            <View style={styles.secpage}>
                <ImageBackground source={require('./images/pic.jpg')} resizeMode="cover" style={styles.image} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ color: '#DFCDF7', fontWeight: '500' }}>UNDER OR OVER</Text>
                        <Image 
                            source={require('./images/i.png')}
                            style={{width:17,height:17,marginLeft:8}}
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{ color: '#DFCDF7' }}>Starting in  </Text> 
                        <Image 
                            source={require('./images/clock.png')}
                            style={{width:15,height:15,backgroundColor:'#DFCDF7',borderRadius:15}}
                            />
                            <Text style={{ color: '#DFCDF7' }}>  03:23:12</Text>
                            </View>
                    </View>
                    <View>
                        <Text style={{ paddingLeft: 10, color: '#DFCDF7', fontSize: 15, fontWeight: '400', marginTop: 22 }}>Bitcoin price will be under</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 10, fontWeight: '500',marginTop:5 }}>$24,524 at 7 a ET on 22nd Jan'21</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                            <Text style={{ color: '#8E8F8F', fontWeight: '500' }}>PRIZE POOL</Text>
                            <Text style={{ color: '#8E8F8F', fontWeight: '500' }}>UNDER</Text>
                            <Text style={{ color: '#8E8F8F', fontWeight: '500' }}>OVER</Text>
                            <Text style={{ color: '#8E8F8F', fontWeight: '500' }}>ENTRY FEES</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 7 }}>
                            <Text style={{ color: 'black', fontWeight: '500' }}>$12,000    </Text>
                            <Text style={{ color: 'black', fontWeight: '500' }}>3.25x</Text>
                            <Text style={{ color: 'black', fontWeight: '500' }}>1.25x </Text>
                            <Text style={{ color: 'black', fontWeight: '500' }}>      5  🪙 </Text>
                        </View>
                        <Text style={{ marginTop: 20, fontSize: 18, fontWeight: '500', color:'#646366' }}>What's your prediction?</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12 ,marginBottom:8}}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#644A7C', width: 140, height: 50, alignItems: 'center', borderRadius: 28 }}>
                                <Image source={require('./images/downarrow.png')}
                                    style={styles.btn}
                                />
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}> Under</Text>
                            </View>

                            <Pressable onPress={btnclk}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#7257CE', width: 140, height: 50, alignItems: 'center', borderRadius: 28 }}>
                                <Image source={require('./images/uparrow.png')}
                                    style={styles.btn}
                                    />
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}> Over</Text>
                            </View>
                            </Pressable>
                        </View>


                    </View>
                        <View style={{ backgroundColor: '#F3EDFB' }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require('./images/user.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Text style={{ fontSize: 15,fontWeight:'500', color:'#646366' }}> 355 Players</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require('./images/chart.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Text style={{ fontSize: 15,fontWeight:'500', color:'#646366' }}> View chart</Text>
                                </View>
                            </View>
                        <View style={{flexDirection:'row', marginLeft:15,marginRight:15}}>
                            <View style={{backgroundColor:'#E660AD',borderTopLeftRadius:20,borderBottomLeftRadius:20,height:12}}>
                                <Text>                                                         </Text>
                            </View>
                            <View style={{backgroundColor:'#54C0A7',borderTopRightRadius:20,borderBottomRightRadius:20,height:12}}>
                                <Text>                              </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10,margin:10}}>
                            <Text style={{fontWeight:'500',color:'#8E8F8F'}}>232 predicted under</Text>
                            <Text style={{fontWeight:'500',color:'#8E8F8F'}}>123 predicted over</Text>
                        </View>
                        </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 2 }}>
                {/* <Text>HELLO</Text> */}
            {clk ?(
                <Screen2/>
            ):(<Text></Text>)
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 20,
        height: 20,
        marginLeft: 32,
        backgroundColor: 'white',
    },
    fullpage: {
        flex: 2,
    },

    secpage: {
        flex: 3.3,
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 10,
        margin: 20
    },

    image: {
        flex: 1,
        width: 320,
        height: 135,
    },

})
