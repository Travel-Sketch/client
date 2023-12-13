import {JoinRequest, LoginRequest, ModifyNicknameRequest, ModifyPwdRequest, WithdrawalRequest} from '../../types/api';
import instance from './instance';

//로그인
export const login = async (request: LoginRequest) => {
  const response = await instance.post('/login', JSON.stringify(request));
  return response;
}

//회원가입
export const join = async (request: JoinRequest) => {
  const response = await instance.post('/join', JSON.stringify(request));
  return response;
}

//회원 정보 조회
export const searchMemberInfo = async () => {
  const response = await instance.get('/members');
  return response;
}

//비밀번호 변경
export const modifyPwd = async (request: ModifyPwdRequest) => {
  const response = await instance.patch('/members/pwd', JSON.stringify(request));
  return response;
}

//닉네임 변경
export const modifyNickname = async (request: ModifyNicknameRequest) => {
  const response = await instance.patch('/members/nickname', JSON.stringify(request));
  return response;
}

//회원 탈퇴
export const withdrawal = async (request: WithdrawalRequest) => {
  const response = await instance.patch('/members/withdrawal', JSON.stringify(request));
  return response;
}