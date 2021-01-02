
import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch

} from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const DrawerContent = props => {
    const [isDarkTheme , setIsDarkTheme] = React.useState(false)

    const toggleTheme = () => {
            setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSelection}>
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <Avatar.Image
                                    source={require("./../assets/images/fb.jpg")}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                    <Title style={styles.title}>Fayez Kabir</Title>
                                    <Caption style={styles.caption}>@fkabir</Caption>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.section]}>80</Paragraph>
                                    <Caption style={styles.caption}>Following</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.section]}>60</Paragraph>
                                    <Caption style={styles.caption}>Followers</Caption>
                                </View>
                            </View>
                        </View>
                        {/*******************Drawer Items*************************/}
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem label="Home" icon={({ color, size }) => (
                                <FontAwesome name="home" color={color} size={size} />
                            )
                            }
                                onPress={() => { props.navigation.navigate("Home") }}
                            />
                            <DrawerItem label="Profile" icon={({ color, size }) => (
                                <FontAwesome name="user-secret" color={color} size={size} />
                            )
                            }
                                onPress={() => { props.navigation.navigate("Profile")}}
                            />
                            <DrawerItem label="Bookmarks" icon={({ color, size }) => (
                                <Ionicons name="bookmark" color={color} size={size} />
                            )
                            }
                                onPress={() => { props.navigation.navigate("Bookmark") }}
                            />
                            <DrawerItem label="Settings" icon={({ color, size }) => (
                                <Ionicons name="settings" color={color} size={size} />
                            )
                            }
                                onPress={() => { props.navigation.navigate("Settings")}}
                            />
                            <DrawerItem label="Support" icon={({ color, size }) => (
                                <MaterialIcons name="support-agent" color={color} size={size} />
                            )
                            }
                                onPress={() => { props.navigation.navigate("Support")}}
                            />

                        </Drawer.Section>
                        <Drawer.Section title="Preference">
                            <TouchableRipple onPress={() => toggleTheme()}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                        <View>

                        </View>
                    </View>
                </View>


            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSelection}>
                <DrawerItem label="Sign Out" icon={({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                )
                }
                    onPress={() => { }}
                />

            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSelection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSelection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})