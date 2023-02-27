function AddCakeForm({addCake,handleName,handleDescription,handleImage,handlePrice}){

    return(
        <>
            <h2>
                Add Cake
            </h2>
            <form onSubmit={(e)=>addCake(e)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" onChange={e=>handleDescription(e)} />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" onChange={e=>handleImage(e)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" onChange={e=>handlePrice(e)} />
                </div>
                <div>
                    <input type="submit" name="submit" value="submit" />
                </div>
            </form>
        </>
    )
}

export default AddCakeForm;