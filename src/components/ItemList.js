
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="p-2 m-2 border-b-black border-b-1"key={item.id}>
            
          <h3 className="text-[25px] font-bold">{item.name}</h3>
          <p className=" text-[15px]font-[300]">{item.description}</p>
          <p className="text-[20]">₹{item.price / 100}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
