export const Challenge = () => {
  let a = 1;
  let b = 2;

  return (
    <div>
      <h1>Componente Challenge</h1>
      <p>
        Valores: {a} e {b}
      </p>
      <button onClick={() => console.log(a + b)}>Somar</button>
    </div>
  );
};
