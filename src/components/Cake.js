function Cake({cake:{name,description,image,price,likes}}){
    //console.log(cake);
    return(
        <div className="cake">
            <h1>
               {name}
            </h1>
            <p>
               {description}
            </p>
            <img src={image} alt="cake" />
            <p>
               ${price}
            </p>
            <p>
                {likes} likes
            </p>
        </div>
    )
}

export default Cake;