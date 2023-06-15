import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { atomContacts } from '../../data/atom'
import styles from './Home.module.css'

export default function Home() {


  const [contacts, setContacts] = useRecoilState(atomContacts)

  
  function handleClearData() {
    setContacts([])
  }
  return (
    <div>
      <div className={styles.introSection}>
        <p>
Welcome to our Contact and Task Management website! Simplify your life and boost your productivity with our user-friendly platform. Store and organize all your contacts in one place, and manage your tasks effortlessly. Stay organized, stay on top of deadlines, and accomplish more.</p>
      </div>
      <div className={styles.contacts}>
        <h3>Saved Contacts</h3>
        {contacts.map((ele,i) => (
          <div>
            {i + 1} {ele.firstName} {ele.lastName}
          </div>
        ))}
         <Button variant='contained' onClick={handleClearData}>Clear</Button>
      </div>
     
    </div>
  )
}
