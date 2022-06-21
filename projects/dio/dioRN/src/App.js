import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
  FlatList
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';


const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/97907739?v=4';
const urlToMyGithub = 'https://github.com/nathalia-santos';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto de perfil estilo anime de garota de oculos e cabelo grande"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: nathalia santos"
          style={[style.defaultText, style.name]}>
          Nathalia Santos
        </Text>
        <Text
          accessibilityLabel="Nickname: nathalia santos"
          style={[style.defaultText, style.nickname]}>
          nathalia-santos
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas"
          style={[style.defaultText, style.description]}>
          Estudante de Análise e Desenvolvimento de Sistemas
        </Text>
        <View style={style.quadrado}>
            <Text style={[style.defaultText, style.dio]}>
                DIO
            </Text>
        </View>
        <View style={style.quadrado}>
            <Text style={[style.defaultText, style.dio]}>
                DIO
            </Text>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  quadrado: {
    marginTop: 5,
    padding: 5,
    backgroundColor: '#90ee90',
    width:1,
    height:1,
    border: 25, /* As 4 bordas sólidas com 25px de espessura */
    },
  dio: {
      fontSize: 26,
      fontFamily: 'fantasy',
      justifyContent: 'center',
      alignItems: 'center',
  },
});