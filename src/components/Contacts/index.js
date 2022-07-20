import {useState,useEffect} from 'react'
import List from './List/index'
import Form from './Form/index'
import "./style.css";
function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullname: 'Metin',
            phone_number:"123123",
        },
        {
            fullname: 'Hiloş',
            phone_number:"132132",
        },
        {
            fullname: 'Senoş',
            phone_number:"123321",
        }

    ]);
    useEffect(()=>{
     console.log(contacts)   
    },[contacts])
  return (
    <div id='container'>
        <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
