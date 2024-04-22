import { StyleSheet, Text, View } from "react-native"

const Bai1 = ()=>{
    return(
        <View style={myStyles.container}>
            <Text style={myStyles.Text}>
                Hello Word
            </Text>
        </View>
    )
}

export default Bai1

const myStyles = StyleSheet.create({
    container:{
        height: 200,
        width: 200,
        backgroundColor: "aqua",
        justifyContent: "center",
        alignItems: "center"
    },
    Text:{
        fontSize: 20,
        fontWeight: "bold"
    }
})