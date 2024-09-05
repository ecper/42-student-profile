type Props ={
    src: string;
}

export default function Image({ src }: Props) {
    return (
        <div style={{width: "50%", height: "50%"}}>
            <img src={src} />
        </div>
    );
}