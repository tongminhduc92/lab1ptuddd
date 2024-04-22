import { StyleSheet, Text, View } from "react-native"

const Bai5= ()=>{
    return(
        <View style= {myStyle.container}>
            <Square text={"Do"} bgcolor={"red"}/>
            <Square text={"Lam"} bgcolor={"green"}/>
            <Square text={"Xanh"} bgcolor={"blue"}/>
        </View>
    )
}
export default Bai5

const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    box:{
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    }
})

const Square = ({ text, bgcolor}) =>(
    <View style={{...myStyle.box, backgroundColor:bgcolor}}>
        <Text>{text}</Text>
    </View>
)