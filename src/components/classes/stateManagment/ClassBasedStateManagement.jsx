import React from 'react';
export const API_URL = 'https://jsonplaceholder.typicode.com/users';

class ClassBasedStateManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    

    async componentDidMount() {
        console.log("componentDidMount");
        // fetch(API_URL)
        //     .then((res) => res.json())
        //     .then((json) => {
        //         this.setState({
        //             items: json,
        //             DataisLoaded: true
        //         });
        //     })
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log("result",data)
            this.setState({
                items: data,
                DataisLoaded: true
            });
        }
        catch(error){
            console.log("error Massage", error);
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
        this.setState({
            items: [],
            DataisLoaded: false
        });
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>  
                <ul>
                    { items.map((item) => (
                        <li key={item.id} >
                            User_Name: {item.username},
                            Full_Name: {item.name},
                            User_Email: {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ClassBasedStateManagement;