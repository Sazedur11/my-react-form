

const Home = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
        console.log('submited')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-gray-400 w-1/2 mx-auto mt-20 p-10">
                <input className="border-2 border-gray-300 mb-2 p-1" type="text" name="name" />
                <br />
                <input className="border-2 border-gray-300 mb-2 p-1" type="email" name="email" id="" />
                <br />
                <input className="border-2 border-gray-300 mb-2 p-1" type="number" name="phone" id="" />
                <br />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;