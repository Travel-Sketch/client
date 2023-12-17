import {RegisterFormContainer} from "./style";
import TextInput from "../../../atoms/auth/TextInput";
import React, {useState} from "react";
import Button from "../../common/Button";
import GenderRadioInput from "../../common/GenderRadioInput";
import logo from "../../../../assets/imgs/login-logo.jpg";

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [nickname, setNickname] = useState('');

  const join = async () => {
    console.log('join');
  }

  return (
    <RegisterFormContainer>
      <div className='login-info'>
        <img src={logo} alt=''/>
        <div className='email-info'>
          <div className='left'>
            <TextInput type='text' label='이메일' placeholder='' value={email} setValue={setEmail}/>
          </div>
          <div className='right'>
            <Button handleClick={join} text='중복 검사' type='Primary'/>
          </div>
        </div>
        <TextInput type='password' label='비밀번호' placeholder='' value={pwd} setValue={setPwd}/>
        <TextInput type='password' label='비밀번호 확인' placeholder='' value={pwdConfirm} setValue={setPwdConfirm}/>
      </div>
      <div className='user-info'>
        <TextInput type='text' label='이름' placeholder='' value={name} setValue={setName}/>
        <div className='birth-info'>
          <TextInput type='text' label='생년월일' placeholder='' value={birth} setValue={setBirth}/>
          <GenderRadioInput value={gender} setValue={setGender}/>
        </div>
        <div className='nickname-info'>
          <div className='left'>
            <TextInput type='text' label='닉네임' placeholder='' value={nickname} setValue={setNickname}/>
          </div>
          <div className='right'>
            <Button handleClick={join} text='중복 검사' type='Primary'/>
          </div>
        </div>
      </div>
      <div>
        <Button handleClick={join} text='회원가입 완료' type='Primary'/>
      </div>
    </RegisterFormContainer>
  );
}

export default RegisterForm;