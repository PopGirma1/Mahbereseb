import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {  Card } from 'semantic-ui-react';
import { Button } from "@mui/material";
import Search from"../../components/search";
import React, { useState } from "react";
import { Divider } from 'semantic-ui-react';
const Index = ({ notes }) => {

  const [search, setSearch] = useState("");

  const getFilteredChannels = () => {
    return notes.filter((user) =>
      search === ""
        ? true
        : user.firstName.toLowerCase().includes(search.toLowerCase())
    );
  };


  return (
    <div className="notes-container">
       <h1>Users</h1>
       <input
          onChange={(e) => setSearch(e.target.value)}
          className="users_search"
          placeholder="search user"
        />
        <Divider/>
      <div className="grid wrapper">
        {getFilteredChannels().reverse().map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/accountHolder/${note._id}`}>
                      <a>{note.firstName}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra className='viewAndEdit'>
                  <Link href={`/accountHolder/${note._id}`}>
                    <Button variant="contained">View</Button>
                  </Link>
                  <Link href={`/accountHolder/${note._id}/edit`}>
                    <Button variant="contained">Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}

export default Index;