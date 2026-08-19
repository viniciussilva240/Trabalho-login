import { TextInput, TextInputProps, StyleSheet } from "react-native";

// Define os tipos aceitos pelo componente, herdando todas as props nativas do TextInput
type InputProps = TextInputProps & {
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
};

export default function EntradaTexto({ style, ...rest }: InputProps) {
    return (
        <TextInput
            style={[styles.input, style]} 
            {...rest}
        />
    );
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 14,
        fontSize: 15,
        color: '#333',
        backgroundColor: '#fff',
    }
});
