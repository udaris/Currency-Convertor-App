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

const SignUp = ({ navigation }) => {
    const [fName, SetFname] = React.useState();
    const [sName, SetSname] = React.useState();
    const [dateB, SetdateB] = React.useState();


    const nextHandle = () => {
        if (fName && sName && dateB ) {
            navigation.navigate('Sign in');
            SetFname("");
            SetSname("");
            SetdateB("");
          

        }else{
            alert("Fill form all fields ")
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#f2f796' />
            <View style={styles.header}>

                <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Lemon-Regular', fontSize: 18, marginTop: 10 }}> Hello there! </Text>
                <Text style={{ fontFamily: 'Lemon-Regular', fontSize: 18, }}> Lets GEt Strated </Text>


                <View style={[styles.footer, {
                    backgroundColor: 'white'
                }]}  >
                    <Text style={{marginTop:3}}>Please fill all fields matching your password </Text>

                    <View style={styles.input}>
                        <TextInput placeholder="FirstName"
                            value={fName} onChangeText={(text) => SetFname(text)}>

                        </TextInput>

                    </View>

                    <View style={styles.input}>
                        <TextInput placeholder="Email"
                            value={sName} onChangeText={(text) => SetSname(text)}>

                        </TextInput>

                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder="Password" keyboardType="numeric"
                            value={dateB} onChangeText={(text) => SetdateB(text)}>

                        </TextInput>

                    </View>
                   

                    <View style={styles.button}>
                        <TouchableOpacity onPress={() =>nextHandle() } >

                            <LinearGradient colors={['#2f4f4f', 'yellow']} style={styles.nextButton}  >
                                <Text style={styles.textSign}>Get Started</Text>
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
        backgroundColor: '#c3c400',
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

export default SignUp;
