import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeText}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
        <View style={styles.modalContainer}>
            {modalContent}
        <View style={styles.modalContainer}>
            <TouchableOpacity onPress={props.onItemDeleted}>
            <Icon name="delete" type="material" color="#cc0000" />
            </TouchableOpacity>
            <Button title="Close" onPress={props.onModalClosed}/>
        </View>
        </View>
</Modal>
    );

}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 30,
    },
    placeImage: {
        marginTop: 30,
        width: "100%",
        height: 200,
    },
    placeText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default placeDetail;