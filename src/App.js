import logo from './logo.svg';
import './App.css';
import AudioUploader from './components/AudioUploader/AudioUploader';
import StorageViewer from './components/StorageViewer/StorageViewer';
import StorageSearcher from './components/StorageSearcher/StorageSearcher'

function App() {
  return (
    <div className="App">
      <StorageSearcher/>
      <AudioUploader/>
      <StorageViewer/>
    </div>
  );
}

export default App;
