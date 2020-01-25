import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class PlaceInput extends React.Component {
    state = {
        placeName: '',
        
      }

      placeNameChangedHandler = (value) => {
        this.setState({
          placeName: value,
        });
      };
      
      placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "" ) {
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
        this.state.placeName="";
      };
    
    render() {
    return (
        <View style={styles.inputContainer}>
    <TextInput 
      value={this.state.placeName}
      placeholder="An awesome place"
      placeholderTextColor="grey"
      onChangeText={this.placeNameChangedHandler}
      style={styles.placeInput}
      />
      <Button
      title="Add"
      style={styles.placeButton}
      onPress={this.placeSubmitHandler}
      />
      </View>
    );}}
    

const styles = StyleSheet.create({
placeInput: {
    width: "70%", 
    height: 50, 
    color: "black", 
    fontSize: 20, 
    textAlign: "center"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  placeButton: {
    width: "30%"
  },
});

export default PlaceInput;
