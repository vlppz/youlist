import { Image } from 'next/image';

function Link(props) {
    if (props.active) {
        return (
            <button
                onClick={props.onClick}
                className={props.className + ' navLinkActive'}
            >
                {props.text}
            </button>
        );
    } else {
        return (
            <button onClick={props.onClick} className={props.className + ' navLink'}>
                {props.text}
            </button>
        );
    }
}

function Card(props) {
    return (
        <div className={props.className + ' card'}>
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
        <div className={props.className + ' cardCustom'}>
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
        <div className={props.className + ' sidebar'}>
            <div>{props.content}</div>
        </div>
    );
}

function SideBarLink(props) {
    if (props.active) {
        return (
            <button
                onClick={props.onClick}
                className={props.className + ' sidebarLinkActive'}
            >
                {props.text}
            </button>
        );
    } else {
        return (
            <button onClick={props.onClick} className={props.className + ' sidebarLink'}>
                {props.text}
            </button>
        );
    }
}

function CardList(props) {
    return (
        <div className={props.className + ' cardList'}>
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
        <div className={props.className + ' '}>
            <span>{props.contents}</span>
        </div>
    );
}

function Tab(props) {
    var selected;

    if (props.selected) {
        selected = ' tabSelected';
    } else {
        selected = ' tab';
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

function YtVid(props) {
    return (
        <iframe
            className={props.className}
            width={props.width}
            height={props.height}
            id={props.elId}
            src={'https://www.youtube.com/embed/' + props.id}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
}

export {
    Link,
    Card,
    CardCustom,
    SideBar,
    SideBarLink,
    CardList,
    CardListItem,
    Tab,
    Spinner,
    YtVid,
};
