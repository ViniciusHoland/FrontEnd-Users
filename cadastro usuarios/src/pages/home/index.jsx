import "./style.css";
import Trash from "../../assets/trash.png";

function Home() {
  const users = [
    {
      id: "2faf4a5f44f54",
      name: "Vinicius",
      age: 33,
      email: "vini@gmail.com",
    },
    { id: "51fafaf54f", 
      name: "Maria", 
      age: 13, 
      email: "maria@gmail.com" },
      { id: "hdjgj154jg45f5", 
        name: "Heloise", 
        age: 20, 
        email: "helo@gmail.com" }
      
  ];

  return (
    <div className="containe">
      <form action="">
        <h1>Cadasto de usuarios</h1>
        <input type="text" name="nome" placeholder="Nome" />
        <input type="number" name="idade" placeholder="Numero" />
        <input type="email" name="email" placeholder="Email" />
        <button type="button"> Cadastrar </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span> {user.name}</span></p>
            <p>Idade: <span> {user.age}  </span></p>
            <p>Email: <span> {user.email}   </span></p>
          </div>
          <button>
            <img src={Trash} alt="" width="20px" />
          </button>
        </div>
      ))}


    </div>
  );
}

export default Home;
