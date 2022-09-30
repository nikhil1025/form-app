import React, { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Record {
    id: number;
    title: string;
    description: string;
    email: string;
    range: number;
    valid: boolean;
};

export const Form = () => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [range, setRange] = useState<number>(32);
    const [valid, setValid] = useState<boolean>(false);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        const storedValues = localStorage.getItem("records");
        let recordList: Record[] = storedValues ? JSON.parse(storedValues) : [];

        const data: Record = {
            id: recordList.length + 1,
            title, description, email, range, valid
        }

        if (recordList) {
            recordList.push(data);
            const finalData: Record[] = [...recordList, data];
            console.log(finalData);
            localStorage.setItem("records", JSON.stringify(finalData));
        }
    };

    return (
        <div>
            <h1 className="w-100 text-center p-5 bg-dark text-light">Add new</h1>
            <div className="p-5">
                <form className="row g-3 needs-validation">

                    <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">Title</label>
                        <input type="text" className="form-control" id="validationCustom01" value={title} onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} placeholder="John Doe" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Email</label>
                        <input type="email" className="form-control" id="validationCustom02" value={email} onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} placeholder="abc@ecxample.com" required />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="validationCustom03" className="form-label text-start">Description</label>
                        <textarea className="form-control" id="validationCustom03" value={description} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value)} placeholder="Put your message" />
                    </div>
                    <div className="col-md-12">

                        <label htmlFor="customRange3" className="form-label">range</label>
                        <input type="range" className="form-range" min="0" max={100} step={1} value={range} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            console.log(event.target.value);
                            setRange(parseInt(event.target.value))
                        }} id="customRange3"></input>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <div className="d-flex">
                                <input className="form-check-input me-3" type="checkbox" checked={valid} onChange={(event: ChangeEvent<HTMLInputElement>) => setValid(event.target.checked)} value="" id="invalidCheck" required />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Is it Valid?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={handleSubmit} type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
