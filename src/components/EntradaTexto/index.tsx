import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles"; 

type InputProps = TextInputProps & {
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
}

export default function EntradaTexto({ style, ...rest }: InputProps) {
    return (
        <TextInput
            style={[styles.input, style]}
            {...rest}
        />
    )
}