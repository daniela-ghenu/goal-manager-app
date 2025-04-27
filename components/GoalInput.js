import { useState } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  Button, 
  View, 
  Modal,
  Image 
} from 'react-native';

function GoalInput({ onAddGoal, isVisible, onModalCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.goalImage} />
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!" 
          onChangeText={goalInputHandler}
          value={enteredGoalText} 
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onModalCancel} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  goalImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
  button: {
    width: 120,
    marginHorizontal: 8,
  },
});
