const withPromotedLabel = (CardItems) => {
  return (Discountdata) => {
    const discount = Discountdata?.aggregatedDiscountInfoV3;

    return (
      <div className="relative">
        {discount && (
          <div className="absolute top-2 left-2 z-10 bg-black text-white text-xs px-2 py-1 rounded">
            {discount.header} {discount.subHeader}
          </div>
        )}
        <CardItems {...Discountdata} />
      </div>
    );
  };
};

export default withPromotedLabel;
