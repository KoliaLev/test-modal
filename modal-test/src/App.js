import './App.css';
import { ModalProvider } from './contexts';
import { Controls } from './components';
import { Modal } from './components';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Controls />
      </div>
    </ModalProvider>
  );
}

export default App;
