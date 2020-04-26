import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

export default (key, initialValue=null) => {
  const [storageItem, setStorageItem] = useState( AsyncStorage.getItem(key) || initialValue || null );

  const getStorageItem = async () => {
    const data = await AsyncStorage.getItem(key);
    setStorageItem(data);
  }

  const updateStorageItem = async (data) => {
    if (typeof data === 'string') {
      AsyncStorage.setItem(key, data);
      setStorageItem(data);
    }
    return data;
  }

  const clearStorageItem = async () => {
    AsyncStorage.removeItem(key);
    setStorageItem(null);
  }

  useEffect(() => {
    getStorageItem();
  }, []);

  return [storageItem, updateStorageItem, clearStorageItem];
}