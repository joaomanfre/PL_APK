import React from 'react';
import { Appbar } from 'react-native-paper';

export default function CustomHeader({ showDialog }) {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={showDialog} />
      <Appbar.Content title="Lista de Pedidos" />
    </Appbar.Header>
  );
}
