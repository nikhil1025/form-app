import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface Record {
    id: number;
    title: string;
    description: 'desc1';
    email: 'test@test.com';
    range: 32;
    valid: true;
};

export const Home = () => {

    const [items, setItems] = useState<Record[]>(() => {
        const storedValues = localStorage.getItem("records");
        return storedValues ? JSON.parse(storedValues) : [];
    });

    let slno = 0;

    return (
        <div>
            <Link to="/create">Form Page</Link>
            <h1 className="w-100 text-center p-5 bg-dark text-light">Records</h1>
            <div className="p-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Email</th>
                            <th scope="col">Range</th>
                            <th scope="col">isValid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((data: Record, index: number) => {
                            if (data.range > 29 && data.range < 61 && data.valid) {
                                slno++;
                                return <tr key={index} className="record-row">
                                    <th scope="row">{slno}</th>
                                    <td>{data.title}</td>
                                    <td>{data.description}</td>
                                    <td>{data.email}</td>
                                    <td>{data.range}</td>
                                    <td>{data.valid.toString()}</td>
                                </tr>
                            }
                            return <tr key={index} ></tr>;
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
