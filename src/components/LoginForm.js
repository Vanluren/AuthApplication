import React,
       { Component } from 'react';
import { Text } from 'react-native';
import Firebase from 'firebase';

//Import Components
import { Button,
         Card,
         CardSection,
         Input,
         Spinner } from './common';

class LoginForm extends Component {
//Class initial state, in this case it's an empty array called Albums
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true })

    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
}

  onLoginSuccess() {
    this.setState({ email: '',
                    password: '',
                    error: '',
                    loading: false });
  }
  onLoginFail() {
    this.setState({ error: 'Authentication Failed!',
                    loading: false
                  });
  }

  renderButton() {
    if (this.state.loading) {
      return (<Spinner spinnerSize='small' />);
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
  }

  //Default function needed for all class based components, renders JSX
  render() {
    return (
      <Card>
        <CardSection>
            <Input
              placeholder={'user@user.cum'}
              label={'Email'}
              secureTextEntry={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder={'********'}
              label={'Password'}
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={Styles.errorTextStyle}>
            {this.state.error}
          </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>

    );
  }
}

const Styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
   }
};

export default LoginForm;
