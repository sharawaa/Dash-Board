import axios from "axios"

export default function Moderator(props){


    function  modDelHand(id) {
        axios.delete(`http://localhost:2022/moderators/${id}`);
        console.log(id)
    }

    return(<>
    <tbody>
                <tr>
                <td>{props.moderator}</td>
                <td>{props.sureName}</td>
                <td>{props.name}</td>
                <td>{props.eMail.slice(0, 5)}...com</td>
                <td>{props.phone}</td>
                <td>{props.goodsSold}</td>
                <td>{props.date}</td>
                <td><button onClick={()=>modDelHand(props.id)}>ustgah</button></td>
                
                </tr>
            </tbody>
    
    </>)
}