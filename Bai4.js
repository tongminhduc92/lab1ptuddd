import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Bai4 = ()=> {
    const [presscount, setpresscount]= useState(0)
    return(
        <View style={{alignItems: "center", marginTop: 20, marginLeft: 700}}>
            <Text> Ban da nhan nut: {presscount} lan</Text>
            <Button title= "Nhan di" onPress={() => setpresscount(presscount + 1)} />
        </View>
    )
}

export default Bai4