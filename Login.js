import { useState } from 'react'
import { Text, View, Button } from 'react-native'
import InputField from '../../components/InputField'
import ThemeButton from '../../components/ThemeButton'

export default function Login({ navigation }) {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    return (
        <View>
            <Text>Login</Text>
            <InputField
                placeholder="username"
                value={data.username}
                onChangeText={(value) => {
                    setData({
                        ...data,
                        username: value
                    });
                }}
            />
            <ThemeButton
                title="Register Here"
                onPress={() => {
                    navigation.navigate('Register');
                }}
            />
        </View>
    );
}