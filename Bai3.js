import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Bai3 = ()=>{
    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={{...myStyle.button, backgroundColor: "red"}} onPress={() => alert ("helloooooo!")}>
                <Text style={{...myStyle.text}}>
                    Say Hello
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...myStyle.button, backgroundColor: "blue"}} onPress={() => alert ("byeeeeee!")}>
                <Text style={{...myStyle.text}}>
                    Say Goodbyes
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Bai3

const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    button:{
        height: 60,
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        margin: 20
    },
    text:{
        color: "white",
        fontSize: 20
    }
})