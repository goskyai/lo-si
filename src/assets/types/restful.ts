export type RESTFUL_ERROR_UNION =
  | 'TOO_MANY_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORMAT_ERROR'
  | 'VERIFY_FAIL'
  | 'TARGET_DUPLICATED'
  | 'TOO_FREQUENTLY_REQUEST'
  | 'MISSING_PARAMS'
  | 'BALANCE_NOT_ENOUGH';

export interface RESTFUL_INIT_DATA {
  project: {
    verifyKey: 'PHONE' | 'EMAIL';
    smsBalanceEnough: boolean;
    policy: string;
  };
  user: {
    name: string;
    avatarUrl: string;
  };
  otp: {
    intervalLimitSec: number;
    dailyLimitUnlockAt: string;
  };
}

export interface RESTFUL_ERROR {
  errors: {
    key: RESTFUL_ERROR_UNION;
    message: string;
  }[];
}

export interface RESTFUL_CODE {
  verifyTarget: string;
}

export interface RESTFUL_CODE_VERIFY {
  redirectUrl: string | null;
}

export enum CRUD {
  CREATE,
  READ,
  UPDATE,
  DELETE,
}
