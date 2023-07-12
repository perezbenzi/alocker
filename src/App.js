import logo from './logo.svg';
import './App.css';
import AudioUploader from './components/AudioUploader/AudioUploader';
import StorageViewer from './components/StorageViewer/StorageViewer';
import StorageSearcher from './components/StorageSearcher/StorageSearcher'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <StorageSearcher/>
      <AudioUploader/> */}
      <StorageViewer/>
    </div>
  );
}

export default App;
