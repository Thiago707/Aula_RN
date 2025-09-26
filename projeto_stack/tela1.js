import { View, Text, Button } from "react-native-web";

export default function HomeScreen({ navigation }){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tela Home</Text>
            <Button
                title = "Ir Para Detalhes"
                onPress={() => navigation.navigate ('Detalhes', {ProdutoID: 101})}
            />
        </View>
    );
}