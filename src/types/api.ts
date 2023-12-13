export interface LoginRequest {
  email: string;
  pwd: string;
}

export interface JoinRequest {
  email: string;
  pwd: string;
  name: string;
  birth: object;
  gender: string;
  nickname: string;
}

export interface ModifyPwdRequest {
  currentPwd: string;
  newPwd: string;
}

export interface ModifyNicknameRequest {
  nickname: string;
}

export interface WithdrawalRequest {
  pwd: string;
}