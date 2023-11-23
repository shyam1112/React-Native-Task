import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Badges() {
    const persons = [
        {
            id: "1",
            name: "First Strip Earned",
            mul:"*3",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "2",
            name: "Born Winner",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "3",
            name: "Trader of the Month",
            desc:'Won 7 under-over games in a row',
        },
        {
            id: "4",
            name: "Rising Star",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "5",
            name: "Jackpot",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "6",
            name: "Impossible",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "7",
            name: "First Strip Earned",
            mul:"*3",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "8",
            name: "Born Winner",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "9",
            name: "Trader of the Month",
            desc:'Won 7 under-over games in a row',
        },
        {
            id: "10",
            name: "Rising Star",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "11",
            name: "Jackpot",
            desc:'Top 10% of highest spending players in a month',
        },
        {
            id: "12",
            name: "Impossible",
            desc:'Top 10% of highest spending players in a month',
        },
    ];
    return (
        <View style={{ flex: 1 ,backgroundColor:'#E4DFF7'}}>
            <ScrollView>
                {persons.map((person) => {
                    return (
                        <View style={styles.box1}>

                            <View style={{ flex: 2 }}>
                                <Image
                                    source={require('./itemicon.png')}
                                    style={{ width: 100, height: 100, alignSelf: 'center' }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', flex: 4 }}>
                                <View style={{ marginRight: 25 }}>

                                    <Text style={styles.txtt}>
                                        {person.name}
                                    </Text>
                                    <Text style={styles.txt2}>
                                       {person.desc}
                                    </Text>
                                </View>

                            </View>
                        </View>
                    );
                })}


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        backgroundColor: '#ffff',
        height: 100,
        marginTop: 15,
        marginLeft: 13,
        marginRight: 13,
        borderColor: 'darkgrey',
        borderWidth: 0.2,
        flexDirection: 'row',
        borderRadius:5
    },
    txtt: {
        textAlignVertical: 'center',
        fontWeight: '500',
        marginBottom: 4

    },
    txt2: {
        color: 'grey',
        fontWeight: '500'
    }
})
