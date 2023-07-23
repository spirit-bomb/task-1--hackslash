import React,{useState} from 'react'
import './styling.css'
function Work() {
    
    const [book,setCards]=useState([
        {
            id:1,
            Name:"tiger",
            About:`The tiger (Panthera tigris) is the 
            largest living cat species and a member of 
            the genus Panthera. It is most recognisable 
            for its dark vertical stripes on orange fur 
            with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar.`
        },
        {
            id:2,
            Name:"Lion",
            About:`The lion (Panthera leo) is a large cat 
            of the genus Panthera native to Africa and 
            India. It has a muscular, broad-chested body;
             short, rounded head; round ears; and a hairy
              tuft at the end of its tail.`
        },
        {
            id:3,
            Name:"Fox",
            About:`Foxes are small to medium-sized, 
            omnivorous mammals belonging to several genera
             of the family Canidae. They have a flattened
              skull, upright, triangular ears, a pointed,
               slightly upturned snout, and a long bushy
                tail `
        },
        {
            id:4,
            Name:'Rhinoceros',
            About:`Rhinoceroses are some of the largest 
            remaining megafauna: all weigh at least one 
            tonne in adulthood. They have a herbivorous 
            diet, small brains 400–600g for mammals of 
            their size, one or two horns, and a thick, 
            protective skin formed from layers of collagen 
            positioned in a lattice structure.`
        }
    ])
    const [search,setSearch]=useState('');
    const searchFunc=(event)=>{
        setSearch(event.target.value)
    }
    function removeCard(id){
        const newList=book.filter((item)=>item.id!==id);
        setCards(newList);
    }
    
    
  return (
    
    <div className="content">
        <div className='upperbox'>
        <img src={require('./bird.jpg')}className='img' alt=''/>
        </div>
        <div className='lowerbox'>
            <div className='searchbar'>
        <input type="text" placeholder="search animal"
        onChange={searchFunc} value={search} className="bar"></input>
        </div>
        <div className='mcontent'>
        <div className='body'>
            {book.filter((list)=>{
                if(search===''){
                    return list
                }
                else if(list.Name.toLowerCase().includes(search.toLowerCase())){
                    return list
                }
            }).map(list=>{
                return(
                <div className="cards" key={list.id} >
                    <h2 className="head">{list.Name} </h2>
                    <div className='about'>{list.About}</div>
                    
                    <button className='delbtn' onClick={()=>removeCard(list.id)} >X</button>
                </div>
            )}
            
                )}
        </div>
        </div>
        </div>
    </div>
    
  )
}

export default Work
