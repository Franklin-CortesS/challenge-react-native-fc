
import { Button } from "@react-native-elements/base";
import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TextInput } from 'react-native';
import TaskListComponent from "../task-list-component/TaskListComponent";
import { connect } from 'react-redux';
import { addTasks } from "../../store/reducers/TaskReducer";

const mapStateToProps = (state: any) => {
    return {
      tasks: state
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      addTask: (obj: any) => dispatch(addTasks(obj)),
    };
};

const TasksComponent = (props: any) => {
    const [text, onChangeText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [addError, onChangeDisplayError] = useState(false);

    const saveTask = () => {
        onChangeDisplayError(false);

        if(text.length > 0){
            props.addTask({
                id: Math.floor(Math.random() * 1000),
                task: text,
            });
            setModalVisible(!modalVisible);
            onChangeText('');
        }
        else{
            onChangeDisplayError(true);
        }
    }

    const closeAdd = () => {
        onChangeDisplayError(false);
        setModalVisible(!modalVisible);
        onChangeText('');
    }
    
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Tarea"
                            placeholderTextColor="#000000"
                        />
                        {addError == true && <Text style={styles.errorText}>Escribe la tarea a guardar.</Text>}
                        <View style={styles.twoBtns}>
                            <Button
                                buttonStyle={[styles.button, styles.buttonClose]}
                                onPress={() => closeAdd()}
                                title="Cerrar"
                            >
                            </Button>
                            <Button
                                buttonStyle={[styles.button, styles.buttonSave]}
                                onPress={() => saveTask()}
                                title="Agregar"
                            >
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>

            <Button
            buttonStyle={styles.my_button}
            onPress={() => setModalVisible(!modalVisible)}
            title="Nueva tarea"></Button>

            <TaskListComponent tasks={props.tasks}></TaskListComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "#000000"
    },
    my_button: {
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 20,
        backgroundColor: "#009900",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
      },
      buttonSave: {
        backgroundColor: "#009900",
        marginLeft: 2
      },
      buttonClose: {
        backgroundColor: "#CC0000",
        marginRight: 2
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "#000000"
      },
      input: {
        height: 40,
        marginHorizontal: 12,
        borderWidth: 1,
        padding: 10,
        color: "#000000",
      },
      twoBtns: {
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12
      },
      errorText: {
        color: "#CC0000",
        fontSize: 10,
      },
});

export default connect(mapStateToProps, mapDispatchToProps) (TasksComponent);