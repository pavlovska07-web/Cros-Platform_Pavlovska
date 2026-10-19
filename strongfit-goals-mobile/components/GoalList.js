import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

export default function GoalList({ goals, onToggle, onDelete }) {
    return (
        <View style={styles.card}>
            <Text style={styles.sectionTitle}>Список фітнес-цілей</Text>
            {goals.length === 0 ? (
                <Text style={styles.emptyText}>
                    Фітнес-цілей поки немає. Додайте першу ціль!
                </Text>
            ) : (
                <>
                    <Text style={styles.hintText}>
                        Торкніться цілі, щоб позначити її виконаною.
                    </Text>
                    <FlatList
                        data={goals}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <GoalItem goal={item} onToggle={onToggle} onDelete={onDelete} />
                        )}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
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
        marginBottom: 8,
    },
    hintText: {
        fontSize: 13,
        color: '#64748b',
        marginBottom: 12,
    },
    emptyText: {
        fontSize: 15,
        color: '#64748b',
        textAlign: 'center',
        marginTop: 20,
        fontStyle: 'italic',
    },
});