import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';
import styles from '../style/HomeStyle';

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  navigation.setOptions({
    headerLeft: () => (
      <IconButton
        icon="menu"
        size={20}
        onPress={showDialog}
      />
    ),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pedidos</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={hideDialog}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button title="Airton" onPress={() => {}} />
            <Button title="João Pedro" onPress={() => {}} />
            <Button title="João Víctor" onPress={() => {}} />
            <Button title="Leonardo" onPress={() => {}} />
            <Button title="Manuela" onPress={() => {}} />
            <Button title="Nathalia" onPress={() => {}} />
            <Button title="Simone" onPress={() => {}} />
            <Button title="Fechar" onPress={hideDialog} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
