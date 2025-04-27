import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => 
      [...currentCourseGoals, {
        text: enteredGoalText,
        id: Math.random().toString(),
      }]
    );

    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => 
      currentCourseGoals.filter(
        (goal) => goal.id !== id
      )
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Image source={require('./assets/images/goal.png')} style={styles.goalImage} />
        
        <Pressable onPress={startAddGoalHandler} style={styles.addGoalButton}>
          <Image source={require('./assets/images/add.png')} style={styles.addImage} />
          <Text style={styles.goalText}>Add New Goal</Text>
        </Pressable>
        
        <GoalInput 
        onAddGoal={addGoalHandler} 
        isVisible={modalIsVisible} 
        onModalCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => 
              <GoalItem 
                text={itemData.item.text} 
                onDeleteGoal={deleteGoalHandler} 
                id={itemData.item.id}
              />
            }
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addGoalButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: 180,
    marginHorizontal: "auto",
    padding: 10,
    backgroundColor: "#a065ec",
    color: "white",
    borderRadius: 4,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 32,
    marginBottom: 16,
  },
  goalText: {
    color: "white",
    textTransform: "uppercase",
  },
  goalImage: {
    width: 100,
    height: 100,
    marginVertical: 32,
    marginHorizontal: "auto",
  },
  addImage: {
    width: 24,
    height: 24,
  },
});
