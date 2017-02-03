import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Firebase from 'firebase';

import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
      Firebase.initializeApp({
         apiKey: 'AIzaSyBDoVz7QiUWenNDHFEoMkfDGmSUIpfalH8',
         authDomain: 'authenticationapp-d12f6.firebaseapp.com',
         databaseURL: 'https://authenticationapp-d12f6.firebaseio.com',
         storageBucket: 'authenticationapp-d12f6.appspot.com',
         messagingSenderId: '722611384369'
       });

       Firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false });
          }
        });
     }

     renderContent() {
       switch (this.state.loggedIn) {
         case true:
           return (
                   <Card>
                     <CardSection>
                       <Button onPress={() => Firebase.auth().signOut()}>
                         Log in
                       </Button>
                     </CardSection>
                   </Card>
                 );
         case false:
           return <LoginForm />;
         default:
           return <Spinner spinnerSize="large" />;
       }
     }

     render() {
       return (
         <View>
           <Header headerText="Authentication" />
           {this.renderContent()}
         </View>
       );
     }
   }

   export default App;
