interface AUTH_RESPONSE_STATUS {
  status: 'SUCCESS' | 'LOGIN_FAIL' | 'ALREADY_LOGOUT' | 'EMPTY_TOKEN';
}

export interface ADMIN_INFO_INTERFACE {
  email: string;
}

export interface AUTH_ADMIN_INFO_RESPONSE {
  code: number;
  data: {
    admin_info: ADMIN_INFO_INTERFACE;
  };
}

export interface AUTH_LOGIN_REQUEST_BODY {
  email: string;
  password: string;
}

export interface AUTH_LOGIN_RESPONSE extends AUTH_RESPONSE_STATUS {
  data: {
    token: string;
    project_uuid: string;
  };
}

export interface AUTH_RESPONSE extends AUTH_RESPONSE_STATUS {
  message: string;
}
