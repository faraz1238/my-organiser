import { Button, TextField } from '@mui/material'
import { nanoid } from 'nanoid'
import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Swal from 'sweetalert2'
import { atomContacts } from '../../data/atom'
// import { setContactsToLocalStorage } from '../../utils/services'
import styles from './Contact.module.css'

export default function Contact() {
  const [contacts, setContacts] = useRecoilState(atomContacts)
 
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  function handleAddContact() {
    if (firstName == ''||lastName == ''||email == ''||number == '') {
      Swal.fire("Please fill all the fields to continue")
      return;
    }
    if (number.length <= 9) {
      Swal.fire("Please enter a valid number")
      return;
    }
    const tempContact = {
      id:nanoid(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      number:number
    }
    setContacts([...contacts ,tempContact])

    localStorage.setItem("contacts" ,JSON.stringify(contacts))

}
  return (
    <div className={styles.mainForm}>
      <h2>Add new contact</h2>
      <form action="">
      <TextField id="outlined-basic" type='text' onChange={(e)=>setFirstName(e.target.value)} label="First Name" variant="outlined" />
      <TextField id="outlined-basic"  type='text'onChange={(e)=>setLastName(e.target.value)} label="Last Name" variant="outlined" />
      <TextField id="outlined-basic"  onChange={(e)=>setEmail(e.target.value)} type='email' label="Email" variant="outlined" />
        <TextField id="outlined-basic" onChange={(e)=>setNumber(e.target.value)} type='number' label="Phone Number" variant="outlined" />
        <Button variant='containded' onClick={handleAddContact}>Add Contact</Button>

      </form>
    </div>
  )
}
