export const BillItem = ({billItemInfo}) =>{
    const {name,price} = billItemInfo;
    return(
        <div>
            {name}
            {" "}
            ${price}
        </div>
    );


}