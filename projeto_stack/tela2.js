import { View, Text, Button } from "react-native-web";

export default function DetailsScreen({ route, navigation }){
    const { ProdutoID } = route.params;
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tela Detalhes</Text>
            <Text>ID do Poduto: {ProdutoID}</Text>
            <Button
                title = "Ir Para Perfil"
                onPress={() => navigation.navigate ('Perfil')}
            />
        </View>
    );
}