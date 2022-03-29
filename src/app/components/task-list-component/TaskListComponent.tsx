
import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from '@react-native-elements/base'

const TaskListComponent = (props: any) => {
    const myListEmpty = () => {
        return (
          <View style={{ alignItems: "center" }}>
          <Text style={styles.item}>No hay tareas que mostrar.</Text>
          </View>
        );
    };

    return (
        <View style={styles.container}>
          <FlatList
            data={props.tasks}
            keyExtractor={({ id }, index) => id}
            ListEmptyComponent={myListEmpty}
            renderItem={({ item }: any) => (
              <ListItem key={item.id} bottomDivider>
                <ListItem.Content style={styles.listItem}>
                  <ListItem.Title style={styles.listName}>
                    {item.task}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      item: {
        marginTop: 12,
        fontWeight: 'bold',
        color: "#000000"
      },
      title: {
        fontSize: 32,
      },
      listItem: {
        display: "flex"
      },
      listName: {
        display: "flex"
      }
  });

export default TaskListComponent;