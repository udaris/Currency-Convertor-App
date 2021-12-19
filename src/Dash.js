/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text, Image,

    View,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Dash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image style={styles.tinyLogo}
                    source={require('./images/log.png')} />
            </View>
            < Text style={styles.text}>Currency App</Text>

            <View style={styles.bottomcontainer}>
                <View style={styles.img}>
                    <Text style={styles.text2}>You can find most valubale currency type.</Text>

                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Create your account')}>
                <Text style={{ color: "black", fontSize: 22, marginLeft: 320, fontWeight: 'bold' }}> Go  </Text>
            </TouchableOpacity>

        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9ED92',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    bottomcontainer: {
        backgroundColor: 'lightyellow',
        flex: 0.7,
        borderRadius: 50,

    },
    img: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 250,
        height: 250,
    },
    tinyLogo2: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 100
    },
    text2: {
        marginTop: 50,
        fontSize: 22,
        margin:5,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

})

export default Dash;
