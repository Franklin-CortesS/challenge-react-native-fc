import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button } from "@react-native-elements/base";

const HomeComponent = ({navigation}: any) => {
    return (
        <View data-testid="view-1" style={styles.container}>
            <Button
            data-testid="btn-1"
            buttonStyle={styles.button}
            onPress={() => navigation.push('Tasks')}
            title="Tasks">

            </Button>
            <Button
            data-testid="btn-2"
            buttonStyle={styles.button2}
            onPress={() => navigation.push('Lists')}
            title="List">
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    button: {
        marginBottom: 5
    },
    button2: {
        backgroundColor: 'rgba(111, 202, 186, 1)',
    }
});

export default HomeComponent;