import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.quaternary,
    },
    image: {
        height: '50%',
        width: '95%',
        marginLeft: 10,
        marginVertical: 3,
    },
    title: {
        fontSize: 37,
        fontFamily: 'CourgetteRegular',
        marginVertical: 9,
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 5,
    }
})