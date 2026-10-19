import React, { useState } from 'react';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (text, targetValue, category) => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      Alert.alert('Помилка', 'Будь ласка, введіть назву фітнес-цілі.');
      return false;
    }

    const newGoal = {
      id: Date.now().toString(),
      text: trimmedText,
      targetValue: targetValue.trim(),
      category: category.trim(),
      done: false,
    };

    setGoals((currentGoals) => [newGoal, ...currentGoals]);
    Alert.alert('Успіх', 'Фітнес-ціль успішно додано!');
    return true;
  };

  const toggleGoal = (id) => {
    setGoals((currentGoals) =>
        currentGoals.map((goal) =>
            goal.id === id ? { ...goal, done: !goal.done } : goal
        )
    );
  };

  const deleteGoal = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
    Alert.alert('Видалення', 'Фітнес-ціль видалено зі списку.');
  };

  const totalGoals = goals.length;
  const doneGoals = goals.filter((g) => g.done).length;

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
          <StatusBar barStyle="dark-content" backgroundColor="#e0e7ff" />
          <View style={styles.container}>
            <Header total={totalGoals} done={doneGoals} />
            <GoalForm onAdd={addGoal} />
            <GoalList goals={goals} onToggle={toggleGoal} onDelete={deleteGoal} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e0e7ff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 12, // Додатковий відступ зверху під Dynamic Island
  },
});