import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Jika timer sudah berjalan, jangan mulai lagi

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timer Menggunakan useRef</Text>
      <Text style={styles.timerText}>{timer} detik</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Mulai" onPress={startTimer} />
        </View>
        <View style={styles.button}>
          <Button title="Hentikan" onPress={stopTimer} />
        </View>
        <View style={styles.button}>
          <Button title="Reset" onPress={resetTimer} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    marginHorizontal: 10,
  },
});

