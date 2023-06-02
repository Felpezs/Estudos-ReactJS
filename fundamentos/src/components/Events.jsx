export const Events = () => {
  const renderSomenthing = (x) => {
    if (x) return <h1>Renderizando no if!</h1>;
    else return <h1>Renderizando no else</h1>;
  };

  const handleMyEvent = (e) => console.log(e);
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Inline function")}>
          Clique aqui (inline)
        </button>
      </div>
      {renderSomenthing}
    </div>
  );
};
