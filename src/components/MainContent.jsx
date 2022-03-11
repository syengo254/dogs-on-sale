import React from 'react';
import './MainContent.css';
import Card from './Card';
import dogs from '../dogs.js';

const MainContent = () => {
    const dogCards = dogs.map( dog => <Card key={ dog.id } dog= { dog } />);
    return ( 
        <main>
            <div className='slider'>
                <div className='cards'>
                    { dogCards }
                </div>
            </div>
        </main>
     );
}
 
export default MainContent;