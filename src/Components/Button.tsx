interface BookInterface {
    title: string;
    author: string;
    isbn: number;
    genres?: Array<string>;
    rating: number;
    cover?: string;
}

interface buttonProps {
    buttonText: string;
    buttonFunction: () => void;
}

export default function Button({ buttonText, buttonFunction }: buttonProps) {
    return (
        <>
            <button onClick={() => buttonFunction()}>{buttonText}</button>
        </>
    );
}
