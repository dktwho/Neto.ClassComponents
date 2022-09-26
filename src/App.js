import './css/main.css';
import ShopItemClass from './Components/ShopItemClass'

function App(props) {
  return (
    
    
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={props} />
        
      </div>
    </div>
  )
}

export default App;
