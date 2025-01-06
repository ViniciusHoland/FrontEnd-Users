import "./style.css";
import Trash from "../../assets/trash.png";
import api  from "../../services/api";
import { useEffect, useState , useRef} from "react"; // userefect vai executar sempre que a pagina abrir 


// react hock - useRef 

function Home() {

  // aqui são declarados estados do react, USERS é minha variavel e declarando dessa forma eu consigo mudar e mostrar na tela
  const [users, setUsers] = useState([])


  // dessa forma eu consigo salvar os dados do meu input aqui dentro
  const inputName = useRef()
  const inputaAge = useRef()
  const inputEmail = useRef()


  async function getUsers(){

    const userFromApi = await api.get('/users')
    
    setUsers(userFromApi.data) // agora sim ele altera os usarios e mostra na tela
    console.log(users)

  }

  async function createUsers(){

    //const userFromApi = await api.get('/users')
    
    await api.post('/users', {
      name: inputName.current.value,
      age: inputaAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()

  }

  //vai executar sempre que a pagina abrir 
  useEffect(() => {

    getUsers()

  },[])

  

  return (
    <div className="containe">
      <form action="">
        <h1>Cadasto de usuarios</h1>
        <input type="text" name="nome" placeholder="Nome" ref={inputName} />
        <input type="number" name="idade" placeholder="Numero" ref={inputaAge} />
        <input type="email" name="email" placeholder="Email" ref={inputEmail} />
        <button type="button" onClick={createUsers}> Cadastrar </button>
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
