export default function User(props){
    return(
        <>
        <tbody>
                <tr>
                <td>{props.id}</td>
                <td>{props.sureName}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.order}</td>
                <td>{props.date}</td>
                </tr>
            </tbody>
        </>
    )
}