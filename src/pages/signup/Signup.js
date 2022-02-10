import { useState } from 'react';

// styles
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError('Please select a file.');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image.');
      return;
    }
    if (!selected.size > 100000) {
      setThumbnailError('The file size too big. Max size: 100kb.');
      return;
    }

    setThumbnail(null);
    setThumbnail(selected);
    console.log('thumbnail updated');
  };

  return (
    <form className='auth-form'>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          type='text'
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input type='file' required onChange={handleFileChange} />
        {thumbnailError && <div>{thumbnailError}</div>}
      </label>
      <button className='btn'>Sign up</button>
    </form>
  );
};

export default Signup;
