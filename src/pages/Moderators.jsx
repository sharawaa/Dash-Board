import "../styles/moderator.css"
import Moderator from "../components/mainComponents/Moderator"
import { moderat } from "../util/data"


export default function Moderators(){
    return(
  <div className="moderator-container">
    <div className="moderator">

      <section className="moderator-title">
        <p className="moderator-title-p">Модераторууд</p>
      </section>
        
      <section className="moderator-head">
        <section></section>
        <input className="moderator-head-input" placeholder="search" type="text" />
      </section>



      <section>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Moderator</th>
              <th scope="col">Овог</th>
              <th scope="col">Нэр</th>
              <th scope="col">И-мэйл хаяг</th>
              <th scope="col">Утас</th>
              <th scope="col">Зарсан</th>
              <th scope="col">Огноо</th>
            </tr>
          </thead>
              {moderat.map((uni)=>(
                <Moderator
                moderator={uni.moderator}
                sureName={uni.sureName}
                name={uni.name}
                eMail={uni.eMail}
                phone={uni.phone}
                goodsSold={uni.goodsSold}
                date={uni.date}
                />
              ))}
          </table>
       </section>
    </div>
  </div>
    )
}