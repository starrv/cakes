import Cake from "./Cake";
import AddCakeForm from "./AddCakeForm";
import {useState,useEffect} from "react";

function CakeMenu(){

    const URL="http://localhost:3001/cakes";

    const [cakes,setCakes]=useState([]);

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");

    useEffect(()=>{
        console.log("getting ready to fetch cakes");
        fetchCakes();
    },[]);

    function fetchCakes(){
        fetch(URL)
        .then(res=>res.json())
        .then(cakes=>{
            console.log(cakes);
            setCakes(cakes);
        })
    }

    function addCake(e){
        e.preventDefault();

        const newCake={};

        newCake.name=name;
        newCake.description=description;
        newCake.image=image;
        newCake.price=price;
        newCake.likes=0;

        fetch(URL,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify(newCake)
        })
        .then(res=>res.json())
        .then(cake=>{
            setCakes([...cakes,cake]);
        })
        .catch(e=>console.log(e));


    }

    function handleName(e){
        setName(e.target.value);
    }

    function handleDescription(e){
        setDescription(e.target.value);
    }

    function handleImage(e){
        setImage(e.target.value);
    }

    function handlePrice(e){
        setPrice(e.target.value);
    }

    const cakesToDisplay=cakes.map(cake=>{
        return <Cake key={cake.id} cake={cake} />
    });
    
    return(
        <>
            <div id="cakeMenu">
                {cakesToDisplay}
            </div>
            <AddCakeForm addCake={addCake} handleName={handleName} handleDescription={handleDescription} handleImage={handleImage} handlePrice={handlePrice} />
        </>
    );
}

export default CakeMenu;