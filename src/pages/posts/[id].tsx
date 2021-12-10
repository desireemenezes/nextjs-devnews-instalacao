import {useRouter} from 'next/router';

export default function Posts() {

    const router = useRouter();

    return (
        <>
        <div>
            <h1>Posts {router.query.id}</h1>
        </div>
        <p>
            {router.asPath}
        </p>
        </>
    );
}
  