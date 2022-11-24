import React from 'react'
import todo from '../images/todo.webp'
import '../css/Todo.css'
import { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('')
        }

    }

    // delete items
    const deleteItem = (id) => {
        const updatedItems = items.filter((elem, ind) => {
            return ind !== id;
        })
        setItems(updatedItems);

    }
    const removeAll = () => {
        setItems([]);
    }


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="Todoimage" />
                        <figcaption>Add Your List Here ✌️</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder='✍️ Add Items ...'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i class="fa-solid fa-plus fa add-btn" title='Add Item' onClick={addItem} ></i>
                    </div>

                    <div className="showItems">

                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i class="fa-solid fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(ind)} ></i>
                                    </div>
                                )
                            })
                        }


                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll} ><span>Check List</span> </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo