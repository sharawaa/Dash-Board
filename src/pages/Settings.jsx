 import "../styles/settings.css"






export default function Settings() {
  return(
  <div className="settings-container">
    <div className="settings">

        <section className="settings-title">
          <p className="settings-title-p">  Тохиргоо</p>
        </section>
   
        <section className="settingsBody">
          <section> 
            <p>Хуучин нууц үг</p>
            <input type="text" />
          </section>
          <section>
            <p>Шинэ нууц үг</p>
            <input type="text" />
          </section>
          <section>
            <p>Шинэ нууц үг давтах</p>
            <input type="text" />
          </section>
          <section>
            <button>Хадгалах</button>
          </section>
        </section>
    </div>;
  </div>
  )
}
