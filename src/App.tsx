import "./App.css";
import { AssetList } from "./pages/AssetList.page";
import { DUMMY_ASSET_LIST } from "./helper/constants";


function App() {
  return (
    <div className="App bg-[#14172b] h-full">
      <AssetList assetList={DUMMY_ASSET_LIST} />
    </div>
  );
}

export default App;
