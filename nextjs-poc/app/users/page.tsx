import React from 'react'
import ProductList from '../components/productList';
import { revalidatePath } from 'next/cache';

interface Users {
  id: number;
  name:string;
  email: string;
}
const UsersPage = async() => {
  // for disabling cache add bellow code in fetch 
  // {cache: 'no-store'}
  // for keeping a data fresh for certain period of time 
  // {next: {revalidate: 10}}
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const users: Users[] = await res.json();
  return (
    <div>
      <ProductList></ProductList>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <th>Name</th>
          <th>Email</th>
          </thead>
          <tbody>
            {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td> 
              <td>{user.email}</td>
             </tr>
        ))}
          </tbody>
        </table>

    </div>
  )
}

export default UsersPage;