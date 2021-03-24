import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return [
        {id: 0, title: 'Joguin', category: 'Games', createdAt: new Date('21/03/2020'), type: 'withdraw'},
        {id: 1, title: 'Cafezin', category: 'Comida', createdAt: new Date('22/03/2013'), type: 'withdraw'},
        {id: 2, title: 'Criacao Site', category: 'Desenvolvimento', createdAt: new Date('23/05/2021'), type: 'deposit'}
      ]
    })
  }
})



export function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}

