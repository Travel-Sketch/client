import React, {useState} from "react";
import {LoginFormContainer} from "./style";
import {ReactComponent as Check} from "../../../../assets/icons/check.svg";
import TextInput from "../../../atoms/auth/TextInput";
import Button from "../../common/Button";
import logo from "../../../../assets/imgs/login-logo.jpg";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const login = async () => {
    console.log('login');
  }

  return (
    <LoginFormContainer>
      <div className='login-main'>
        <img src={logo}  alt=''/>
        <TextInput value={email} setValue={setEmail} label='아이디' placeholder='' type='text'/>
        <TextInput value={pwd} setValue={setPwd} label='비밀번호' placeholder='' type='text'/>
        <button type="button" className="save-login-state-btn">
          <Check/>
          로그인 상태 유지
        </button>
      </div>
      <div className='btn-group'>
        <Button text='로그인' type='Primary' handleClick={login}/>
        <div className="menu">
          <button type='button' className='right-bar'>
            아이디 찾기
          </button>
          <span className='bar'>|</span>
          <button type='button' className='right-bar'>
            비밀번호 찾기
          </button>
          <span className='bar'>|</span>
          <button type='button'>
            회원가입
          </button>
        </div>
      </div>
    </LoginFormContainer>
  )
}

export default LoginForm;