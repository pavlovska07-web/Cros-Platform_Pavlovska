import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function GoalForm({ onAdd }) {
    const [text, setText] = useState('');
    const [targetValue, setTargetValue] = useState('');
    const [category, setCategory] = useState('');

    const handleAdd = () => {
        const isAdded = onAdd(text, targetValue, category);
        if (isAdded) {
            setText('');
            setTargetValue('');
            setCategory('');
        }
    };

    return (
        <View style={styles.card}>
            <Text style={styles.sectionTitle}>Додати нову фітнес-ціль</Text>

            <TextInput
                style={styles.input}
                placeholder="Назва цілі (напр. Пробіжка, Віджимання)..."
                placeholderTextColor="#94a3b8"
                value={text}
                onChangeText={setText}
            />

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Ціль (напр. 5 км або 30 р)"
                    placeholderTextColor="#94a3b8"
                    value={targetValue}
                    onChangeText={setTargetValue}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Категорія (напр. Кардіо)"
                    placeholderTextColor="#94a3b8"
                    value={category}
                    onChangeText={setCategory}
                />
            </View>

            <TouchableOpacity style={styles.addButton} activeOpacity={0.8} onPress={handleAdd}>
                <Text style={styles.addButtonText}>Додати до списку цілей</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#c7d2fe',
        borderRadius: 10,
        padding: 12,
        fontSize: 15,
        color: '#0f172a',
        backgroundColor: '#f8fafc',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    addButton: {
        backgroundColor: '#6366f1',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 4,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});