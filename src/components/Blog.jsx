import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Yo </h1>
        <p style={styles.subtitle}>
          Here i mosty write about the web3 projects i exlopre
        </p>
      </header>
      <section>
        <p style={styles.text}>
          
        </p>
      </section>
      <footer style={styles.footer}>
        <Link to="/" style={styles.link}>
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#000", // Full black background
    color: "#fff", // White text
    fontFamily: "'Courier New', monospace",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#ddd", // Slightly lighter white
  },
  text: {
    fontSize: "1rem",
    color: "#ddd",
    textAlign: "center",
    margin: "2rem 0",
  },
  footer: {
    textAlign: "center",
    marginTop: "auto",
    color: "#ccc", // Light gray for footer
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Blog;
