const Price = ({ oldPrice, currentPrice, currency }) => {
  return (
    <>
      <div>
        {oldPrice} {currency}
      </div>
      <div>
        {currentPrice} {currency}
      </div>
    </>
  );
};
export default Price;
