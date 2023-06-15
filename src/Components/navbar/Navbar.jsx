import { Button } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <h4>My Organizer</h4>
      </div>
      <div className={styles.rightSection}>
        <Button onClick={() => navigate("/")} variant="contained">
          Home
        </Button>
        <Button onClick={() => navigate("/contact")} variant="contained">
          Contact
        </Button>
        <Button onClick={() => navigate("/task")} variant="contained">
          Task
        </Button>
      </div>
    </div>
  );
}
