import React, { useState } from 'react'

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff")
  const [squareColor, setSquareColor] = useState("#000000")
  const [cercleColor, setCercleColor] = useState("#000000")
  const [triangleColor, setTriangleColor] = useState("#000000")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let bgColor = "#"
    let sqColor = "#"
    let cercleColor = "#"
    let triangleColor = "#"
    
    for (let i = 0; i < 6; i++) {
      bgColor += hexRange[Math.floor(Math.random() * 16)]
      sqColor += hexRange[Math.floor(Math.random() * 16)]
      cercleColor += hexRange[Math.floor(Math.random() * 16)]
      triangleColor += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(bgColor)
    setSquareColor(sqColor)
    setCercleColor(cercleColor)
    setTriangleColor(triangleColor)
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={styles.containerObject}>
          <View style={[styles.square, {backgroundColor: squareColor}]}></View>
          <View style={[styles.cercle, {backgroundColor: cercleColor}]}></View>
          <View style={[styles.triangle, {borderBottomColor: triangleColor}]}></View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  containerObject: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 12
  },
  cercle: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },
  buttonContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  actionBtn: {
    backgroundColor: 'lightgrey',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color:  '#FFFFFF',
    textTransform: 'uppercase'
  }
});

export default App
