import { useState } from 'react';
import { Image } from 'next/image';

function Button(props) {
	return (
		<button
			onClick={props.onClick}
			type="button"
			className={
				props.className +
				' transform rounded-lg bg-black p-3 text-white transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-gray-800 hover:shadow-2xl dark:bg-gray-300 dark:text-black dark:hover:bg-white dark:hover:shadow-gray-700'
			}
		>
			{props.text}
		</button>
	);
}

function ButtonSubmit(props) {
	return (
		<button
			onClick={props.onClick}
			disabled={props.disabled}
			type="submit"
			className={
				props.className +
				' transform rounded-lg bg-black p-3 text-white transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-gray-800 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-black disabled:hover:shadow-none dark:bg-gray-300 dark:text-black dark:hover:bg-white dark:hover:shadow-gray-700 disabled:dark:opacity-60 disabled:dark:hover:bg-gray-300'
			}
		>
			{props.text}
		</button>
	);
}

function ButtonSimple(props) {
	return (
		<button
			onClick={props.onClick}
			className={
				props.className +
				' transform rounded-lg bg-black p-3 text-white transition-all duration-500 ease-in-out hover:bg-gray-800 hover:shadow-2xl dark:bg-gray-300 dark:text-black dark:hover:bg-white dark:hover:shadow-gray-700'
			}
		>
			{props.text}
		</button>
	);
}

function Link(props) {
	if (props.active) {
		return (
			<button
				onClick={props.onClick}
				className={
					props.className +
					' transform font-bold text-black overline decoration-2 transition-all duration-300 ease-in-out hover:text-slate-600 dark:text-gray-300 dark:hover:text-slate-400'
				}
			>
				{props.text}
			</button>
		);
	} else {
		return (
			<button
				onClick={props.onClick}
				className={
					props.className +
					' transform text-black transition-all duration-300 ease-in-out hover:text-slate-600 dark:text-gray-300 dark:hover:text-slate-400'
				}
			>
				{props.text}
			</button>
		);
	}
}

function Card(props) {
	return (
		<div
			className={
				props.className +
				' flex flex-col items-center rounded-lg bg-gray-100 p-7 shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-70 hover:shadow-xl dark:bg-gray-700 dark:shadow-slate-800 dark:hover:bg-gray-600 dark:hover:shadow-gray-800 sm:flex-row'
			}
		>
			<Image
				width="70rem"
				className="rounded-lg"
				src={props.img_src}
				alt="card img"
			/>
			<div className="sm:ml-10">
				<h1 className="text-center text-2xl font-medium dark:text-gray-300 sm:text-left">
					{props.name}
				</h1>
				<h3 className="text-center dark:text-gray-300 sm:text-left">
					{props.desc}
				</h3>
			</div>
		</div>
	);
}

function CardCustom(props) {
	return (
		<div
			className={
				props.className +
				' flex flex-row items-center rounded-lg bg-gray-100 p-7 shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-70 hover:shadow-xl dark:bg-gray-700 dark:shadow-slate-800 dark:hover:bg-gray-600 dark:hover:shadow-gray-800'
			}
		>
			{props.custom}
			<div className="flex flex-col items-center">
				<h1 className="text-2xl font-medium dark:text-gray-300">{props.name}</h1>
				<h3 className="dark:text-gray-300">{props.desc}</h3>
			</div>
		</div>
	);
}

function SideBar(props) {
	return (
		<div
			className={
				props.className +
				' h-full w-4/12 rounded-br-3xl rounded-tr-3xl bg-gray-200 p-3 sm:w-2/12'
			}
		>
			<div>{props.content}</div>
		</div>
	);
}

