import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GoalItem({ goal, onToggle, onDelete }) {
    return (
        <View style={[styles.item, goal.done && styles.itemDone]}>
            <TouchableOpacity
                style={styles.textContainer}
                activeOpacity={0.7}
                onPress={() => onToggle(goal.id)}
            >
                <Text style={[styles.titleText, goal.done && styles.textDone]}>
                    {goal.text}
                </Text>
                <Text style={[styles.detailsText, goal.done && styles.detailsTextDone]}>
                    {goal.targetValue ? `Ціль: ${goal.targetValue}` : ''}
                    {goal.targetValue && goal.category ? '  •  ' : ''}
                    {goal.category ? `Категорія: ${goal.category}` : ''}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.7}
                onPress={() => onDelete(goal.id)}
            >
                <Text style={styles.deleteButtonText}>Видалити</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eef2ff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#c7d2fe',
    },
    itemDone: {
        backgroundColor: '#dcfce7',
        borderColor: '#86efac',
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e1b4b',
    },
    detailsText: {
        fontSize: 13,
        color: '#64748b',
        marginTop: 2,
    },
    textDone: {
        color: '#166534',
        textDecorationLine: 'line-through',
    },
    detailsTextDone: {
        color: '#15803d',
    },
    deleteButton: {
        backgroundColor: '#ef4444',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    deleteButtonText: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold',
    },
});