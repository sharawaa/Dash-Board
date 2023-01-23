import { products } from "../util/data";
import Product from "../components/mainComponents/Product";
import "../styles/products.css"

export default function Products() {
  return (<div className=" product-container ">
  <div className="product">
        <section className="product-title">
          <p className="product-title-p">Бүтээгдэхүүнүүд</p>
        </section>

        <section className="product-button">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+ Бараа нэмэх</button>

          
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"      aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
              <div class="offcanvas-body">
                ...
              </div>
            </div>
        </section>


        <section className="product-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Зураг</th>
                <th scope="col">Барааны нэр</th>
                <th scope="col">Үнэ</th>
                <th scope="col">Үлдэгдэл</th>
                <th scope="col">Хямдрал %</th>
                <th scope="col">Категори</th>
                <th scope="col">:</th>
                </tr>
            </thead>
    
                
                {products.map((unit)=>(
                  <Product 
                  image={unit.image}
                  name={unit.productName}
                  price={unit.price}
                  sale={unit.sale}
                  category={unit.category}
                  remainder={unit.remainder}
                  />
                  ))}
            </table>
    </section>
    <section>

    </section>
  </div>;
</div>)
}