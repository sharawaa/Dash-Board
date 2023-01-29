import { useState } from "react";
import NewModal from "./NewModal";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";

export default function ProductCanvas(prop) {
  const [addIndicator, setAddIndicator] = useState([]);
  const { products } = prop;
  //const [addProduct, setAddProduct] = useState();
  function productSave(e) {
    e.preventDefault();
    axios.post("http://localhost:2022/products", {
      name: e.target.productName.value,
      stock: e.target.productStock.value,
      price: e.target.productPrice.value,
      sale: e.target.productSale.value,
      category: e.target.category.value,
    });
  }
  return (
    <>
      <Offcanvas.Header closeButton className="offcanvas-header">
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="offcanvas-body container">
        <form onSubmit={productSave}>
        <div className="offcanvas-body-image">
          <section>
            <input
              className="offcanvas-body-image-input-1"
              name="productImage"
              type="text"
            />
          </section>
        </div>

        <div className="d-flex" >
          <section>
            <section>
              <p>Барааны нэр</p>
              <input type="text" name="productName" />
            </section>
            <section>
              <p>Үлдэгдэл</p>
              <input type="text" name="productStock" />
            </section>
          </section>

          <section>
            <section>
              <p>Барааны үнэ (₮)</p>
              <input type="text" name="productPrice" />
            </section>
            <section>
              <p>Хямдрал (%-иар)</p>
              <input type="text" name="productSale" id="" />
            </section>
          </section>
          </div>

          <div className="product-modal">
            <NewModal
              products={products}
              setAddIndicator={setAddIndicator}
              addIndicator={addIndicator}
            />
          </div>

          {addIndicator &&
            addIndicator.map((unit) => {
              return (
                <div>
                  <label htmlFor="">{unit[0]}</label>
                  <input type="text" defaultValue={unit[1]} />
                </div>
              );
            })}

          <div>
            <section className="d-flex">
              <section>
                <p>Категори сонгох</p>
                <select id="category" name="category">
                  <option value="appliances">appliances</option>
                  <option value="computers & tablets">
                    computers & tablets
                  </option>
                  <option value="gaming console">gaming console</option>
                  <option value="telescope">telescope</option>
                </select>
              </section>
              <section>
                <p>Брэнд сонгох</p>
                <select id="country" name="country">
                  <option value="samsung">Samsung</option>
                  <option value="apple">Apple</option>
                </select>
              </section>
            </section>

            <section>
              {" "}
              <button className="offcanvas-body-button" type="submit">
                {" "}
                ХАДГАЛАХ uuid tatah
              </button>
            </section>
          </div>
        
        </form>
      </Offcanvas.Body>
    </>
  );
}
