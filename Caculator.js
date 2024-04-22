import Entybo from "@expo/vector-icons/Entypo"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native"

const Caculator = ()=>{
    const [darkMode, setDarkMode] = useState(false)
    const bgColorFunction = (darkMode)? '#414853':"#ededed"
    const bgColorNumber = (darkMode)? '#303946':"#fff"
    const bgColorResult = (darkMode)? '#282f3b':"#f5f5f5"
    const bgColorThemeButton = (darkMode)? '#7b8084':"#e5e5e5"
    const textColorHistory = (darkMode)? '#B5B7BB':"#7c7c7c"
    const ColorIcon = (darkMode)? 'White':"black"

    const buttonsLeft = [
        ["C","DEL"],
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, "."]
    ]
    const buttonsRight = [
        "/", "*", "-", "+", "="
    ]
    const [currentNumber, setCurremtNumber] = useState("")
    const [lastNumber, setLastNumber]  = useState("")
    const caculator =()=>
    {
        let lastchar = currentNumber[currentNumber.length-1]
        if((lastchar==="+")||(lastchar===".")||(lastchar==="*")||(lastchar==="/")||(lastchar==="."))
        {
            setCurremtNumber(currentNumber)
        }
        else
        {
            let result = eval(currentNumber).toString()
            setCurremtNumber(result)
        }
    }
    const handleInput = (buttonPress)=>{
        switch (buttonPress){
            case "+": case "-": case "*": case "/":
                Vibration.vibrate(35)
                setCurremtNumber(currentNumber + buttonPress)
                break
            case "DEL":
                Vibration.vibrate(35)
                setCurremtNumber(currentNumber.substring(0, (currentNumber.length-1)))
                break
            case "C":
                Vibration.vibrate(35)
                setCurremtNumber("")
                setLastNumber("")
                break
            case "=":
                Vibration.vibrate(35)
                setCurremtNumber(currentNumber+"=")
                caculator()
                break
            default:
                Vibration.vibrate(35)
                setCurremtNumber(currentNumber + buttonPress)
                break
        }
    }
    return(
        <View style={myStyle.container}>
            <View style={{...myStyle.containerResult, backgroundColor: bgColorResult}}>
                <TouchableOpacity style={{...myStyle.themeButton, backgroundColor: bgColorThemeButton}} onPress={()=> setDarkMode(!darkMode)}>
                    <Entybo name={(darkMode)?"light-up":"moon"} size={40} style={{color: ColorIcon}}/>
                </TouchableOpacity>
                <Text style={{...myStyle.historyText, color: textColorHistory}}>{lastNumber}</Text>
                <Text style={myStyle.resultText}>{currentNumber}</Text>
            </View>
            <View style={myStyle.containerButton}>
                <View style={myStyle.containerButtonLeft}>
                    {
                        buttonsLeft.map((row, index)=>
                        <View style={{...myStyle.containerRow, backgroundColor: (index==0)?bgColorFunction:bgColorNumber}}>
                            {
                                row.map(item=>
                                    <TouchableOpacity style={myStyle.button} onPress={()=> handleInput(item)}>
                                        <Text style={myStyle.buttonText}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    )
                    }
                </View>
                <View myStyle={myStyle.containerButtonRight}>
                    {
                        buttonsRight.map((item)=>
                        <TouchableOpacity style={{...myStyle.button}} 
                        onPress={()=> handleInput(item)}
                        >
                            <Text style={myStyle.buttonText}>{item}</Text>
                        </TouchableOpacity>
                    )
                    }
                </View>
            </View>
        </View>
    )
}
export default Caculator

const myStyle = StyleSheet.create({
    container:{
        flex: 1

    },
    containerResult:{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "flex-end"
    },
    containerButtonLeft:{
        flex: 3
    },
    containerButtonRight:{
        flex: 1,
        backgroundColor: "#00b9d6"
    },
    containerButton:{
        flex: 2,
        flexDirection: "row"
    },
    themeButton:{
        marginTop: 50,
        marginLeft: 20,
        borderRadius: 90,
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start"
    },
    historyText:{
        fontSize: 20,
        marginRight: 10
    },
    resultText:{
        color: "#00b9d6",
        fontSize: 35,
        margin: 15
    },
    button:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        fontSize: 30,
        fontWeight: "bold"
    },
    containerRow:{
        flex: 1,
        flexDirection: "row"
    }
})