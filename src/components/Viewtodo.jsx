import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Viewtodo = () => {

    const [loader, xloader] = useState(true)



    const [todoData, xtodoData] = useState(
        { "todos": [{ "id": 1, "todo": "Do something nice for someone you care about", "completed": false, "userId": 152 }, { "id": 2, "todo": "Memorize a poem", "completed": true, "userId": 13 }, { "id": 3, "todo": "Watch a classic movie", "completed": true, "userId": 68 }, { "id": 4, "todo": "Watch a documentary", "completed": false, "userId": 84 }, { "id": 5, "todo": "Invest in cryptocurrency", "completed": false, "userId": 163 }, { "id": 6, "todo": "Contribute code or a monetary donation to an open-source software project", "completed": false, "userId": 69 }, { "id": 7, "todo": "Solve a Rubik's cube", "completed": true, "userId": 76 }, { "id": 8, "todo": "Bake pastries for yourself and neighbor", "completed": true, "userId": 198 }, { "id": 9, "todo": "Go see a Broadway production", "completed": false, "userId": 7 }, { "id": 10, "todo": "Write a thank you letter to an influential person in your life", "completed": true, "userId": 9 }, { "id": 11, "todo": "Invite some friends over for a game night", "completed": false, "userId": 104 }, { "id": 12, "todo": "Have a football scrimmage with some friends", "completed": false, "userId": 32 }, { "id": 13, "todo": "Text a friend you haven't talked to in a long time", "completed": true, "userId": 2 }, { "id": 14, "todo": "Organize pantry", "completed": false, "userId": 46 }, { "id": 15, "todo": "Buy a new house decoration", "completed": true, "userId": 105 }, { "id": 16, "todo": "Plan a vacation you've always wanted to take", "completed": true, "userId": 162 }, { "id": 17, "todo": "Clean out car", "completed": false, "userId": 71 }, { "id": 18, "todo": "Draw and color a Mandala", "completed": true, "userId": 6 }, { "id": 19, "todo": "Create a cookbook with favorite recipes", "completed": true, "userId": 53 }, { "id": 20, "todo": "Bake a pie with some friends", "completed": false, "userId": 162 }, { "id": 21, "todo": "Create a compost pile", "completed": false, "userId": 13 }, { "id": 22, "todo": "Take a hike at a local park", "completed": true, "userId": 37 }, { "id": 23, "todo": "Take a class at local community center that interests you", "completed": true, "userId": 65 }, { "id": 24, "todo": "Research a topic interested in", "completed": true, "userId": 130 }, { "id": 25, "todo": "Plan a trip to another country", "completed": false, "userId": 140 }, { "id": 26, "todo": "Improve touch typing", "completed": false, "userId": 178 }, { "id": 27, "todo": "Learn Express.js", "completed": false, "userId": 194 }, { "id": 28, "todo": "Learn calligraphy", "completed": false, "userId": 80 }, { "id": 29, "todo": "Have a photo session with some friends", "completed": true, "userId": 91 }, { "id": 30, "todo": "Go to the gym", "completed": true, "userId": 142 }], "total": 254, "skip": 0, "limit": 30 }
    )


    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then(
            (res) => {
                xloader(false)
                xtodoData(res.data)
            }
        ).catch(
            () => {
                alert("Something went wrong")
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div className="bg-primary-subtle p-4 rounded">
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {todoData.todos.map(
                                (value, index) => {
                                    return (

                                        <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            {loader ? (<div class="d-flex justify-content-center">
                                                <div class="spinner-border" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </div>) : (<div className="card h-100 shadow-sm border-0 rounded-4 bg-light">
                                                <div class="card-header">
                                                    {value.todo}
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item"><b>ID</b>: {value.id}</li>
                                                    <li class="list-group-item"><b>User ID:</b> {value.userId}</li>
                                                    <li class="list-group-item"><b>Completed:</b> {value.completed ? <p className='text-success'>Done✅</p> : <p className='text-danger'>Not Done❌</p>}</li>
                                                </ul>
                                            </div>
                                            )

                                            }
                                        </div>


                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Viewtodo