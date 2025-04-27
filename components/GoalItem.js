import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

function GoalItem({text, onDeleteGoal, id}) {
  return (
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
        <Pressable onPress={onDeleteGoal.bind(this, id)}>
          <Image source={require('../assets/images/close.png')} style={styles.closeIcon} />
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 10,
    color: "white",
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
