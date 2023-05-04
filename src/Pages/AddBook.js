import React, { useState } from 'react';
import BookEntry from '../Components/BookEntry';
import BookList from '../Components/BookList';
import Button from '../Components/Button';
import Header from '../Components/Header';
import { addDoc } from 'firebase/firestore';
import { formRef } from '../Firebase/firebase.js';


const AddBook = (props) => {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        bookName: "",
        age: "",
        date: "",
        page: "",
        bookType: "",
    });

    //------ Data send to Firebase ------//
    const addData = async () => {
        await addDoc(formRef, formData);
    }


    //------ Next Button Function ------//
    const nextStep = () => {

        //------ Blank Field Checking  ------//
        const form = document.querySelector('form');
        if (!form.checkValidity()) {
            return;
        }

        setPage(page + 1);
        addData()

    };

    //------ Previous Button Function ------//
    const prevStep = () => {
        setPage(page - 1);
    };

    //------ Form Component Display ------//
    const pageDisplay = () => {
        if (page === 1) {
            return (<BookEntry formData={formData} setFormData={setFormData} />)
        }
        else if (page === 2) {
            return (<BookList formData={formData} setFormData={setFormData} />)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <div className='container lg:px-96 md:px-24 px-5 pt-10  mx-auto text-center'>
                <Header />
                <form className='mt-6' onSubmit={handleSubmit}>
                    {/* components */}
                    <div>{pageDisplay()}</div>
                    <div className='mt-10 mb-10 space-y-6'>
                        {
                            page < 2 ? <Button onClick={nextStep}>{'Add Movie'}</Button> : null
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBook