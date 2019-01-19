import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Platform } from 'react-native'
export default class Search extends Component {
  render() {
    return (
        <GooglePlacesAutocomplete
            placeholder='Onde quer ir?'
            placeholderTextColor='#333'
            onPress={() => {}}
            query={{
                key: 'AIzaSyDzqc1dyShJJRsnSTaYBTNtTd_gi2KrqG0',
                language: 'pt'
            }}
            textInputProps={{
                autoCapitalize: 'none',
                autoCorrect: false
            }}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: Platform.select({ios: 65, android: 35}),
                    width: '100%',
                    //height: '140%'
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 55,
                    marginHorizontal: 20,
                    borderTopWidth: 1,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: {x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: '#DDD',
                    fontSize: 18
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: {x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 10,
                    //marginBottom: 10
                },
                description: {
                    fontSize: 15
                },
                row: {
                    padding: 20,
                    height: 57
                }
            }}
        />
    )
  }
}
