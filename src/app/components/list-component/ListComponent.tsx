
import React, { useState, useEffect} from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, ListItem } from '@react-native-elements/base'

const ListComponent = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const test_image: string = "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg";
    const api_url: string = "https://6172cfe5110a740017222e2b.mockapi.io/elements";

    async function getData(){
        try {
            const response = await fetch(api_url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const myListEmpty = () => {
        return (
          <View style={{ alignItems: "center" }}>
          <Text style={styles.item}>No hay usuarios que mostrar.</Text>
          </View>
        );
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              ListEmptyComponent={myListEmpty}
              renderItem={({ item }: any) => (
                  <ListItem key={item.id} bottomDivider>
                    <Avatar source={{uri: test_image}} rounded></Avatar>
                    <ListItem.Content style={styles.listItem}>
                      <ListItem.Title style={styles.listName}>
                        {item.name}
                      </ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
              )}
            />
        )}
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

export default ListComponent;