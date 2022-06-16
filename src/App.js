import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


const App = ()=> {

    let users = [ {
        model: 'EPIX PRO',
        modification: 'workstation',
        price: 140100,
        id: 1,

    },
    {
        model: 'NANO PRO',
        modification: 'workstation',
        price: 173300,
        id: 2,

    },
    {
        model: 'LUMEN PRO',
        modification: 'workstation',
        price:178100,
        id:3,

    },
    {
        model:'CYBER',
        modification: 'gamestation',
        price: 334600, 
        id:4,

    },
    {
        model:'CONCEPT',
        modification:'gamestation',
        price: 775600,
        id: 5,

    }


    ];


return(

    <div className='container'>
<Header />
<Section users = {users} />  
<Footer />
</div>

)

}

export default App;
