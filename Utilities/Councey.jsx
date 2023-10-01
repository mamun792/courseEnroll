export const CurrentFormetter = (price) => {
    if (!price || price === undefined) return "Free";
  
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
