import React, { Component } from 'react';
import './App.css';
import Autocomplete from './Autocomplete';
class App extends Component {

 

  render() {
    var projects = [
      {
          id:'BB00001',
          name: 'Prisha',
          address: 'Cecilia Chapman 711-2880 Nulla St Mankato Mississippi',
          item:'',
          pincode:'636501'

         
      },
      {
        id:'BB00031',
        name: 'Anaya',
        address: 'P.O. Box 283 8562 Fusce Rd.',
        item:'',
        pincode:'636502'
        
      },
      {
        id:'BB00091',
        name: 'Dhvija',
        address: '606-3727 Ullamcorper. Street',
        item:'',
        pincode:'636503'
        
      },
      {
        id:'BB00221',
          name: 'Divisha',
          address: 'Ap #867-859 Sit Rd.',
          item:'',
          pincode:'636504'
         
      },
      {
        id:'BB00491',
        name: 'Saanvi',
        address: 'San Antonio MI 47096',
        item:'',
        pincode:'636401'
        
      },
      {
        id:'BB00491',
        name: 'Baljiwan',
        address: 'Ap #651-8679 Sodales Av.Tamuning PA 10855',
        item:'',
        pincode:'636301'
        
      },
      {
        id:'BB00079',
        name: 'Chaitanya',
        address: 'Corona New Mexico 08219',
        item:'',
        pincode:'696501'
        
      },
      {
        id:'BB00284',
        name: 'Dhruv',
        address: 'P.O. Box 887 2508 Dolor. Av.',
        item:'',
        pincode:'626501'
        
      },
      {
        id:'BB008367',
        name: 'Ekapad',
        address: '935-9940 Tortor. Street',
        item:'',
        pincode:'636501'
        
      },
      {
        id:'BB0023',
        name: 'Faras',
        address: 'Ap #696-3279 Viverra. Avenue',
        item:'',
        pincode:'206501'
        
      },
      {
        id:'BB00223',
        name: 'Gautam',
        address: '.O. Box 147 2546 Sociosqu Rd.',
        item:'',
        pincode:'346501'
        
      },
      {
        id:'BB00483',
        name: 'Harish',
        address: '5543 Aliquet St.',
        item:'',
        pincode:'636501'
        
      },
      {
        id:'BB00493',
        name: 'Jason',
        address: 'Miami Beach North Dakota 58563',
        item:'',
        pincode:'4036501'
        
      },
      {
        id:'BB00394',
        name: 'Karan',
        address: 'P.O. Box 886 4118 Arcu St.',
        item:'',
        pincode:'596501'
        
      },
      {
        id:'BB00328',
        name: 'Laksh',
        address: 'Idaho Falls Rhode Island 37232',
        item:'',
        pincode:'6340001'
        
      }

  ];
    return (
      <div className="App">
        <Autocomplete
          suggestions={projects}
        />

      </div>
    );
  }
}

export default App;