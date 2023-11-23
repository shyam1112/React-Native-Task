import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, Pressable } from 'react-native';



export default function Screen2() {
    const numbers = Array.from({ length: 30 }, (_, index) => index +1);
    const navigation = useNavigation();
    const gotoscreen3 = () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.mainpage}>
            <Modal transparent={true} visible={true} animationType="slide">
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <View style={{ flex: 1.7 }}>
                        <Text></Text>
                    </View>
                    <View style={styles.modal1}>
                        <View style={{ margin: 20, marginLeft: 25, marginRight: 25, marginTop: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: '900', color: 'grey', textAlign: 'center' }}>____</Text>
                            <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>Your Prediction is Under</Text>
                            <Text style={{ marginTop: 20, fontWeight: '500', color: 'grey', marginBottom: 20 }}>ENTRY TICKETS</Text>
                            <View style={styles.container}>
                                <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
                                    {numbers.map((number) => (
                                        <View key={number} >
                                            <View style={styles.numberContainer}> 
                                            <Text style={styles.numberText}>{number}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>

                            <Text style={{ color: 'grey', marginTop: 20 }}>You can win</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'green', fontWeight: '600', marginBottom: 20 }}>$2000</Text>
                                <Text>Total  🪙  5</Text>
                            </View>
                            <Pressable onPress={gotoscreen3}>
                                <View>
                                    <Text style={{ textAlign: 'center', backgroundColor: '#7E36CF', borderRadius: 30, height: 45, textAlignVertical: 'center', fontSize: 18, fontWeight: '500', color: '#fff' }}>Submit my prediction</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modal1: {
        flex: 2,
        // justifyContent: 'flex-end', 
        backgroundColor: '#ffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

    },
    mainpage: {
        flex: 1,
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        height: 135,
    },
    contentContainer: {
        alignItems: 'center',
    },
    numberContainer: {
        width: 300,
        height: 40,
        backgroundColor: '#E4DFF7',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    numberText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

});
