const CarDetails = ({brand, km, color}) => {
  return (
    <>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </>
  );
};

export default CarDetails;
