import { TextInput } from "react-native";

export default function InputField(props) {
    return (
        <TextInput
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    );
}
