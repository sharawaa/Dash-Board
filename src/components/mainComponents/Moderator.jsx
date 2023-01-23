export default function Moderator(props){
    return(<>
    <tbody>
                <tr>
                <td>{props.moderat}</td>
                <td>{props.sureName}</td>
                <td>{props.name}</td>
                <td>{props.eMail}</td>
                <td>{props.phone}</td>
                <td>{props.goodsSold}</td>
                <td>{props.date}</td>
                </tr>
            </tbody>
    
    </>)
}