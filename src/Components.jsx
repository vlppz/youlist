import { useState } from "react"

function Button(props) {
    return (
        <button onClick={props.onClick} type="button" className={props.className + ' p-3 rounded-lg text-white hover:bg-gray-800 bg-black transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-300 dark:text-black dark:hover:bg-white dark:hover:shadow-gray-700'}>{props.text}</button>
    )
}

function ButtonSubmit(props) {
    return (
        <button onClick={props.onClick} type="submit" className={props.className + ' p-3 rounded-lg text-white hover:bg-gray-800 bg-black transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-300 dark:text-black dark:hover:bg-white dark:hover:shadow-gray-700'}>{props.text}</button>
    )
}

function ButtonSimple(props) {
    return (
        <button onClick={props.onClick} className={props.className + ' p-3 rounded-lg text-white hover:bg-gray-800 bg-black transition-all duration-500 ease-in-out transform hover:shadow-2xl dark:bg-gray-300 dark:text-black dark:hover:bg-white dark:hover:shadow-gray-700'}>{props.text}</button>
    )
}

function Link(props) {
    if (props.active) {
        return (
            <button onClick={props.onClick} className={props.className + ' overline decoration-2 font-bold text-black hover:text-slate-600 dark:hover:text-slate-400 transition-all ease-in-out duration-300 transform dark:text-gray-300'}>{props.text}</button>
        )
    } else {
        return (
            <button onClick={props.onClick} className={props.className + ' text-black dark:hover:text-slate-400 hover:text-slate-600 transition-all ease-in-out duration-300 transform dark:text-gray-300'}>{props.text}</button>
        )
    }
}

function Card(props) {
    return (
        <div className={props.className + ' dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:shadow-gray-800 dark:shadow-slate-800 bg-gray-100 rounded-lg p-7 shadow-md hover:shadow-xl hover:bg-gray-200 hover:bg-opacity-70 transition-all ease-in-out duration-500 flex flex-col sm:flex-row items-center'}>
            <img width="70rem" className="rounded-lg" src={props.img_src} alt='card img' />
            <div className="sm:ml-10">
                <h1 className="text-2xl font-medium dark:text-gray-300 text-center sm:text-left">{props.name}</h1>
                <h3 className="dark:text-gray-300 text-center sm:text-left">{props.desc}</h3>
            </div>
        </div>
    )
}

function CardCustom(props) {
    return (
        <div className={props.className + ' dark:bg-gray-700 dark:hover:bg-gray-600 dark:shadow-slate-800 dark:hover:shadow-gray-800 bg-gray-100 rounded-lg p-7 shadow-md hover:shadow-xl hover:bg-gray-200 hover:bg-opacity-70 transition-all ease-in-out duration-500 flex flex-row items-center'}>
            {props.custom}
            <div className="flex items-center flex-col">
                <h1 className="text-2xl font-medium dark:text-gray-300">{props.name}</h1>
                <h3 className="dark:text-gray-300">{props.desc}</h3>
            </div>
        </div>
    )
}

function SideBar(props) {
    return (
        <div className={props.className + " w-4/12 sm:w-2/12 h-full p-3 bg-gray-200 rounded-br-3xl rounded-tr-3xl"}>
            <div>
                {props.content}
            </div>
        </div>
    )
}

function SideBarLink(props) {
    if (props.active) {
        return (
            <button onClick={props.onClick} className={props.className + " bg-black text-white pt-3 pb-3 w-full rounded-xl transition-all ease-in-out duration-700 hover:shadow-2xl hover:bg-gray-800 sblnk"}>{props.text}</button>
        )
    } else {
        return (
            <button onClick={props.onClick} className={props.className + " bg-gray-500 text-white pt-3 pb-3 w-full rounded-xl transition-all ease-in-out duration-700 hover:shadow-2xl hover:bg-gray-700 sblnk"}>{props.text}</button>
        )
    }
}

function CardList(props) {
    return (
        <div className={props.className+" dark:bg-gray-700 dark:hover:bg-gray-600 dark:shadow-slate-800 dark:hover:shadow-gray-800 bg-gray-100 rounded-lg p-7 shadow-md hover:shadow-xl hover:bg-gray-200 hover:bg-opacity-70 transition-all ease-in-out duration-500 flex flex-row items-center"}>
            <div className="flex items-center flex-col w-full">
                <h1 className="text-2xl font-medium dark:text-gray-300 text-center">{props.name}</h1>
                <h3 className="dark:text-gray-300">{props.desc}</h3>
            </div>
        </div>
    )
}

function CardListItem(props) {
    return (
        <div className={props.className+" dark:bg-gray-500 dark:shadow-slate-600 dark:hover:shadow-gray-600 bg-gray-500 text-white rounded-lg p-3 shadow-md transition-all ease-in-out duration-500 flex flex-row items-center mt-5"}>
            <span>{props.contents}</span>
        </div>
    )
}

function Input(props) {
    return (
        <input type={props.type} className={props.className + " border-solid border-gray-400 hover:border-gray-600 focus:border-gray-600 outline-none border-2 rounded-lg p-2 text-lg transition-all ease-in-out duration-300 focus:shadow-lg dark:bg-slate-800 dark:text-white dark:border-gray-500 dark:hover:border-gray-300 dark:focus:border-gray-300 dark:focus:shadow-slate-800"} name={props.name} disabled={props.disabled} placeholder={props.placeholder} onChange={props.onChange} required={props.required} />
    )
}

function Checkbox(props) {
    const [checked, setChecked] = useState(props.checked);

    function clicked() {
        if (checked === true) {
            props.onClick(false);
            setChecked(false);
        } else {
            props.onClick(true);
            setChecked(true);
        }
    }

    return (
        <div className={props.className+" flex items-center"}>
            <span className="mr-2">{props.text}</span>
            <button type="button" className="w-6 h-6" onClick={() => {clicked()}}>
                <img draggable={false} alt="checkbox" src={checked ? "/checked.svg" : "/not-checked.svg"} />
            </button>
        </div>
    )
}

function InputFile(props) {
    return (
        <input type="file" className={props.className + " border-none outline-none border-2 rounded-lg transition-all ease-in-out duration-300 focus:shadow-lg file:p-2 file:rounded-lg file:text-white hover:file:bg-gray-800 file:bg-gray-600 file:transition-all file:duration-500 file:ease-in-out file:transform hover:file:-translate-y-1 hover:file:shadow-2xl dark:file:bg-gray-300 dark:file:text-gray-600 dark:hover:file:bg-white dark:hover:file:shadow-gray-700 file:mt-2 file:border-none file:cursor-pointer file:mr-3 max-sm:text-white"} />
    )
}

function Tab(props) {
    var selected = "";

    if (props.selected) {
        selected = " px-20 py-3 bg-black text-white";
    } else {
        selected = " text-white px-10 py-3 bg-gray-500 hover:bg-gray-600";
    }

    return (
        <button type="button" onClick={props.onClick} className={props.className+" transition-all ease-in-out duration-700"+selected}>
            {props.text}
        </button>
    )
}

export { Button, Link, Card, CardCustom, ButtonSimple, SideBar, SideBarLink, CardList, CardListItem, Input, ButtonSubmit, InputFile, Checkbox, Tab }