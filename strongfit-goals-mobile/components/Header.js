import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ total, done }) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>StrongFit Goals Mobile </Text>
            <Text style={styles.stats}>
                Усього цілей: {total}  •  Виконано: {done}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4f46e5',
        textAlign: 'center',
        marginBottom: 6,
    },
    stats: {
        fontSize: 15,
        color: '#475569',
        fontWeight: '500',
    },
});