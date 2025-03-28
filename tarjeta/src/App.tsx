const App: React.FC = () => {
  const HasClick = () => {
    alert("En el centro, un mensaje inspirador resalta las cualidades de una persona increíble: fuerte, sabia, auténtica y mágica.");
  };

  return (
    <div className="app-container">
      <div className="product-card">
        <img 
          src="https://i.pinimg.com/474x/2d/7a/e2/2d7ae2725c63a0dd646ebb489b3b2bfb.jpg" 
        />
        <p>En el centro, un mensaje inspirador resalta las cualidades de una persona increíble: fuerte, sabia, auténtica y mágica.</p>
        <button onClick={HasClick}>Haz Click</button>
      </div>
    </div>
  );
};

export default App;
