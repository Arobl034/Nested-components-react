import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Booklist(){
  return (
  <section className='booklist'>
<Book />
<Book />
<Book />
<Book />
<Book />
<Book />


  </section>
  );
}

const Book = ()=> {
return <article>
  <Image />
  <Title />
  <Author />
</article>
}; 
const Image = ()=> <img src="https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg" alt=""/>
const Title = ()=> <h3>Dog Man: Grime and Punishment:</h3>
const Author = ()=> <h6>Dav Pilkey</h6>

//const Greeting = () => {
//  return React.createElement('h1', {}, 'hello world');
//};


ReactDOM.render(<Booklist />,document.getElementById('root'))


