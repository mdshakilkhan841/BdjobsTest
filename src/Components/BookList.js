import React, { useEffect, useState } from "react";
import { getDocs } from 'firebase/firestore';
import { formRef } from '../Firebase/firebase';

const BookList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Retrieve data from Firebase
        async function getData() {
            //Getting data from Firebase and store a new array and displaying
            const getData = await getDocs(formRef);
            let newData = [];
            getData.forEach((doc) => {
                const bookData = doc.data();
                // Add the document ID to the data object
                newData.push({ ...bookData, id: doc.id });
            });
            setData(newData);
        }
        getData();
    }, []);

    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 text-center">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                                        >
                                            SL
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                                        >
                                            Book Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        data.map((e, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {index+1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {e.bookName}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap flex justify-between">
                                                        <a className="text-green-500 hover:text-green-700" href="#" >
                                                            Edit
                                                        </a>
                                                        <a className="text-red-500 hover:text-red-700" href="#" >
                                                            Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookList