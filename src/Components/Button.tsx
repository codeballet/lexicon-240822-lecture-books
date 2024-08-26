interface BookInterface {
    title: string;
    author: string;
    isbn: number;
    genres?: Array<string>;
    rating: number;
    cover?: string;
}

export default function Button(
    buttonClass: string,
    buttonText: string
    // buttonFunction: () => void,
    // buttonBook: BookInterface
) {
    return (
        <>
            <button className={buttonClass}>{buttonText}</button>
        </>
    );
}
