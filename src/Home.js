/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    StyleSheet,
    View, StatusBar, Text,
    TouchableOpacity,
    TextInput, SafeAreaView, Button,
    ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { fetchCurrencyLatest, convertCurrencyAPI } from '../api';


const Home = ({ navigation }) => {
    const [email, Setemail] = React.useState();
    const [pass, SetPass] = React.useState();

    const [currencyList, setCurrencyList] = useState([]);
    const [open, setOpen] = useState(false);
    const [targetOpen, setTargetOpen] = useState(false);
    const [sourceAmount, setSourceAmount] = useState("0");
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetAmount, setTargetAmount] = useState("0");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCurrencyLatest()
            .then(list => setCurrencyList(list))
    }, [])

    const convertCurrency = (amount, sourceCurrency, targetCurrency) => {
        setLoading(true);
        convertCurrencyAPI(amount, sourceCurrency, targetCurrency)
            .then(data => {
                const { rates } = data;
                setTargetAmount(String(rates[targetCurrency]));
                setLoading(false);
            })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor='#f2f796' />
                <View style={styles.header}>

                    <View style={[styles.footer, { backgroundColor: '#f2f796' }]} animation="fadeInUpBig"  >



                        <View
                            style={styles.mainContainer}
                        >
                            <View>
                                <Text>Source Amount</Text>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={value => setSourceAmount(value)}
                                    value={sourceAmount}
                                />
                                <Text>Select Source Currency</Text>
                                <DropDownPicker
                                    style={styles.textInput}
                                    onChangeText={value => setSourceCurrency(value)}
                                    open={open}
                                    value={sourceCurrency}
                                    items={currencyList.map(currency => ({
                                        label: currency,
                                        value: currency,
                                    }))}
                                    setOpen={setOpen}
                                    setValue={setSourceCurrency}
                                />
                            </View>
                            <View>
                                <Text>Target Amount</Text>
                                <TextInput
                                    style={styles.textInput}
                                    editable={false}
                                    value={targetAmount}
                                />
                                <Text>Select Target Currency</Text>
                                <DropDownPicker
                                    style={styles.textInput}
                                    onChangeText={value => setTargetCurrency(value)}
                                    open={targetOpen}
                                    value={targetCurrency}
                                    items={currencyList.map(currency => ({
                                        label: currency,
                                        value: currency,
                                    }))}
                                    setOpen={setTargetOpen}
                                    setValue={setTargetCurrency}
                                />
                            </View>
                            <View>
                                {
                                    loading
                                        ? <ActivityIndicator color="#000000" size="large" />
                                        : <Button onPress={() => convertCurrency(sourceAmount, sourceCurrency, targetCurrency)} title="Convert" />
                                }
                            </View>

                            
                    <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Lemon-Regular', fontSize: 18, marginTop: 10 }}>You can enter any currency to get most valubale one </Text>
                    <Text style={{ fontFamily: 'Lemon-Regular', fontSize: 18, }}> Enter your Two Currency types</Text>

                    <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Lemon-Regular', fontSize: 18, marginTop: 10 }}>Most valuble currecncy type is less amount one </Text>
                        </View>




                    </View>

                </View>
            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f796',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    mainContainer: {
        padding: 20,
        height: 700,
        backgroundColor: "#fff"
    },
    textInput: {
        marginBottom: 10,
        backgroundColor: "lightgrey",
        color: "red"
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

export default Home;
