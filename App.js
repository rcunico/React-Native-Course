import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';


class App extends React.Component {
  placeAddedHandler = placeName => {
  this.props.onAddPlace(placeName);
  console.log("Place Added!");
  };

placeDeletedHandler = () => {
  this.props.onDeletePlace();
};

modalClosedHandler = () => {
  this.props.onDeselectPlace();
};

placeSelectedHandler = key => {
  this.props.onSelectPlace(key);
  };

  render() {
  return (
    <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.props.selectedPlace} 
        onItemDeleted={this.placeDeletedHandler} 
        onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput 
        onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.props.places} 
        onItemSelected={this.placeSelectedHandler} />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    padding: 28,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

// Maps some keys, which we then can access as props in our component, to state
// Can access these in configureStore.js -> state.places, then the proeprties that 'places' holds in the 'places' reducer
// State.places -> accesses the 'places' inside rootReducer (in configureStore.js)
// State.places.places -> accesses the 'places' in the 'places.js' state (initialState const)
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

// Map some properties of our choice to props that we can use in our component 
// Actions that are dispatched come from /actions/index.js
const mapDispatchToProps = dispatch => {
  return {
  onAddPlace: (name) => dispatch(addPlace(name)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: (key) => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace())
  };
};

// Creates a connection between the App component and the Redux store.  Can now use those props and actions that we mapped.
export default connect(mapStateToProps, mapDispatchToProps)(App);
