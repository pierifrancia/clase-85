import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './components/Card.js';


function App() {

  const gatos = [
    {
      name: 'Rodolfo',
      shortDesc:
        'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'http://www.placekitten.com/800',
      colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
      sexo: 'm',
    },

    {
      name: 'Muzzarella',
      shortDesc:
        'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'http://www.placekitten.com/800',
      colores: ['gris'],
      sexo: 'f',
    },

    {
      name: 'Artilugia',
      shortDesc:
        'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'http://www.placekitten.com/400',
      colores: ['negro', 'blanco'],
      sexo: 'f',
    },

    {
      name: 'Wosito',
      shortDesc:
        'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'http://www.placekitten.com/500',
      colores: ['rayado'],
      sexo: 'm',
    },

    {
      name: 'Calamardo',
      shortDesc:
        'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
      longDesc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
      img:
        'http://www.placekitten.com/600',
      colores: ['negro'],
      sexo: 'm',
    },
  ];

  return (
  
      <section className="card">
        {gatos.map((gato, index) => {
          return <Card key={index} info={gato} />
        })}
      </section>
   
  );
}

export default App;