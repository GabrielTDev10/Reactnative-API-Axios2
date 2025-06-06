import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    Maskedinput:{
        flexGrow: 1,
        height: 40,
        fontSize: 18,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        alignSelf: 'flex-start'
    },
    containerMasked:{
      flexDirection: 'row',
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10
    },
    Maskedinput2:{
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      alignSelf: 'flex-start'
    },
    errorMessage:{
      alignSelf: 'flex-start',
      marginLeft: 15,
      color: '#f00',
      fontSize: 12
    }
});

export default styles;