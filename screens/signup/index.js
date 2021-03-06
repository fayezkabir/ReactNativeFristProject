import React from "react";
import { View, Platform, Text, StyleSheet, Button, TouchableOpacity, TextInput, StatusBar, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { color } from "react-native-reanimated";

const SignUpScreen = props => {
    const { navigation } = props;
    const [data, setData] = React.useState({
        email: "",
        password: "",
        confirm_password : "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const textInputChange = value => {
        if (value.length != 0) {
            setData({
                ...data,
                email: value,
                check_textInputChange: true,
            })
        } else {
            setData({
                ...data,
                email: value,
                check_textInputChange: false,
            })
        }
    };
    const handlePasswordChange = value => {
        setData({
            ...data,
            password: value
        })
    };
    const handleConfirmPasswordChange = value => {
        setData({
            ...data,
            confirm_password: value
        })
    };

    const handleTogglePassword = _ => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };
    const handleConfirmTogglePassword = _ => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user" color="#05375a" size={20} />
                        <TextInput placeholder="Enter Your Email" style={styles.textInput} autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {
                            data.check_textInputChange ?
                                <Animatable.View animation="bounceIn">
                                    <Feather name="check-circle" color="green" size={20} />
                                </Animatable.View>
                                :
                                null
                        }

                    </View>
                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name="lock" color="#05375a" size={20} />
                        <TextInput placeholder="Enter Your Password" style={styles.textInput} autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                            secureTextEntry={data.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity onPress={handleTogglePassword}>
                            {
                                data.secureTextEntry ?

                                    <Feather name="eye-off" color="grey" size={20} />
                                    :
                                    <Feather name="eye" color="grey" size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name="lock" color="#05375a" size={20} />
                        <TextInput placeholder="Confirm Your Password" style={styles.textInput} autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        />
                        <TouchableOpacity onPress={handleConfirmTogglePassword}>
                            {
                                data.confirm_secureTextEntry ?

                                    <Feather name="eye-off" color="grey" size={20} />
                                    :
                                    <Feather name="eye" color="grey" size={20} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
                            <Text style={styles.textSign}>Sign Up</Text>
                        </LinearGradient>
                        <TouchableOpacity onPress={() => { navigation.navigate("SignInScreen") }}
                            style={[styles.signIn,
                            {
                                borderColor: "#009387",
                                borderWidth: 1,
                                marginTop: 15
                            }
                            ]
                            }>
                            <Text style={[styles.textSign, { color: "#009387" }]}>Sign In</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 50

    },
    footer: {
        flex: 6,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    button: {
        alignItems: "center",
        marginTop: 50
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }
})