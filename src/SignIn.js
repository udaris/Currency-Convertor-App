/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View, StatusBar, Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SignIn = ({ navigation }) => {
    const [email, Setemail] = React.useState();
    const [pass, SetPass] = React.useState();


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#f2f796' />
            <View style={styles.header}>

                <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Lemon-Regular', fontSize: 18, marginTop: 10 }}> Now we need your Home Address </Text>
                <Text style={{ fontFamily: 'Lemon-Regular', fontSize: 18, }}> Enter your Post card Number</Text>


                <View style={[styles.footer, {
                    backgroundColor: 'white'
                }]} animation="fadeInUpBig"  >

                    <View style={styles.input}>
                        <TextInput placeholder="Email"
                            value={email} onChangeText={(text) => Setemail(text)}>

                        </TextInput>

                    </View>

                    <View style={styles.input}>
                        <TextInput placeholder="Password"
                            value={pass} onChangeText={(text) => SetPass(text)}>

                        </TextInput>

                    </View>


                    <View style={styles.button}>

                        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <LinearGradient colors={['#2f4f4f', 'yellow']} style={styles.nextButton}  >
                            <Text style={styles.textSign}> Home</Text>
                            <MaterialIcon name="arrow-forward-ios" size={20} color={'white'} />
                        </LinearGradient>
                           
                        </TouchableOpacity>
                        


                    </View>

                </View>

            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f796',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    bottomcontainer: {
        backgroundColor: '#C6F68D',
        flex: 0.7,
        borderRadius: 50,

    },
    img: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        width: "90%",
        backgroundColor: '#fff',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginBottom: 10
    },
    title: {
        color: '#2f4f4f',
        fontSize: 40,
    },

    button: {
        alignItems: 'flex-end',
        marginTop: 150,
    },
    nextButton: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',

    },

    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#f8fac1',
        borderRadius: 10,
        margin: 5
    }
})

export default SignIn;
