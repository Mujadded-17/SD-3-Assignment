const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My Website</h1>
      <p style={styles.subtitle}>
        A minimal homepage built with React & internal CSS<br></br>
        For CSE 2200 Software Development Course
      </p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Home;
