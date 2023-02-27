import Cake from "./Cake";
import AddCakeForm from "./AddCakeForm";
import {useState} from "react";

function CakeMenu(){

    const [cakes,setCakes]=useState([]);
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");

    
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

    return(
        <>
            <div id="cakeMenu">
            
            </div>
            <AddCakeForm handleName={handleName} handleDescription={handleDescription} handleImage={handleImage} handlePrice={handlePrice} />
        </>
    );
}

export default CakeMenu;