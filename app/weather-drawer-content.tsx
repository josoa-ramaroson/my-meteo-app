import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons'; // Example of using FontAwesome icons
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [dailyWeatherEnabled, setDarkModeEnabled] = useState(false);

    const toggleNotifications = () => {
        setNotificationsEnabled(previousState => !previousState);
        // You can perform additional actions based on the state change
    };

    const toggleDaylyWeather = () => {
        setDarkModeEnabled(previousState => !previousState);
        // You can perform additional actions based on the state change
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/* Custom Header or Logo */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Mon Metéo</Text>
                </View>
                
                {/* Custom Switches */}
                <View style={styles.switchContainer}>
                    <FontAwesome name="bell" size={24} color="black" style={styles.icon} />
                    <Text style={styles.label}>Activer Notifications</Text>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={toggleNotifications}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
                    <Text style={styles.label}>Metéo journalier</Text>
                    <Switch
                        value={dailyWeatherEnabled}
                        onValueChange={toggleDaylyWeather}
                    />
                </View>
            </DrawerContentScrollView>
            {/* Custom Footer or Additional Content */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Version 1.0.0</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        flex: 1,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginTop: 'auto',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
});

export default CustomDrawerContent;
