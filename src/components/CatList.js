import React from 'react'
import Table  from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';

export const CatList = ({ cats }) => {
  return (
      <Table striped bordered hover>
          <thead>
              <tr>
                <th>Breed</th>
                <th>Origin</th>
                <th>Indoor</th>
                <th>Weight (kg)</th>
              </tr>
          </thead>
          <tbody>
              {cats.map(cat => {
                  return (
                      <tr key={cat.id}>
                          <td><Link key={cat.id} to={`/cat/${cat.id}`}>{cat.name}</Link></td>
                          <td>{cat.origin}</td>
                          <td>{cat.indoor ? 'Yes' : 'No'}</td>
                          <td>{cat.weight.imperial}</td>
                      </tr>
                  )
              })}
          </tbody>
      </Table>
  )
}
