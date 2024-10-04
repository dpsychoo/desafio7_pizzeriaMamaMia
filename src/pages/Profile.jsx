import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1>Perfil</h1>
      <p style={styles.email}>Email: user@example.com</p>
      <button style={styles.button} onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  email: {
    fontSize: '1.25rem',
    margin: '1rem 0',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#ff6347',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Profile;
