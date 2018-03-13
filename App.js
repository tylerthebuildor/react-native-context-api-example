import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
const ThemeContext = React.createContext('light');
const styles = {
  dark: { backgroundColor: 'black', color: 'white' },
  light: { backgroundColor: 'white', color: 'black' },
};

class ThemeProvider extends React.Component {
  state = { theme: 'light' };

  toggleTheme = () => this.setState(({ theme }) => ({
    theme: theme === 'light' ? 'dark' : 'light',
  }));

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <TouchableOpacity onPress={this.toggleTheme} style={{ marginTop: 50 }}>
          <Text>toggle theme</Text>
        </TouchableOpacity>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {theme => <Text style={styles[theme]}>{theme}</Text>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}
