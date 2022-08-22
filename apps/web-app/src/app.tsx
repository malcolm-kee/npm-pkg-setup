import { useState } from 'react';
import styles from './app.module.css';
import { isEmail } from './lib/validation';

export function App() {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.content}>
      <h1>Example App</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(ev) => setEmail(ev.target.value)} id="email" />
        <p>{isEmail(email) ? 'is valid email' : 'is not valid email'}</p>
      </div>
    </div>
  );
}
