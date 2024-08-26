interface buttonProps {
    buttonText: string;
    buttonFunction: () => void;
    buttonClass?: string;
}

export default function Button({
    buttonClass,
    buttonText,
    buttonFunction,
}: buttonProps) {
    return (
        <>
            <button className={buttonClass} onClick={() => buttonFunction()}>
                {buttonText}
            </button>
        </>
    );
}