function SideBarLink(props) {
	if (props.active) {
		return (
			<button
				onClick={props.onClick}
				className={
					props.className +
					' sblnk w-full rounded-xl bg-black pt-3 pb-3 text-white transition-all duration-700 ease-in-out hover:bg-gray-800 hover:shadow-2xl'
				}
			>
				{props.text}
			</button>
		);
	} else {
		return (
			<button
				onClick={props.onClick}
				className={
					props.className +
					' sblnk w-full rounded-xl bg-gray-500 pt-3 pb-3 text-white transition-all duration-700 ease-in-out hover:bg-gray-700 hover:shadow-2xl'
				}
			>
				{props.text}
			</button>
		);
	}
}

function CardList(props) {
	return (
		<div
			className={
				props.className +
				' flex flex-row items-center rounded-lg bg-gray-100 p-7 shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-70 hover:shadow-xl dark:bg-gray-700 dark:shadow-slate-800 dark:hover:bg-gray-600 dark:hover:shadow-gray-800'
			}
		>
			<div className="flex w-full flex-col items-center">
				<h1 className="text-center text-2xl font-medium dark:text-gray-300">
					{props.name}
				</h1>
				<h3 className="dark:text-gray-300">{props.desc}</h3>
			</div>
		</div>
	);
}

function CardListItem(props) {
	return (
		<div
			className={
				props.className +
				' mt-5 flex flex-row items-center rounded-lg bg-gray-500 p-3 text-white shadow-md transition-all duration-500 ease-in-out dark:bg-gray-500 dark:shadow-slate-600 dark:hover:shadow-gray-600'
			}
		>
			<span>{props.contents}</span>
		</div>
	);
}

function Input(props) {
	return (
		<input
			type={props.type}
			className={
				props.className +
				' rounded-lg border-2 border-solid border-gray-400 p-2 text-lg outline-none transition-all duration-300 ease-in-out hover:border-gray-600 focus:border-gray-600 focus:shadow-lg dark:border-gray-500 dark:bg-slate-800 dark:text-white dark:hover:border-gray-300 dark:focus:border-gray-300 dark:focus:shadow-slate-800'
			}
			id={props.id}
			name={props.name}
			disabled={props.disabled}
			placeholder={props.placeholder}
			onChange={props.onChange}
			required={props.required}
		/>
	);
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
		<div className={props.className + ' flex items-center'}>
			<span className="mr-2">{props.text}</span>
			<button
				type="button"
				className="h-6 w-6"
				onClick={() => {
					clicked();
				}}
			>
				<Image
					draggable={false}
					alt="checkbox"
					src={checked ? '/checked.svg' : '/not-checked.svg'}
				/>
			</button>
		</div>
	);
}

function InputFile(props) {
	return (
		<input
			type="file"
			className={
				props.className +
				' rounded-lg border-2 border-none outline-none transition-all duration-300 ease-in-out file:mt-2 file:mr-3 file:transform file:cursor-pointer file:rounded-lg file:border-none file:bg-gray-600 file:p-2 file:text-white file:transition-all file:duration-500 file:ease-in-out hover:file:-translate-y-1 hover:file:bg-gray-800 hover:file:shadow-2xl focus:shadow-lg dark:file:bg-gray-300 dark:file:text-gray-600 dark:hover:file:bg-white dark:hover:file:shadow-gray-700 max-sm:text-white'
			}
		/>
	);
}

function Tab(props) {
	var selected = '';

	if (props.selected) {
		selected = ' px-20 py-3 bg-black text-white';
	} else {
		selected = ' text-white px-10 py-3 bg-gray-500 hover:bg-gray-600';
	}

	return (
		<button
			type="button"
			onClick={props.onClick}
			className={
				props.className + ' transition-all duration-700 ease-in-out' + selected
			}
		>
			{props.text}
		</button>
	);
}

function Spinner(props) {
	return (
		<div className={props.className + ' spinner border-solid border-transparent'} />
	);
}

export {
	Button,
	Link,
	Card,
	CardCustom,
	ButtonSimple,
	SideBar,
	SideBarLink,
	CardList,
	CardListItem,
	Input,
	ButtonSubmit,
	InputFile,
	Checkbox,
	Tab,
	Spinner,
};
