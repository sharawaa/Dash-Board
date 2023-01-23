export default function Order(props){
    return(
        <>
<tbody>
                <tr>
                <td>{props.no}</td>
                <td>{props.date}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.address}</td>
                <td>{props.number}</td>
                <td>{props.totalAmount}</td>
                <td>{props.payment}</td>
                <td>{props.status}</td>
                
                </tr>
            </tbody>
        </>
    )
}