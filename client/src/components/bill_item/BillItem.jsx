export const BillItem = ({billItemInfo}) =>{
    const {name,price} = billItemInfo;
    return(
        <div>
            <table>
                <tr>
                    <th>{name}:</th>
                    <td>${price}</td>
                </tr>
                
            </table>

            <br></br>
        
        </div>
    );


}