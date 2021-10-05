//算法1




//算法2
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    for(let i = 0 ; i<Math.floor(s.length/2);i++)
        if(s[i]!==s[s.length-1-i])
            return false
    return true
};



//react1
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [list, setList] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.github.com/users?per_page=100')
      .then(res => { setList(res.data) })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleDetial = (login) => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then(res => { setDetail(res.data) })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <div>
        <h2>List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, login, avatar_url }) => {
              return <tr key={id} onClick={() => handleDetial(login)}>
                <td>{id}</td>
                <td>{login}</td>
                <td>
                  <img
                    src={avatar_url}
                    alt={`avatar for ${login}`}
                    style={{ height: 50, width: 50 }}
                  />
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Detail:</h2>

        {detail && <div>
          name:   {detail.login}
          location:   {detail.location}
          following:  {detail.following}
          followers:  {detail.followers}
        </div>}

      </div>
    </div>
  )
}

export default App;