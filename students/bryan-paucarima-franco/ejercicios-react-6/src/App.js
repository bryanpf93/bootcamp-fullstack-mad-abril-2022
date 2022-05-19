import './App.css';
import Counter from './components/counter';
import Header from './components/header';
import CounterProvider from './components/counter/counter.provider';

function App() {
  return (

    <>
      <CounterProvider>
        <Header></Header>
        <Counter>

        </Counter>
      </CounterProvider>
    </>

  )
}

export default App;
