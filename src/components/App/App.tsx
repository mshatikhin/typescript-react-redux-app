import * as React from 'react';
import * as styles from './App.css';
import { Provider } from 'react-redux';
import { SearchContainer } from '../../containers/SearchPage';
import { configureStore } from '../../redux/configureStore';
import { Header } from '../Header/Header';

const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.root}>
          <Header />
          <SearchContainer />
        </div>
      </Provider>
    );
  }
}
