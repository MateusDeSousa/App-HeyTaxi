import React, { Component } from 'react';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import taxiImage from '../../assets/taxi.png' 


export default class Details extends Component {
  render() {
    return <Container>
        <TypeTitle>Popular</TypeTitle>

        <TypeImage source={taxiImage} />
        <TypeTitle>Taxi</TypeTitle>
        <TypeDescription>R$6,50</TypeDescription>

        <RequestButton onPress={() => {}}>
            <RequestButtonText>
                Solicitar Taxi
            </RequestButtonText>
        </RequestButton>
    </Container>;    
  }
}
