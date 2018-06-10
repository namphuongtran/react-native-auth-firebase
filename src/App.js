import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvIlkyLw8f22YNWbanHC8Mh6FZea9S0gQ',
      authDomain: 'authentication-39a88.firebaseapp.com',
      databaseURL: 'https://authentication-39a88.firebaseio.com',
      projectId: 'authentication-39a88',
      storageBucket: 'authentication-39a88.appspot.com',
      messagingSenderId: '4789868219'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  signOut() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.signOut.bind(this)}>
              Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    const { appContainerStyle } = styles;
    return (
      <View style={appContainerStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainerStyle: {

  }
});
