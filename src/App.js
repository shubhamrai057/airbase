import './App.scss';
import Header from './components/Header';
import Message from './components/Message';
import Detail from './components/Detail';
import { RequestProvider } from './context/requestContext';
import requestJson from './asset/request1.json';

function App() {
  const request = requestJson;
  return (
    <div className="airbase">
        <div className="airbase__main">
          {/* Header component */}
          <Header />
          {/* Message Component */}
          <Message />
          {/* Detail Component */}
          <RequestProvider value={request}>
            <Detail />
          </RequestProvider>
        </div>
    </div>
  );
}

export default App;
