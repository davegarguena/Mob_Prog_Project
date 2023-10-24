import { Button } from "react-native-web";

export default function ThemeButton(props) {
    return(
        <Button title={props.title} color="green" onPress={props.onPress} />
    )
}