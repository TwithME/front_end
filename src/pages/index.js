import { LoginState } from '@/States/LoginState';
import { useRecoilValue } from 'recoil';
import Main from '../components/units/main/Main.container';

export default function MainPage() {
    const loginState = useRecoilValue(LoginState);
    return(
        <>
            {loginState ? <Main login></Main> : <Main></Main>}
        </>
    )
}