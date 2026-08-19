import { Text, Pressable, PressableProps, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styles } from "./styles";

type BotaoProps = PressableProps & {
    titulo: string;
    cor?: string;
    corTexto?: string;
    estiloTexto?: StyleProp<TextStyle>;
}

export default function Botao({ titulo, cor, corTexto, estiloTexto, style, ...rest }: BotaoProps) {
    return (
        <Pressable 
            style={[styles.btn, cor ? { backgroundColor: cor } : {}, style as StyleProp<ViewStyle>]} 
            {...rest}
        >
            <Text style={[styles.btntxt, corTexto ? { color: corTexto } : {}, estiloTexto]}>{titulo}</Text>
        </Pressable>
    )
}