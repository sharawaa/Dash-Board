import "../styles/orders.css"

import Order from "../components/mainComponents/Order"
import { orders } from "../util/data"
export default function Orders(){
    return(
    <div className="orders-container">
      <div className="orders">
        <section className="orders-title"><p className="orders-title-p">Захиалгууд</p></section>


        <section className="orders-header container">
        <div class="btn-group orders-header-button">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Бүгд
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="##">Action</a></li>
    <li><a class="dropdown-item" href="##">Another action</a></li>
    
  </ul>
</div>
                <input className="orders-header-input" type="text" placeholder="Хайх" />
        </section>


        <section>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Захиалга No</th>
                <th scope="col">Огноо</th>
                <th scope="col">Утас</th>
                <th scope="col">И-мэйл</th>
                <th scope="col">Хаяг</th>
                <th scope="col">Тоо</th>
                <th scope="col">Нийт дүн ₮</th>
                <th scope="col">Төлбөр</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
                {orders.map((unit)=>(
                  <Order
                  no={unit.no}
                  date={unit.date}
                  phone={unit.phone}
                  email={unit.eMail}
                  address={unit.address}
                  number={unit.number}
                  totalAmount={unit.totalAmount}
                  payment={unit.payment}
                  status={unit.status}
                  
                  />
                ))}
          </table>
        </section>
      </div>
    </div>
    )
}