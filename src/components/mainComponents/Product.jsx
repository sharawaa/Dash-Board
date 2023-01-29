import EditCanvas from "./EditCanvas";



export default function Product(props) {
  const data= props.data;
  return (
    <tbody> 
      <tr>
        <td>
          <img
            style={{ width: "80px", height: "80px" }}
            src={props.image}
            alt=""
          />
        </td>
        {/* console.log(animals.slice(1, 5)); */}
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.remainder}</td>
        <td>{props.sale}</td>
        <td>{props.category}</td>
          
        <td>
         
        <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="./image/treeTseg.svg" alt="" />
        </button>
          <ul class="dropdown-menu">
            <li><EditCanvas data={data} /></li>
            <li><a class="dropdown-item" href="##">Устгах</a></li>
            <li><a class="dropdown-item" href="##">Вебсайтаас нуух</a></li>
          </ul>
    
        </td>
      </tr>
    </tbody>
  );
}
